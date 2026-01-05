import React, { useState, useRef } from 'react';
import { generateSpeech } from '../services/geminiService';

const VOICES = ['Kore', 'Puck', 'Charon', 'Fenrir', 'Zephyr'];

const SpeechGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('Kore');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // We keep track of the current audio context and source to stop them if needed
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);

  const stopAudio = () => {
    if (sourceRef.current) {
        try { sourceRef.current.stop(); } catch (e) {}
        sourceRef.current = null;
    }
    setIsPlaying(false);
  };

  const decodeAndPlay = async (base64Data: string) => {
    stopAudio(); // Stop any previous playback

    try {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
        }
        const ctx = audioContextRef.current;

        // Decode base64
        const binaryString = atob(base64Data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Decode audio data
        // Note: raw PCM isn't directly supported by decodeAudioData usually, but Gemini TTS returns a format 
        // that wraps reasonably well or we can process raw PCM. 
        // However, the standard Gemini TTS response usually is decodable by standard web audio API if it contains headers,
        // but the raw PCM example in docs suggests manual decoding. 
        // For simplicity with the standard API response, we will try standard decode first.
        
        // Actually, the system prompt example shows manual PCM to AudioBuffer conversion.
        // Let's implement that to be safe and compliant with the "Live" example, although TTS endpoint might return differently.
        // Wait, the TTS example in system prompt uses `decodeAudioData` on the base64 result directly?
        // Ah, the system prompt TTS example: "const audioBuffer = await decodeAudioData(decode(base64EncodedAudioString)..." 
        // It refers to a custom decodeAudioData function, not the native one. 
        // Let's implement the manual PCM decoding to be safe as per the instruction.

        const dataInt16 = new Int16Array(bytes.buffer);
        const numChannels = 1;
        // Gemini TTS typically 24kHz
        const sampleRate = 24000; 
        const frameCount = dataInt16.length;
        
        const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
        const channelData = buffer.getChannelData(0);
        
        for (let i = 0; i < frameCount; i++) {
            channelData[i] = dataInt16[i] / 32768.0;
        }

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.onended = () => setIsPlaying(false);
        sourceRef.current = source;
        source.start();
        setIsPlaying(true);

    } catch (err) {
        console.error("Audio playback error", err);
        setError("Failed to play audio.");
        setIsPlaying(false);
    }
  };

  const handleGenerate = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError('');
    stopAudio();

    try {
      const base64Audio = await generateSpeech(text, voice);
      await decodeAndPlay(base64Audio);
    } catch (err) {
      setError('Failed to generate speech. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-white/50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <i className="fa-solid fa-microphone-lines text-purple-600"></i> Voice Lab
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Select Voice</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {VOICES.map((v) => (
                <button
                  key={v}
                  onClick={() => setVoice(v)}
                  className={`
                    py-2 px-3 rounded-lg text-sm font-medium transition-all border
                    ${voice === v 
                      ? 'bg-purple-100 border-purple-300 text-purple-700 shadow-sm' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}
                  `}
                >
                  <i className="fa-solid fa-music mr-2 opacity-50"></i>
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Text to Speech</label>
            <textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to convert to speech..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all h-32 resize-none"
            />
          </div>

          <div className="flex justify-end gap-3">
             {isPlaying && (
                <button
                    onClick={stopAudio}
                    className="px-6 py-3 rounded-xl font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-all border border-red-200"
                >
                    <i className="fa-solid fa-stop"></i> Stop
                </button>
             )}
            <button
              onClick={handleGenerate}
              disabled={loading || !text.trim()}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-xl font-medium text-white shadow-lg shadow-purple-500/30 transition-all
                ${loading || !text.trim() ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 hover:-translate-y-0.5'}
              `}
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin"></i> Generating...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-volume-high"></i> Generate & Play
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-center gap-2">
            <i className="fa-solid fa-circle-exclamation"></i> {error}
          </div>
        )}
      </div>
      
      <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 text-sm text-slate-500 border border-white/40 flex gap-3">
          <i className="fa-solid fa-lightbulb text-yellow-500 mt-0.5"></i>
          <p>Tip: You can use this tool to generate voiceovers for your videos or read out your marketing copy.</p>
      </div>
    </div>
  );
};

export default SpeechGenerator;
