
import React from 'react';
import { ToolId } from '../types';

interface SidebarProps {
  activeTool: ToolId;
  onNavigate: (tool: ToolId) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onOpenSettings: () => void;
  onOpenFeedback: () => void;
}

// Navigation Group Data
const MAIN_NAV = [
  { id: ToolId.DASHBOARD, label: 'Home Hub', icon: 'fa-solid fa-house-chimney' },
  { id: ToolId.GROWTH_BLUEPRINT, label: 'Growth Blueprint', icon: 'fa-solid fa-map' },
  { id: ToolId.TRENDING_HUB, label: 'Market Pulse', icon: 'fa-solid fa-arrow-trend-up' },
  { id: ToolId.PROJECT_MANAGER, label: 'Project Manager', icon: 'fa-solid fa-list-check' },
  { id: ToolId.ANALYTICS, label: 'Analytics Dashboard', icon: 'fa-solid fa-chart-pie' },
  { id: ToolId.AI_AGENT_HUB, label: 'AI Agent Workforce', icon: 'fa-solid fa-users-gear' },
  { id: ToolId.FREELANCE_HUB, label: 'Freelance Hub', icon: 'fa-solid fa-laptop-code' },
  { id: ToolId.OFFICE_HUB, label: 'Office Suite', icon: 'fa-solid fa-briefcase' },
  { id: ToolId.WEBSITE_HUB, label: 'Digital Creator', icon: 'fa-solid fa-globe' },
];

const CREATIVE_NAV = [
  { id: ToolId.COPYWRITER, label: 'Copywriter', icon: 'fa-solid fa-pen-nib' },
  { id: ToolId.IMAGE_GEN, label: 'Image Studio & Editor', icon: 'fa-solid fa-image' },
  { id: ToolId.VIDEO_GEN, label: 'Veo Generator', icon: 'fa-solid fa-video' },
  { id: ToolId.VIDEO_EDITING_HUB, label: 'Video Edit Hub', icon: 'fa-solid fa-photo-film' },
  { id: ToolId.VFX_HUB, label: 'VFX Studio', icon: 'fa-solid fa-wand-magic-sparkles' },
  { id: ToolId.SPEECH_GEN, label: 'Voice Lab', icon: 'fa-solid fa-microphone-lines' },
  { id: ToolId.SOCIAL_MEDIA_HUB, label: 'Social Media Hub', icon: 'fa-solid fa-share-nodes' },
  { id: ToolId.MARKETING_HUB, label: 'Marketing Pro', icon: 'fa-solid fa-bullhorn' },
];

const RESOURCES_NAV = [
  { id: ToolId.MR_FREETOOLS, label: 'Mr. Freetools', icon: 'fa-solid fa-screwdriver-wrench' },
  { id: ToolId.CYBER_CAFE, label: 'Cyber Cafe', icon: 'fa-solid fa-mug-hot' },
  { id: ToolId.EDUCATION_HUB, label: 'Education Hub', icon: 'fa-solid fa-graduation-cap' },
  { id: ToolId.TOOL_EXPLORER, label: 'Tool Explorer', icon: 'fa-solid fa-compass' },
  { id: ToolId.FREE_TOOLS, label: 'Free Tools', icon: 'fa-solid fa-gift' },
  { id: ToolId.AIXPLORIA, label: 'AIxploria', icon: 'fa-solid fa-atom' },
  { id: ToolId.GOOGLE_HUB, label: 'Google Workspace+', icon: 'fa-brands fa-google' },
  { id: ToolId.CHAT, label: 'Gemini Chat', icon: 'fa-solid fa-comments' },
];

const FOOTER_NAV = [
  { id: ToolId.AFFILIATE, label: 'Affiliate', icon: 'fa-solid fa-handshake-simple' },
  { id: ToolId.CONTACT, label: 'Contact', icon: 'fa-solid fa-address-card' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTool, onNavigate, isOpen, setIsOpen, onOpenSettings, onOpenFeedback }) => {
  const toggleTheme = () => {
    document.body.classList.toggle('theme-light');
  };

  const renderNavGroup = (title: string, items: typeof MAIN_NAV) => (
    <div className="mb-6">
      <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{title}</p>
      {items.map((item) => {
        const isActive = activeTool === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              setIsOpen(false);
            }}
            className={`
              w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group relative mb-1
              ${isActive 
                ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100 font-bold' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'}
            `}
          >
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-600 rounded-r-full"></div>
            )}
            <div className={`
              w-5 flex justify-center transition-colors text-sm
              ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}
            `}>
              <i className={item.icon}></i>
            </div>
            <span className="text-sm">{item.label}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          bg-white/95 backdrop-blur-xl border-r border-slate-200/60 h-full flex flex-col shadow-2xl md:shadow-none font-sans
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <i className="fa-solid fa-bolt text-sm"></i>
            </div>
            <div>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight block leading-tight">Market365</span>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Pro Hub</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400 hover:text-slate-600 transition-colors">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <nav className="flex-1 px-4 overflow-y-auto py-2 custom-scrollbar">
          {renderNavGroup('Infinity', MAIN_NAV)}
          {renderNavGroup('Creative Studio', CREATIVE_NAV)}
          {renderNavGroup('Resources', RESOURCES_NAV)}
          {renderNavGroup('More', FOOTER_NAV)}
        </nav>

        <div className="p-4 border-t border-slate-100 flex flex-col gap-2">
          
          <div className="grid grid-cols-2 gap-2">
             <button 
               onClick={onOpenFeedback}
               className="py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-bold transition-all border border-slate-200 flex items-center justify-center gap-2"
               title="Give Feedback"
             >
               <i className="fa-regular fa-comment-dots"></i> Feedback
             </button>
             <button 
               onClick={onOpenSettings}
               className="py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-bold transition-all border border-slate-200 flex items-center justify-center gap-2"
               title="Settings"
             >
               <i className="fa-solid fa-gear"></i> Settings
             </button>
          </div>
          
          {/* Monetization Ready CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 text-white shadow-xl relative overflow-hidden group cursor-pointer border border-slate-700">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500 rounded-full -mr-10 -mt-10 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative z-10 text-center">
              <div className="mb-2">
                <i className="fa-solid fa-mug-hot text-amber-400 text-lg"></i>
              </div>
              <h4 className="text-sm font-bold mb-1">Support the Dev</h4>
              <p className="text-[10px] text-slate-400 mb-3 font-medium">Keep the tools free & fast.</p>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-all border border-white/10 flex items-center justify-center gap-2">
                Buy Me a Coffee <i className="fa-solid fa-heart text-red-400 text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
