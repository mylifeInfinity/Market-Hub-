
import { GoogleGenAI, GenerateContentResponse, Modality } from "@google/genai";

// Initialize the client for standard tasks
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates text content using Gemini 3 Flash.
 */
export const generateText = async (prompt: string, systemInstruction?: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });
    
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Text Generation Error:", error);
    throw new Error("Failed to generate text. Please try again.");
  }
};

/**
 * Generates content with Google Grounding (Search or Maps).
 * Returns text and grounding metadata.
 */
export const generateGroundedContent = async (prompt: string, type: 'search' | 'maps'): Promise<{ text: string, sources: any[] }> => {
  try {
    let model = 'gemini-3-flash-preview';
    let tools: any[] = [];
    
    if (type === 'search') {
      model = 'gemini-3-flash-preview';
      tools = [{ googleSearch: {} }];
    } else if (type === 'maps') {
      // Maps grounding is only supported in Gemini 2.5 series
      model = 'gemini-2.5-flash';
      tools = [{ googleMaps: {} }];
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        tools: tools,
      },
    });

    const text = response.text || "No response generated.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return { text, sources: chunks };
  } catch (error) {
    console.error("Gemini Grounding Error:", error);
    throw new Error(`Failed to perform ${type} request.`);
  }
};

/**
 * Generates images using Gemini 2.5 Flash Image.
 * Returns a base64 data URL.
 */
export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    // Extract image from parts
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("No image data found in response.");
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    throw new Error("Failed to generate image. Please try again.");
  }
};

/**
 * Generates speech from text using Gemini 2.5 Flash TTS.
 * Returns base64 audio data.
 */
export const generateSpeech = async (text: string, voiceName: string = 'Kore'): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: voiceName },
            },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) throw new Error("No audio data generated");
    
    return base64Audio;
  } catch (error) {
    console.error("Gemini Speech Generation Error:", error);
    throw new Error("Failed to generate speech.");
  }
};

/**
 * Generates video using Veo 3.1 Fast.
 * Returns a Blob URL to the video.
 */
export const generateVideo = async (prompt: string, aspectRatio: '16:9' | '9:16' = '16:9'): Promise<string> => {
  try {
    // IMPORTANT: Create a new instance to ensure we pick up the latest API key from the environment
    // after the user has selected it via window.aistudio.
    const veoAi = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let operation = await veoAi.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p', 
        aspectRatio: aspectRatio
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      operation = await veoAi.operations.getVideosOperation({operation: operation});
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) throw new Error("Video generation failed or returned no URI.");

    // Fetch the video bytes using the key
    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);

  } catch (error) {
    console.error("Veo Video Generation Error:", error);
    throw new Error("Failed to generate video. This feature requires a paid billing account.");
  }
};

/**
 * Chat stream handler.
 */
export const createChatSession = () => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: "You are a helpful, professional, and concise AI assistant for the OnlineMarket365 platform.",
    }
  });
};
