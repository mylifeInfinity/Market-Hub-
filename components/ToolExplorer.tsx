
import React, { useState } from 'react';
import { ALL_TOOLS, TOOL_CATEGORIES, EXTERNAL_TOOLS } from '../data/toolsData';
import { AiTool, ToolId } from '../types';
import { generateText } from '../services/geminiService';

interface ToolExplorerProps {
  onNavigate?: (tool: ToolId) => void;
}

const ICON_PRESETS = [
  'fa-robot', 'fa-pen-nib', 'fa-image', 'fa-code', 'fa-bullhorn', 
  'fa-check-double', 'fa-wand-magic-sparkles', 'fa-brain', 'fa-rocket'
];

const ToolExplorer: React.FC<ToolExplorerProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTool, setActiveTool] = useState<AiTool | null>(null);
  
  // Custom Tools State
  const [userTools, setUserTools] = useState<AiTool[]>([]);
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);

  // Tool Creator State
  const [newTool, setNewTool] = useState<Partial<AiTool>>({
    title: '',
    description: '',
    category: 'Productivity',
    icon: 'fa-robot',
    promptTemplate: '',
    inputs: []
  });
  const [newInput, setNewInput] = useState({ key: '', label: '', placeholder: '' });

  // Runner State
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayedTools = [...userTools, ...ALL_TOOLS];

  // Helper to get icon for category header
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Marketing': return 'fa-bullhorn';
      case 'Business': return 'fa-briefcase';
      case 'Freelance': return 'fa-laptop-file';
      case 'Writing': return 'fa-pen-nib';
      case 'Productivity': return 'fa-check-double';
      case 'Design': return 'fa-palette';
      case 'Coding': return 'fa-code';
      case 'Social Media': return 'fa-hashtag';
      case 'Education': return 'fa-graduation-cap';
      case 'Lifestyle': return 'fa-mug-hot';
      case 'Finance': return 'fa-coins';
      case 'HR & Legal': return 'fa-scale-balanced';
      case 'App Development': return 'fa-mobile-screen';
      case 'Custom': return 'fa-wrench';
      default: return 'fa-layer-group';
    }
  };

  const getCategoryCount = (category: string) => {
    return displayedTools.filter(t => t.category === category).length;
  };

  // Helper to find external counterpart
  const getExternalCounterpart = (tool: AiTool) => {
    return EXTERNAL_TOOLS.find(ext => tool.title.toLowerCase().includes(ext.name.toLowerCase()));
  };

  const openTool = (tool: AiTool) => {
    setActiveTool(tool);
    setInputValues({});
    setResult('');
    setLoading(false);
    setCopied(false);
  };

  const closeTool = () => {
    setActiveTool(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleRunTool = async () => {
    if (!activeTool) return;

    setLoading(true);
    setResult('');
    setCopied(false);

    try {
      let prompt = activeTool.promptTemplate;
      // Replace placeholders globally
      Object.entries(inputValues).forEach(([key, value]) => {
        prompt = prompt.split(`{{${key}}}`).join(value);
      });

      const text = await generateText(prompt, "You are a specialized AI assistant executing a specific tool task. Be concise and helpful.");
      setResult(text);
    } catch (error) {
      setResult("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Creator Handlers
  const addInputToNewTool = () => {
    if (newInput.key && newInput.label) {
      setNewTool(prev => ({
        ...prev,
        inputs: [...(prev.inputs || []), { ...newInput }]
      }));
      setNewInput({ key: '', label: '', placeholder: '' });
    }
  };

  const removeInputFromNewTool = (idx: number) => {
    setNewTool(prev => ({
      ...prev,
      inputs: prev.inputs?.filter((_, i) => i !== idx)
    }));
  };

  const saveNewTool = () => {
    if (newTool.title && newTool.description && newTool.promptTemplate) {
      const tool: AiTool = {
        id: `custom-${Date.now()}`,
        title: newTool.title,
        description: newTool.description,
        category: newTool.category || 'Custom',
        icon: newTool.icon || 'fa-robot',
        promptTemplate: newTool.promptTemplate,
        inputs: newTool.inputs || []
      };
      setUserTools([tool, ...userTools]);
      setIsCreatorOpen(false);
      setNewTool({ title: '', description: '', category: 'Productivity', icon: 'fa-robot', promptTemplate: '', inputs: [] });
    }
  };

  const renderToolCard = (tool: AiTool, index: number) => {
    const externalMatch = getExternalCounterpart(tool);
    const isCustom = tool.id.startsWith('custom-');
    
    return (
      <div 
        key={tool.id}
        onClick={() => openTool(tool)}
        className={`glass-panel p-5 rounded-2xl hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-full relative overflow-hidden animate-fade-in-up bg-white border ${isCustom ? 'border-indigo-200 ring-1 ring-indigo-50' : 'border-slate-100'}`}
        style={{ animationDelay: `${(index % 10) * 50}ms` }}
      >
        {isCustom && (
           <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg z-10">
             CUSTOM
           </div>
        )}
        <div className="flex items-start justify-between mb-3">
          <div className={`w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg transition-colors duration-300 ${isCustom ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600'}`}>
            <i className={`fa-solid ${tool.icon}`}></i>
          </div>
          <div className="flex flex-col items-end gap-1">
             <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-100/50 px-2 py-0.5 rounded-md">
               {tool.category}
             </span>
             {externalMatch && (
               <button 
                 onClick={(e) => {
                   e.stopPropagation();
                   sessionStorage.setItem('aixploria_search', externalMatch.name);
                   onNavigate?.(ToolId.AIXPLORIA);
                 }}
                 className="text-[9px] font-bold text-cyan-600 hover:text-cyan-800 bg-cyan-50 hover:bg-cyan-100 px-2 py-0.5 rounded-md transition-colors flex items-center gap-1 z-20"
                 title={`Explore ${externalMatch.name} in AIxploria`}
               >
                 <i className="fa-solid fa-atom"></i> View External
               </button>
             )}
          </div>
        </div>
        
        <h3 className="font-bold text-base text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors line-clamp-1">{tool.title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4 flex-1">{tool.description}</p>
        
        <div className="flex items-center text-xs font-bold text-indigo-600 group-hover:underline">
          Launch Tool <i className="fa-solid fa-arrow-right ml-1 text-[10px]"></i>
        </div>
      </div>
    );
  };

  // Get Featured Tools (First 4)
  const featuredTools = ALL_TOOLS.slice(0, 4);

  // Categories list including "Custom" if any
  const displayCategories = userTools.length > 0 ? ['Custom', ...TOOL_CATEGORIES] : TOOL_CATEGORIES;

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto animate-fade-in pb-12">
      
      {/* LEFT SIDEBAR - Desktop */}
      <aside className="hidden lg:block w-64 flex-shrink-0 space-y-2 sticky top-0 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar pr-2">
         <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-3 mt-2">Categories</h3>
         <button
            onClick={() => setSelectedCategory('All')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${selectedCategory === 'All' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}
         >
            <div className="flex items-center gap-3">
              <i className={`fa-solid fa-layer-group w-5 text-center ${selectedCategory === 'All' ? 'text-white' : 'text-slate-400'}`}></i>
              <span>All Tools</span>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedCategory === 'All' ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
               {displayedTools.length}
            </span>
            {selectedCategory === 'All' && <i className="fa-solid fa-chevron-right text-xs"></i>}
         </button>
         {displayCategories.map(cat => (
           <button
             key={cat}
             onClick={() => setSelectedCategory(cat)}
             className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}
           >
             <div className="flex items-center gap-3">
                <i className={`fa-solid ${getCategoryIcon(cat)} w-5 text-center ${selectedCategory === cat ? 'text-white' : 'text-slate-400 group-hover:text-indigo-500'}`}></i>
                <span>{cat}</span>
             </div>
             <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedCategory === cat ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                {getCategoryCount(cat)}
             </span>
             {selectedCategory === cat && <i className="fa-solid fa-chevron-right text-xs"></i>}
           </button>
         ))}
      </aside>

      {/* RIGHT CONTENT */}
      <div className="flex-1 min-w-0">
        
        {/* Header & Mobile Controls */}
        <div className="space-y-6 mb-8">
           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2 lg:mb-0">
                   <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Tool Explorer</h2>
                   <button 
                      onClick={() => setIsCreatorOpen(true)}
                      className="lg:hidden px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-md hover:bg-indigo-700 transition-colors flex items-center gap-2"
                   >
                      <i className="fa-solid fa-plus"></i> Create
                   </button>
                </div>
                <p className="text-slate-500">Discover {displayedTools.length}+ AI agents or build your own.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                 {/* Create Tool Button (Desktop) */}
                 <button 
                    onClick={() => setIsCreatorOpen(true)}
                    className="hidden lg:flex px-5 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all items-center gap-2 whitespace-nowrap"
                 >
                    <i className="fa-solid fa-plus"></i> Create Custom Tool
                 </button>

                 {/* NEW: Category Filter Dropdown */}
                 <div className="relative w-full sm:w-48 group">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-4 pr-10 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all shadow-sm text-sm font-medium appearance-none cursor-pointer text-slate-600 hover:border-slate-300"
                    >
                      <option value="All">All Categories</option>
                      {displayCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <i className="fa-solid fa-filter absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors text-xs pointer-events-none"></i>
                 </div>

                 {/* Search Bar */}
                 <div className="relative w-full sm:w-80 group">
                   <input
                     type="text"
                     placeholder="Search tools..."
                     value={searchQuery}
                     onChange={handleSearch}
                     className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all shadow-sm text-sm font-medium"
                   />
                   <i className="fa-solid fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
                 </div>
              </div>
           </div>

           {/* Mobile Category Filters (Chips) */}
           <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 custom-scrollbar flex gap-3">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold border transition-all whitespace-nowrap ${selectedCategory === 'All' ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
              >
                <i className="fa-solid fa-layer-group mr-2"></i>
                All Tools
              </button>
              {displayCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold border transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                >
                  <i className={`fa-solid ${getCategoryIcon(cat)} mr-2`}></i>
                  {cat}
                  <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {getCategoryCount(cat)}
                  </span>
                </button>
              ))}
           </div>
        </div>

        {/* Featured Section (Only show when not searching & All selected) */}
        {!searchQuery && selectedCategory === 'All' && (
          <div className="mb-10">
             <div className="flex items-center gap-2 mb-4 px-1">
               <i className="fa-solid fa-fire text-amber-500"></i>
               <h3 className="text-lg font-bold text-slate-800">Trending Now</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredTools.map((tool, idx) => (
                  <div 
                    key={tool.id} 
                    onClick={() => openTool(tool)}
                    className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-5 text-white cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden shadow-lg shadow-indigo-500/20"
                  >
                     <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-6 -mt-6 blur-xl"></div>
                     <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm">
                          <i className={`fa-solid ${tool.icon}`}></i>
                        </div>
                        <h4 className="font-bold text-lg mb-1">{tool.title}</h4>
                        <p className="text-indigo-100 text-xs line-clamp-2 opacity-90">{tool.description}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Main Grid */}
        <div className="min-h-[400px]">
          {(searchQuery || selectedCategory !== 'All') ? (
            <div>
              <div className="flex items-center gap-2 mb-4 px-1">
                 <h3 className="text-lg font-bold text-slate-800">
                    {searchQuery ? `Search Results` : `${selectedCategory} Tools`}
                 </h3>
                 <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                    {displayedTools.filter(tool => {
                        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
                        const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                              tool.description.toLowerCase().includes(searchQuery.toLowerCase());
                        return matchesCategory && matchesSearch;
                    }).length}
                 </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedTools.filter(tool => {
                   const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
                   const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
                   return matchesCategory && matchesSearch;
                }).map((tool, index) => renderToolCard(tool, index))}
                
                {displayedTools.filter(tool => {
                   const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
                   const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
                   return matchesCategory && matchesSearch;
                }).length === 0 && (
                  <div className="col-span-full text-center py-20 text-slate-400 bg-white/50 rounded-3xl border border-dashed border-slate-200">
                    <i className="fa-solid fa-robot text-4xl mb-4 opacity-30"></i>
                    <p className="text-lg font-medium">No tools found matching your criteria.</p>
                    <button 
                      onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                      className="mt-2 text-indigo-600 font-bold hover:underline"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Category Sections (When in 'All' view) */
            <div className="space-y-12">
              {displayCategories.map((category) => {
                const categoryTools = displayedTools.filter(t => t.category === category);
                if (categoryTools.length === 0) return null;

                return (
                  <div key={category} className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <i className={`fa-solid ${getCategoryIcon(category)}`}></i>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">{category}</h3>
                      <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">{categoryTools.length}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categoryTools.map((tool, index) => renderToolCard(tool, index))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Tool Runner Modal */}
      {activeTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={closeTool}></div>
          <div className="bg-white rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-hidden relative z-10 shadow-2xl flex flex-col animate-scale-in border border-white/20">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xl shadow-lg shadow-indigo-500/30">
                  <i className={`fa-solid ${activeTool.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{activeTool.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{activeTool.category}</p>
                  </div>
                </div>
              </div>
              <button onClick={closeTool} className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center transition-all shadow-sm">
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 bg-white flex-1">
              <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                 {activeTool.description}
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {activeTool.inputs.map(input => (
                  <div key={input.key} className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide ml-1 flex justify-between">
                       {input.label}
                       <span className="text-slate-400 font-normal normal-case">Required</span>
                    </label>
                    <input
                      type="text"
                      placeholder={input.placeholder}
                      value={inputValues[input.key] || ''}
                      onChange={(e) => setInputValues(prev => ({ ...prev, [input.key]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-slate-800 text-sm font-medium placeholder:text-slate-400 shadow-sm"
                    />
                  </div>
                ))}
              </div>

              {result && (
                <div className="mt-6 animate-fade-in-up">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                      <i className="fa-solid fa-wand-magic-sparkles text-indigo-500"></i> Generated Result
                    </h4>
                    <button 
                      onClick={handleCopy}
                      className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${copied ? 'bg-green-100 text-green-700' : 'text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100'}`}
                    >
                      {copied ? <i className="fa-solid fa-check"></i> : <i className="fa-regular fa-copy"></i>} 
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-inner relative overflow-hidden">
                    <div className="prose prose-sm prose-invert max-w-none whitespace-pre-wrap leading-relaxed relative z-10">
                      {result}
                    </div>
                    {/* Decorative blurred blob */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
               <button onClick={closeTool} className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                 Close
               </button>
               <button 
                 onClick={handleRunTool}
                 disabled={loading}
                 className={`px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2 transform active:scale-95
                   ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5'}
                 `}
               >
                 {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : <i className="fa-solid fa-play"></i>}
                 Run Tool
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Tool CREATOR Modal */}
      {isCreatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsCreatorOpen(false)}></div>
          <div className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-hidden relative z-10 shadow-2xl flex flex-col animate-scale-in">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
                <h3 className="text-xl font-bold text-slate-900">Create Custom AI Tool</h3>
                <button onClick={() => setIsCreatorOpen(false)} className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 transition-colors">
                  <i className="fa-solid fa-xmark"></i>
                </button>
             </div>
             
             <div className="p-6 overflow-y-auto custom-scrollbar space-y-5 bg-white flex-1">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Tool Name</label>
                      <input 
                        type="text" 
                        value={newTool.title} 
                        onChange={e => setNewTool({...newTool, title: e.target.value})}
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none text-sm"
                        placeholder="e.g. Email Summarizer"
                      />
                   </div>
                   <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Category</label>
                      <select 
                        value={newTool.category}
                        onChange={e => setNewTool({...newTool, category: e.target.value})}
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none text-sm bg-white"
                      >
                         <option>Custom</option>
                         {TOOL_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                      </select>
                   </div>
                </div>

                <div className="space-y-1">
                   <label className="text-xs font-bold text-slate-500 uppercase">Icon</label>
                   <div className="flex gap-2 flex-wrap">
                      {ICON_PRESETS.map(icon => (
                        <button
                          key={icon}
                          onClick={() => setNewTool({...newTool, icon})}
                          className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${newTool.icon === icon ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-50'}`}
                        >
                           <i className={`fa-solid ${icon}`}></i>
                        </button>
                      ))}
                      <input 
                         type="text"
                         value={newTool.icon}
                         onChange={e => setNewTool({...newTool, icon: e.target.value})}
                         placeholder="fa-solid fa-..."
                         className="flex-1 px-3 rounded-lg border border-slate-200 text-sm focus:border-indigo-500 outline-none"
                      />
                   </div>
                </div>

                <div className="space-y-1">
                   <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
                   <textarea 
                     value={newTool.description}
                     onChange={e => setNewTool({...newTool, description: e.target.value})}
                     className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none text-sm h-20 resize-none"
                     placeholder="What does this tool do?"
                   />
                </div>

                {/* Prompt Template */}
                <div className="space-y-1">
                   <label className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                     <span>Prompt Template</span>
                     <span className="text-[10px] text-indigo-600 font-normal">Use {"{{variable}}"} for inputs</span>
                   </label>
                   <textarea 
                     value={newTool.promptTemplate}
                     onChange={e => setNewTool({...newTool, promptTemplate: e.target.value})}
                     className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none text-sm h-32 font-mono text-slate-600 resize-none"
                     placeholder="Write a blog post about {{topic}} focusing on {{keywords}}..."
                   />
                </div>

                {/* Input Builder */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                   <label className="text-xs font-bold text-slate-500 uppercase mb-3 block">Define User Inputs</label>
                   
                   <div className="space-y-2 mb-3">
                      {newTool.inputs?.map((inp, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-sm bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
                            <span className="font-mono text-indigo-600 text-xs bg-indigo-50 px-1.5 py-0.5 rounded">{"{{"}{inp.key}{"}}"}</span>
                            <span className="font-bold text-slate-700">{inp.label}</span>
                            <span className="text-slate-400 text-xs italic flex-1 truncate">{inp.placeholder}</span>
                            <button onClick={() => removeInputFromNewTool(idx)} className="text-red-400 hover:text-red-600 px-2"><i className="fa-solid fa-trash"></i></button>
                         </div>
                      ))}
                      {(!newTool.inputs || newTool.inputs.length === 0) && (
                         <p className="text-xs text-slate-400 italic text-center py-2">No inputs defined yet.</p>
                      )}
                   </div>

                   <div className="grid grid-cols-3 gap-2">
                      <input 
                         type="text" 
                         placeholder="Var Name (e.g. topic)" 
                         value={newInput.key}
                         onChange={e => setNewInput({...newInput, key: e.target.value.replace(/\s+/g, '')})}
                         className="px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-indigo-500 outline-none"
                      />
                      <input 
                         type="text" 
                         placeholder="Label (e.g. Topic)" 
                         value={newInput.label}
                         onChange={e => setNewInput({...newInput, label: e.target.value})}
                         className="px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-indigo-500 outline-none"
                      />
                      <div className="flex gap-2">
                         <input 
                           type="text" 
                           placeholder="Placeholder..." 
                           value={newInput.placeholder}
                           onChange={e => setNewInput({...newInput, placeholder: e.target.value})}
                           className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:border-indigo-500 outline-none"
                         />
                         <button 
                           onClick={addInputToNewTool}
                           disabled={!newInput.key || !newInput.label}
                           className="px-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                         >
                            <i className="fa-solid fa-plus"></i>
                         </button>
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-5 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/50">
                <button onClick={() => setIsCreatorOpen(false)} className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                   Cancel
                </button>
                <button 
                   onClick={saveNewTool}
                   disabled={!newTool.title || !newTool.promptTemplate}
                   className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                   Create Tool
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolExplorer;
