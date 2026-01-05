
import React, { useState } from 'react';
import { BROWSERS_AND_ENGINES } from '../data/toolsData';
import { generateGroundedContent } from '../services/geminiService';

type Category = 'All' | 'Search Engine' | 'Browser';

const CyberCafeHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [engine, setEngine] = useState('https://www.google.com/search?q=');
  
  // AI Search State
  const [searchMode, setSearchMode] = useState<'redirect' | 'ai'>('redirect');
  const [aiResult, setAiResult] = useState('');
  const [aiSources, setAiSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (searchMode === 'redirect') {
      window.open(engine + encodeURIComponent(searchQuery), '_blank');
    } else {
      setLoading(true);
      setAiResult('');
      setAiSources([]);
      try {
        const { text, sources } = await generateGroundedContent(searchQuery, 'search');
        setAiResult(text);
        setAiSources(sources);
      } catch (error) {
        console.error(error);
        setAiResult("Connection to the Net interrupted. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const filteredItems = BROWSERS_AND_ENGINES.filter(item => {
    const matchesTab = activeTab === 'All' || item.type === activeTab;
    return matchesTab;
  });

  return (
    <div className="max-w-7xl mx-auto pb-12 animate-fade-in space-y-12">
      
      {/* Hero Header - Cyberpunk Style */}
      <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 text-white p-10 md:p-14 text-center shadow-2xl border border-cyan-500/50">
         <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -mr-20 -mt-20 animate-pulse"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -ml-20 -mb-20"></div>
         
         {/* Grid Overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-cyan-500/50 backdrop-blur-md text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
               <i className="fa-solid fa-mug-hot"></i> Cyber Cafe • Terminal 01
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
               The Net Gateway
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Access the world wide web. Choose your browser, select your engine, or use AI to surf the digital wave directly.
            </p>

            {/* Quick Search Bar */}
            <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-lg p-2 rounded-2xl border border-white/10 shadow-xl relative transition-all duration-300">
               {/* Mode Toggles */}
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex bg-black/40 rounded-full p-1 border border-white/10 backdrop-blur-md">
                  <button 
                    onClick={() => setSearchMode('redirect')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${searchMode === 'redirect' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    Classic
                  </button>
                  <button 
                    onClick={() => setSearchMode('ai')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${searchMode === 'ai' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    AI Search
                  </button>
               </div>

               <form onSubmit={handleSearch} className="flex gap-2">
                  {searchMode === 'redirect' ? (
                    <select 
                      value={engine}
                      onChange={(e) => setEngine(e.target.value)}
                      className="bg-white/10 text-white text-xs font-bold rounded-xl px-3 py-3 border border-white/5 outline-none focus:bg-white/20 transition-all cursor-pointer w-24 md:w-auto"
                    >
                       <option value="https://www.google.com/search?q=">Google</option>
                       <option value="https://www.bing.com/search?q=">Bing</option>
                       <option value="https://duckduckgo.com/?q=">DuckDuckGo</option>
                       <option value="https://search.yahoo.com/search?p=">Yahoo</option>
                    </select>
                  ) : (
                    <div className="bg-purple-500/20 text-purple-300 text-xs font-bold rounded-xl px-3 py-3 border border-purple-500/30 flex items-center justify-center min-w-[80px]">
                       <i className="fa-solid fa-wand-magic-sparkles mr-2"></i> AI
                    </div>
                  )}
                  
                  <input 
                     type="text" 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     placeholder={searchMode === 'redirect' ? "Quick Search..." : "Ask the Web (Grounding Enabled)..."}
                     className="flex-1 bg-transparent text-white placeholder:text-slate-500 px-4 py-3 outline-none font-medium"
                  />
                  <button 
                    type="submit" 
                    disabled={loading || !searchQuery.trim()}
                    className={`rounded-xl px-5 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] text-white ${loading ? 'bg-slate-600 cursor-not-allowed' : searchMode === 'ai' ? 'bg-purple-600 hover:bg-purple-500' : 'bg-cyan-600 hover:bg-cyan-500'}`}
                  >
                     {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : <i className="fa-solid fa-magnifying-glass"></i>}
                  </button>
               </form>
            </div>
         </div>
      </div>

      {/* AI Search Results */}
      {(aiResult || loading) && searchMode === 'ai' && (
        <div className="animate-fade-in-up bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
           {loading ? (
              <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                 <i className="fa-solid fa-satellite-dish text-4xl mb-4 animate-pulse text-purple-500"></i>
                 <p className="font-medium animate-pulse">Scanning the neural net...</p>
              </div>
           ) : (
              <>
                 <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg">
                       <i className="fa-brands fa-google"></i>
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900">Search Results</h3>
                       <p className="text-xs text-slate-500">Grounded by Google Search</p>
                    </div>
                 </div>
                 
                 <div className="prose prose-slate max-w-none mb-8 leading-relaxed">
                    {aiResult}
                 </div>

                 {aiSources.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {aiSources.map((source, idx) => (
                          source.web ? (
                             <a key={idx} href={source.web.uri} target="_blank" rel="noreferrer" className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-purple-50 hover:border-purple-200 transition-all group">
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-200 group-hover:border-purple-200 group-hover:text-purple-500 flex-shrink-0">
                                   <i className="fa-solid fa-earth-americas text-xs"></i>
                                </div>
                                <div className="flex-1 min-w-0">
                                   <h4 className="font-bold text-slate-800 text-sm truncate group-hover:text-purple-700">{source.web.title}</h4>
                                   <p className="text-xs text-slate-500 truncate">{source.web.uri}</p>
                                </div>
                                <i className="fa-solid fa-arrow-up-right-from-square text-xs text-slate-300 group-hover:text-purple-400"></i>
                             </a>
                          ) : null
                       ))}
                    </div>
                 )}
              </>
           )}
        </div>
      )}

      {/* Main Directory */}
      <div className="space-y-8">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
               <i className="fa-solid fa-globe text-cyan-600"></i> Access Points
            </h2>
            
            <div className="flex gap-2">
               {['All', 'Search Engine', 'Browser'].map((cat) => (
                  <button
                     key={cat}
                     onClick={() => setActiveTab(cat as Category)}
                     className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                        activeTab === cat 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
                     }`}
                  >
                     {cat}
                  </button>
               ))}
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
               <a 
                 key={idx}
                 href={item.url}
                 target="_blank"
                 rel="noreferrer"
                 className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
               >
                  <div className="flex items-center justify-between mb-6">
                     <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`fa-brands ${item.icon.replace('fa-brands ', '')} ${item.icon}`}></i>
                     </div>
                     <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.type === 'Browser' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                        {item.type}
                     </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                     {item.name}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                     {item.description}
                  </p>

                  <div className="w-full py-3 rounded-xl bg-slate-50 text-slate-900 font-bold group-hover:bg-slate-900 group-hover:text-white transition-all text-center flex items-center justify-center gap-2">
                     Launch <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
               </a>
            ))}
         </div>
      </div>

    </div>
  );
};

export default CyberCafeHub;
