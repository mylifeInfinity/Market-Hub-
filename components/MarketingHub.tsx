
import React, { useState } from 'react';
import { generateText } from '../services/geminiService';
import { MARKETING_SOFTWARE, ECOMMERCE_PLATFORMS, SOCIAL_MEDIA_PLATFORMS } from '../data/toolsData';

type StrategyMode = 'campaign' | 'email_drip' | 'ad_copy' | 'product_desc';
type TabCategory = 'AI Strategist' | 'Software Suite' | 'E-Commerce' | 'Social Media';

const MarketingHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabCategory>('AI Strategist');
  const [strategyMode, setStrategyMode] = useState<StrategyMode>('campaign');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput('');

    let prompt = '';
    const systemInstruction = "You are a Chief Marketing Officer and Senior Copywriter.";

    switch (strategyMode) {
      case 'campaign':
        prompt = `Create a comprehensive 360-degree marketing campaign strategy for: "${input}". Include target audience, key channels, messaging pillars, and a rough timeline.`;
        break;
      case 'email_drip':
        prompt = `Outline a 5-part email nurture sequence for a customer interested in: "${input}". Include subject lines and brief body content for each email.`;
        break;
      case 'ad_copy':
        prompt = `Write high-converting ad copy (Headline + Body) for Facebook, Google, and LinkedIn ads promoting: "${input}". Focus on benefits and ROI.`;
        break;
      case 'product_desc':
        prompt = `Write a persuasive, SEO-optimized e-commerce product description for: "${input}". Use sensory words and focus on solving user pain points.`;
        break;
    }

    try {
      const result = await generateText(prompt, systemInstruction);
      setOutput(result);
    } catch (e) {
      setOutput("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderDirectory = (items: any[], type: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
      {items.map((item, idx) => (
        <a 
          key={idx}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden h-full"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
              {item.icon.startsWith('fa-') ? <i className={`fa-brands ${item.icon.replace('fa-brands ', '')} ${item.icon}`}></i> : <i className={`fa-solid ${item.icon}`}></i>}
            </div>
            <span className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-100">
               {item.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
             {item.name}
             <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"></i>
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
             {item.description}
          </p>

          <div className="mt-auto text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
             Open Platform <i className="fa-solid fa-chevron-right text-[10px]"></i>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto pb-12 animate-fade-in space-y-12">
      
      {/* Hero Header */}
      <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-orange-600 to-red-700 text-white p-10 md:p-14 text-center shadow-2xl border border-orange-500">
         <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -ml-20 -mt-20"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-[100px] -mr-20 -mb-20"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold text-orange-100 uppercase tracking-widest mb-6">
               <i className="fa-solid fa-bullhorn"></i> Marketing Command Center
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
               Marketing Professional
            </h1>
            <p className="text-lg md:text-xl text-orange-100 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               The ultimate directory for marketers. Access AI strategy tools, top software suites, e-commerce giants, and all social platforms in one place.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
               {(['AI Strategist', 'Software Suite', 'E-Commerce', 'Social Media'] as TabCategory[]).map((tab) => (
                  <button
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                        activeTab === tab 
                        ? 'bg-white text-orange-700 border-white shadow-lg' 
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                     }`}
                  >
                     {tab === 'AI Strategist' && <i className="fa-solid fa-robot mr-2"></i>}
                     {tab === 'Software Suite' && <i className="fa-solid fa-layer-group mr-2"></i>}
                     {tab === 'E-Commerce' && <i className="fa-solid fa-cart-shopping mr-2"></i>}
                     {tab === 'Social Media' && <i className="fa-solid fa-share-nodes mr-2"></i>}
                     {tab}
                  </button>
               ))}
            </div>
         </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[500px]">
         
         {activeTab === 'AI Strategist' && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
               <div className="lg:col-span-4 space-y-4">
                  <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm h-full">
                     <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <i className="fa-solid fa-wand-magic-sparkles text-orange-600"></i> Strategy Generator
                     </h2>
                     <div className="space-y-3">
                        <button 
                           onClick={() => { setStrategyMode('campaign'); setInput(''); setOutput(''); }}
                           className={`w-full text-left p-4 rounded-xl transition-all font-bold border flex items-center gap-3 ${strategyMode === 'campaign' ? 'bg-orange-50 border-orange-200 text-orange-700 shadow-sm' : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'}`}
                        >
                           <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center"><i className="fa-solid fa-bullseye"></i></div>
                           Campaign Strategy
                        </button>
                        <button 
                           onClick={() => { setStrategyMode('email_drip'); setInput(''); setOutput(''); }}
                           className={`w-full text-left p-4 rounded-xl transition-all font-bold border flex items-center gap-3 ${strategyMode === 'email_drip' ? 'bg-orange-50 border-orange-200 text-orange-700 shadow-sm' : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'}`}
                        >
                           <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center"><i className="fa-solid fa-envelope-open-text"></i></div>
                           Email Drip Sequence
                        </button>
                        <button 
                           onClick={() => { setStrategyMode('ad_copy'); setInput(''); setOutput(''); }}
                           className={`w-full text-left p-4 rounded-xl transition-all font-bold border flex items-center gap-3 ${strategyMode === 'ad_copy' ? 'bg-orange-50 border-orange-200 text-orange-700 shadow-sm' : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'}`}
                        >
                           <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center"><i className="fa-solid fa-rectangle-ad"></i></div>
                           Ad Copy (FB/Google)
                        </button>
                        <button 
                           onClick={() => { setStrategyMode('product_desc'); setInput(''); setOutput(''); }}
                           className={`w-full text-left p-4 rounded-xl transition-all font-bold border flex items-center gap-3 ${strategyMode === 'product_desc' ? 'bg-orange-50 border-orange-200 text-orange-700 shadow-sm' : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'}`}
                        >
                           <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center"><i className="fa-solid fa-tag"></i></div>
                           Product Description
                        </button>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-8 space-y-6">
                  <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                     <label className="block text-sm font-bold text-slate-700 mb-3 ml-1">
                        {strategyMode === 'campaign' && "What product or service are you launching?"}
                        {strategyMode === 'email_drip' && "Who is the customer and what did they sign up for?"}
                        {strategyMode === 'ad_copy' && "Describe the offer or product:"}
                        {strategyMode === 'product_desc' && "Product name and key features:"}
                     </label>
                     <textarea 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all h-32 resize-none text-slate-700 placeholder:text-slate-400"
                        placeholder="e.g. A new organic coffee subscription for remote workers..."
                     />
                     <div className="mt-4 flex justify-end">
                        <button 
                           onClick={handleGenerate}
                           disabled={loading || !input.trim()}
                           className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all flex items-center gap-2 ${loading ? 'bg-slate-300 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 hover:-translate-y-0.5 shadow-orange-500/30'}`}
                        >
                           {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : <i className="fa-solid fa-wand-magic-sparkles"></i>}
                           Generate Strategy
                        </button>
                     </div>
                  </div>

                  {output && (
                     <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100 animate-fade-in-up">
                        <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-4">
                           <h3 className="font-bold text-lg text-slate-800">Generated Strategy</h3>
                           <button onClick={() => navigator.clipboard.writeText(output)} className="text-xs font-bold text-orange-600 hover:text-orange-800 bg-orange-50 px-3 py-1.5 rounded-lg"><i className="fa-regular fa-copy mr-1"></i> Copy</button>
                        </div>
                        <div className="prose prose-slate max-w-none whitespace-pre-wrap text-slate-600 leading-relaxed">
                           {output}
                        </div>
                     </div>
                  )}
               </div>
            </section>
         )}

         {activeTab === 'Software Suite' && (
            <div className="space-y-6">
               <div className="flex items-center gap-3 px-2">
                  <i className="fa-solid fa-cubes-stacked text-2xl text-slate-400"></i>
                  <h2 className="text-2xl font-bold text-slate-900">Essential Marketing Software</h2>
               </div>
               {renderDirectory(MARKETING_SOFTWARE, 'Software')}
            </div>
         )}

         {activeTab === 'E-Commerce' && (
            <div className="space-y-6">
               <div className="flex items-center gap-3 px-2">
                  <i className="fa-solid fa-store text-2xl text-slate-400"></i>
                  <h2 className="text-2xl font-bold text-slate-900">Top E-Commerce Platforms</h2>
               </div>
               {renderDirectory(ECOMMERCE_PLATFORMS, 'Commerce')}
            </div>
         )}

         {activeTab === 'Social Media' && (
            <div className="space-y-6">
               <div className="flex items-center gap-3 px-2">
                  <i className="fa-solid fa-users text-2xl text-slate-400"></i>
                  <h2 className="text-2xl font-bold text-slate-900">Social Media Apps</h2>
               </div>
               {renderDirectory(SOCIAL_MEDIA_PLATFORMS, 'Social')}
            </div>
         )}

      </div>
    </div>
  );
};

export default MarketingHub;
