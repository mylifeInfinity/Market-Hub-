
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ContentGenerator from './components/ContentGenerator';
import ImageGenerator from './components/ImageGenerator';
import ChatAssistant from './components/ChatAssistant';
import VideoGenerator from './components/VideoGenerator';
import SpeechGenerator from './components/SpeechGenerator';
import ToolExplorer from './components/ToolExplorer';
import FreeToolsHub from './components/FreeToolsHub';
import AIxploria from './components/AIxploria';
import GoogleFeatureHub from './components/GoogleFeatureHub';
import OfficeHub from './components/OfficeHub';
import WebsiteCreatorsHub from './components/WebsiteCreatorsHub';
import FreelanceHub from './components/FreelanceHub';
import AiAgentHub from './components/AiAgentHub';
import VfxHub from './components/VfxHub';
import VideoEditingHub from './components/VideoEditingHub';
import EducationHub from './components/EducationHub';
import SocialMediaHub from './components/SocialMediaHub';
import MarketingHub from './components/MarketingHub';
import CyberCafeHub from './components/CyberCafeHub';
import TrendingMarketHub from './components/TrendingMarketHub';
import MrFreeTools from './components/MrFreeTools';
import Contact from './components/Contact';
import AffiliateProgram from './components/AffiliateProgram';
import ProjectManager from './components/ProjectManager';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import VoiceControl from './components/VoiceControl';
import ShortcutsModal from './components/ShortcutsModal';
import SettingsModal from './components/SettingsModal';
import FeedbackModal from './components/FeedbackModal';
import GrowthBlueprint from './components/GrowthBlueprint';
import { ToolId } from './types';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
}

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolId>(ToolId.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Modal States
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  // Notification State
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (title: string, message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const id = Date.now().toString() + Math.random().toString();
    setNotifications(prev => [...prev, { id, title, message, type, timestamp: new Date() }]);
    
    // Auto-dismiss
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 6000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Global Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Shortcuts: Ctrl + / or Cmd + /
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setIsShortcutsOpen(prev => !prev);
      }
      // Quick Nav Shortcuts
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
        if (e.key === 'h') { e.preventDefault(); setActiveTool(ToolId.DASHBOARD); }
        if (e.key === 'k') { e.preventDefault(); setActiveTool(ToolId.TOOL_EXPLORER); }
        if (e.key === 'p') { e.preventDefault(); setActiveTool(ToolId.PROJECT_MANAGER); }
        if (e.key === 's') { e.preventDefault(); setActiveTool(ToolId.SOCIAL_MEDIA_HUB); }
      }
      // Escape closes modals
      if (e.key === 'Escape') {
        setIsShortcutsOpen(false);
        setIsSettingsOpen(false);
        setIsFeedbackOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // System Automation & Auto-Update Simulation
  useEffect(() => {
    // 1. Initial Connectivity Check
    setTimeout(() => {
      // Simulate checking integrations
      const integrations = ['Google Drive', 'CRM', 'Payment Gateway'];
      const random = Math.random();
      if (random > 0.1) {
        // Success
        // Silent success usually, but showing for demo
      } else {
        addNotification('Connection Retry', 'Re-establishing link with Google Drive...', 'warning');
        setTimeout(() => addNotification('Connected', 'Google Drive connection restored.', 'success'), 3000);
      }
    }, 2000);

    // 2. Auto-Update Check
    setTimeout(() => {
      addNotification('System Update', 'Scanning for module updates...', 'info');
      setTimeout(() => {
        addNotification('Auto Update', 'All systems optimized and up to date (v2.5.0).', 'success');
      }, 2500);
    }, 5000);

    // 3. Background Automation Triggers
    const interval = setInterval(() => {
      if (Math.random() > 0.8) { // 20% chance every 45s
        const events = [
          { title: 'Drive Automation', msg: 'New file "Project_Specs.pdf" processed successfully.', type: 'info' },
          { title: 'CRM Trigger', msg: 'New inbound lead added to "Sales Pipeline".', type: 'success' },
          { title: 'Security Watchdog', msg: 'Routine security scan completed. System secure.', type: 'success' },
          { title: 'Performance', msg: 'Optimized cache storage. 45MB freed.', type: 'info' }
        ] as const;
        const event = events[Math.floor(Math.random() * events.length)];
        addNotification(event.title, event.msg, event.type);
      }
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeTool) {
      case ToolId.GROWTH_BLUEPRINT:
        return <GrowthBlueprint onNavigate={setActiveTool} />;
      case ToolId.TRENDING_HUB:
        return <TrendingMarketHub />;
      case ToolId.MR_FREETOOLS:
        return <MrFreeTools />;
      case ToolId.PROJECT_MANAGER:
        return <ProjectManager />;
      case ToolId.ANALYTICS:
        return <AnalyticsDashboard />;
      case ToolId.COPYWRITER:
        return <ContentGenerator />;
      case ToolId.IMAGE_GEN:
        return <ImageGenerator />;
      case ToolId.VIDEO_GEN:
        return <VideoGenerator />;
      case ToolId.SPEECH_GEN:
        return <SpeechGenerator />;
      case ToolId.TOOL_EXPLORER:
        return <ToolExplorer onNavigate={setActiveTool} />;
      case ToolId.FREE_TOOLS:
        return <FreeToolsHub />;
      case ToolId.AIXPLORIA:
        return <AIxploria />;
      case ToolId.GOOGLE_HUB:
        return <GoogleFeatureHub />;
      case ToolId.OFFICE_HUB:
        return <OfficeHub />;
      case ToolId.WEBSITE_HUB:
        return <WebsiteCreatorsHub />;
      case ToolId.FREELANCE_HUB:
        return <FreelanceHub />;
      case ToolId.AI_AGENT_HUB:
        return <AiAgentHub />;
      case ToolId.VFX_HUB:
        return <VfxHub />;
      case ToolId.VIDEO_EDITING_HUB:
        return <VideoEditingHub />;
      case ToolId.EDUCATION_HUB:
        return <EducationHub />;
      case ToolId.SOCIAL_MEDIA_HUB:
        return <SocialMediaHub />;
      case ToolId.MARKETING_HUB:
        return <MarketingHub />;
      case ToolId.CYBER_CAFE:
        return <CyberCafeHub />;
      case ToolId.CHAT:
        return <ChatAssistant />;
      case ToolId.AFFILIATE:
        return <AffiliateProgram />;
      case ToolId.CONTACT:
        return <Contact />;
      case ToolId.DASHBOARD:
      default:
        return <Dashboard onNavigate={setActiveTool} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-transparent font-sans">
      <Sidebar 
        activeTool={activeTool} 
        onNavigate={setActiveTool} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
      />
      
      <main className="flex-1 overflow-y-auto w-full relative scroll-smooth">
        {/* Mobile Header */}
        <div className="md:hidden p-4 flex items-center justify-between sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-slate-200">
          <span className="font-extrabold text-slate-900 tracking-tight text-lg">Market365</span>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>

        <div className="p-4 md:p-8 lg:p-10 min-h-full">
          {renderContent()}
        </div>
      </main>

      {/* Notification Toast Container */}
      <div className="fixed bottom-6 right-6 z-[70] flex flex-col gap-3 pointer-events-none">
        {notifications.map(notif => (
          <div 
            key={notif.id}
            className={`
              pointer-events-auto w-80 bg-white rounded-2xl shadow-2xl border-l-4 p-4 flex items-start gap-3 transform transition-all duration-500 animate-fade-in-up
              ${notif.type === 'success' ? 'border-green-500' : 
                notif.type === 'warning' ? 'border-amber-500' : 
                notif.type === 'error' ? 'border-red-500' : 'border-blue-500'}
            `}
          >
            <div className={`
              mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white
              ${notif.type === 'success' ? 'bg-green-500' : 
                notif.type === 'warning' ? 'bg-amber-500' : 
                notif.type === 'error' ? 'bg-red-500' : 'bg-blue-500'}
            `}>
              <i className={`fa-solid ${
                notif.type === 'success' ? 'fa-check' : 
                notif.type === 'warning' ? 'fa-triangle-exclamation' : 
                notif.type === 'error' ? 'fa-xmark' : 'fa-info'
              }`}></i>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-800">{notif.title}</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-snug">{notif.message}</p>
              <p className="text-[10px] text-slate-300 mt-1">{notif.timestamp.toLocaleTimeString()}</p>
            </div>
            <button 
              onClick={() => removeNotification(notif.id)}
              className="text-slate-400 hover:text-slate-600"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        ))}
      </div>

      <VoiceControl onNavigate={setActiveTool} />
      
      {/* Global Modals */}
      <ShortcutsModal isOpen={isShortcutsOpen} onClose={() => setIsShortcutsOpen(false)} />
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </div>
  );
};

export default App;
