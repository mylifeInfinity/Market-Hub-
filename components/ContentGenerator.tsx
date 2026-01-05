
import React, { useState } from 'react';
import { generateText } from '../services/geminiService';

const SUGGESTIONS = [
  { 
    icon: 'fa-bolt', 
    text: 'Promote a new AI coaching service using the Hook-Story-Offer framework.', 
    type: 'Viral Framework', 
    tone: 'Persuasive',
    label: 'Hook-Story-Offer' 
  },
  { 
    icon: 'fa-pen-fancy', 
    text: 'A complete guide to digital marketing trends in 2025 covering AI, SEO, and Social Media.', 
    type: 'Blog Post', 
    tone: 'Professional',
    label: 'SEO Article' 
  },
  { 
    icon: 'fa-fire', 
    text: '5 unpopular opinions about remote work that nobody talks about.', 
    type: 'Social Media Caption', 
    tone: 'Persuasive',
    label: 'Viral Tweet' 
  },
  { 
    icon: 'fa-handshake', 
    text: 'Introductory email to a potential B2B partner proposing a strategic collaboration.', 
    type: 'Email Newsletter', 
    tone: 'Professional',
    label: 'B2B Outreach' 
  }
];

const ContentGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Professional');
  const [type, setType] = useState('Blog Post');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    setGeneratedContent('');

    let prompt = '';
    
    if (type === 'Viral Framework') {
      prompt = `Apply the "Hook-Story-Offer" framework to the topic: "${topic}".
      Structure the output clearly with these sections:
      1. HOOK: A punchy, attention-grabbing opening (under 2 seconds reading time).
      2. STORY: A relatable short story about the problem and how this solution fixes it.
      3. OFFER: A direct and clear Call to Action (CTA).
      Tone: ${tone}.`;
    } else {
      prompt = `Write a ${tone.toLowerCase()} ${type.toLowerCase()} about "${topic}". Ensure the content is engaging, well-structured, and ready to use.`;
    }

    const systemInstruction = "You are an expert copywriter and content strategist specializing in viral marketing frameworks.";

    try {
      const text = await generateText(prompt, systemInstruction);
      setGeneratedContent(text);
    } catch (err) {
      setError('Failed to generate content. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const applySuggestion = (s: typeof SUGGESTIONS[0]) => {
    setTopic(s.text);
    setType(s.type);
    setTone(s.tone);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-white/50">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <i className="fa-solid fa-pen-nib text-indigo-600"></i> Smart Copywriter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Content Type</label>
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            >
              <option>Viral Framework</option>
              <option>Blog Post</option>
              <option>Social Media Caption</option>
              <option>Email Newsletter</option>
              <option>Product Description</option>
              <option>Ad Copy</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Tone of Voice</label>
            <select 
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            >
              <option>Persuasive</option>
              <option>Professional</option>
              <option>Casual & Friendly</option>
              <option>Humorous</option>
              <option>Urgent</option>
            </select>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-medium text-slate-700">Topic or Description</label>
            <textarea 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., The benefits of morning meditation for productivity..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all h-32 resize-none"
            />
            
            {/* Suggestions */}
            {!topic && (
              <div className="pt-2 animate-fade-in">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3 pl-1 flex items-center gap-2">
                   <i className="fa-solid fa-lightbulb text-yellow-500"></i> Quick Start Ideas:
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SUGGESTIONS.map((s, i) => (
                       <button
                         key={i}
                         onClick={() => applySuggestion(s)}
                         className="text-left p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 transition-all group flex items-start gap-3"
                       >
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                            <i className={`fa-solid ${s.icon} text-sm`}></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                               <span className="text-xs font-bold text-slate-700 group-hover:text-indigo-700">{s.label}</span>
                               <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">{s.tone}</span>
                            </div>
                            <span className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">{s.text}</span>
                          </div>
                       </button>
                    ))}
                 </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleGenerate}
            disabled={loading || !topic.trim()}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white shadow-lg shadow-indigo-500/30 transition-all
              ${loading || !topic.trim() ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5'}
            `}
          >
            {loading ? (
              <>
                <i className="fa-solid fa-circle-notch fa-spin"></i> Writing...
              </>
            ) : (
              <>
                <i className="fa-solid fa-wand-magic-sparkles"></i> Generate Content
              </>
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-center gap-2">
          <i className="fa-solid fa-circle-exclamation"></i> {error}
        </div>
      )}

      {generatedContent && (
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/50 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800">Generated Result</h3>
            <button 
              onClick={() => navigator.clipboard.writeText(generatedContent)}
              className="text-slate-400 hover:text-indigo-600 transition-colors"
              title="Copy to clipboard"
            >
              <i className="fa-regular fa-copy text-lg"></i>
            </button>
          </div>
          {/* Render Hook-Story-Offer visually distinct if detected */}
          {generatedContent.includes('HOOK:') ? (
             <div className="space-y-4">
                {generatedContent.split(/(HOOK:|STORY:|OFFER:)/).filter(Boolean).reduce((acc: any[], curr, i, arr) => {
                   if (['HOOK:', 'STORY:', 'OFFER:'].includes(curr)) {
                      acc.push({ title: curr.replace(':', ''), content: arr[i+1] });
                   }
                   return acc;
                }, []).map((section, idx) => (
                   <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">{section.title}</span>
                      <p className="text-slate-700 whitespace-pre-wrap">{section.content?.trim()}</p>
                   </div>
                ))}
             </div>
          ) : (
            <div className="prose prose-indigo max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap">
              {generatedContent}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
