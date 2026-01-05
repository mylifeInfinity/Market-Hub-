
import React, { useState, useEffect } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIPS = [
  {
    title: 'Keyboard Shortcuts (Speed Hack)',
    icon: 'fa-keyboard',
    color: 'text-indigo-600 bg-indigo-50',
    detail: 'Har professional app ke shortcuts hote hain. Press Ctrl + / to see the list. Shortcuts se aapka kaam 3 guna fast ho jata hai.'
  },
  {
    title: 'Cache Management (Performance)',
    icon: 'fa-broom',
    color: 'text-orange-600 bg-orange-50',
    detail: 'Jab app hang hone lage ya slow chale, Settings mein "Clear Cache" karein. Faltu memory saaf ho jayegi aur app naye jaisa chalega.',
    action: 'clear_cache'
  },
  {
    title: 'Integration & Automation',
    icon: 'fa-bolt',
    color: 'text-yellow-600 bg-yellow-50',
    detail: 'Zapier ya IFTTT jaise tools ka use karein. Akela app itna powerful nahi hota jitna jab wo doosre se judta hai.'
  },
  {
    title: 'Dark Mode & Eye Comfort',
    icon: 'fa-moon',
    color: 'text-slate-600 bg-slate-100',
    detail: 'Hamesha Dark Mode on rakhein. Isse aankhon par strain kam hoga aur aap zyada der kaam kar payenge.',
    action: 'toggle_theme'
  },
  {
    title: 'Two-Factor Auth (2FA)',
    icon: 'fa-shield-halved',
    color: 'text-green-600 bg-green-50',
    detail: 'Jahan aapka data hai, wahan sirf password kaafi nahi. 2FA on karein taaki account kabhi hack na ho.'
  },
  {
    title: 'Algorithm Control',
    icon: 'fa-sliders',
    color: 'text-pink-600 bg-pink-50',
    detail: 'Feed ko clean rakhein. Faltu posts par "Not Interested" click karein taaki app sirf professional content dikhaye.'
  },
  {
    title: 'Cloud Sync & Offline',
    icon: 'fa-cloud-arrow-up',
    color: 'text-blue-600 bg-blue-50',
    detail: 'Hamesha check karein ki Auto-sync on hai. Zaroori files ko offline mark karein.'
  }
];

const INTEGRATIONS = [
  { name: 'Google Drive', status: 'Connected', ping: '45ms', icon: 'fa-google-drive', color: 'text-green-600' },
  { name: 'Gemini AI API', status: 'Connected', ping: '120ms', icon: 'fa-brain', color: 'text-blue-600' },
  { name: 'CRM Database', status: 'Syncing...', ping: '210ms', icon: 'fa-database', color: 'text-orange-500' },
  { name: 'Payment Gateway', status: 'Secure', ping: '80ms', icon: 'fa-credit-card', color: 'text-indigo-600' },
];

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'tips' | 'general' | 'system'>('system');
  
  // System State
  const [checkingUpdate, setCheckingUpdate] = useState(false);
  const [updateStatus, setUpdateStatus] = useState('Up to date (v2.4.0)');
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [lastScan, setLastScan] = useState('Today, 09:00 AM');
  
  // New: Performance State
  const [lowLatencyMode, setLowLatencyMode] = useState(false);

  useEffect(() => {
    if (lowLatencyMode) {
      document.body.classList.add('low-latency');
    } else {
      document.body.classList.remove('low-latency');
    }
  }, [lowLatencyMode]);

  if (!isOpen) return null;

  const handleClearCache = () => {
    if (window.confirm("This will clear local app data and refresh. Continue?")) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  };

  const toggleTheme = () => {
    document.body.classList.toggle('theme-light');
  };

  const handleCheckUpdate = () => {
    setCheckingUpdate(true);
    setUpdateStatus('Checking for updates...');
    setTimeout(() => {
      setCheckingUpdate(false);
      setUpdateStatus('You are on the latest version.');
    }, 2000);
  };

  const handleScanSecurity = () => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLastScan(`Today, ${now}`);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={onClose}></div>
      <div className="bg-white rounded-[2rem] w-full max-w-4xl h-[85vh] relative z-10 shadow-2xl animate-scale-in overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <div>
             <h2 className="text-2xl font-bold text-slate-900">Settings & System</h2>
             <p className="text-slate-500 text-sm">Optimize workflow, manage updates, and monitor health.</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors">
            <i className="fa-solid fa-xmark text-slate-500"></i>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 px-6 overflow-x-auto">
           <button 
             onClick={() => setActiveTab('system')}
             className={`py-4 px-6 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${activeTab === 'system' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
           >
             <i className="fa-solid fa-server mr-2"></i> System Health
           </button>
           <button 
             onClick={() => setActiveTab('general')}
             className={`py-4 px-6 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${activeTab === 'general' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
           >
             <i className="fa-solid fa-sliders mr-2"></i> Preferences
           </button>
           <button 
             onClick={() => setActiveTab('tips')}
             className={`py-4 px-6 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${activeTab === 'tips' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
           >
             <i className="fa-solid fa-lightbulb mr-2"></i> Pro Tips
           </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 custom-scrollbar">
           
           {activeTab === 'system' && (
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Auto Update Module */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-2">
                   <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-slate-900 flex items-center gap-2">
                         <i className="fa-solid fa-rotate text-blue-600"></i> Auto Update
                      </h3>
                      <div className="flex items-center gap-2">
                         <span className={`text-xs font-bold ${checkingUpdate ? 'text-blue-500 animate-pulse' : 'text-green-600'}`}>
                            {updateStatus}
                         </span>
                         <button 
                           onClick={handleCheckUpdate}
                           disabled={checkingUpdate}
                           className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-colors"
                         >
                            <i className={`fa-solid fa-rotate-right ${checkingUpdate ? 'fa-spin' : ''}`}></i>
                         </button>
                      </div>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div>
                         <p className="text-sm font-bold text-slate-700">Enable Auto-Install</p>
                         <p className="text-xs text-slate-500">Automatically apply security patches and feature updates.</p>
                      </div>
                      <button 
                        onClick={() => setAutoUpdate(!autoUpdate)}
                        className={`w-12 h-6 rounded-full p-1 transition-colors ${autoUpdate ? 'bg-green-500' : 'bg-slate-300'}`}
                      >
                         <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${autoUpdate ? 'translate-x-6' : 'translate-x-0'}`}></div>
                      </button>
                   </div>
                </div>

                {/* Integration Check */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                   <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-plug text-indigo-600"></i> Connectivity
                   </h3>
                   <div className="space-y-3">
                      {INTEGRATIONS.map((integ, idx) => (
                         <div key={idx} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
                            <div className="flex items-center gap-3">
                               <i className={`fa-brands ${integ.icon} ${integ.color}`}></i>
                               <span className="text-sm font-medium text-slate-700">{integ.name}</span>
                            </div>
                            <div className="text-right">
                               <div className="flex items-center gap-1.5 justify-end">
                                  <span className={`w-1.5 h-1.5 rounded-full ${integ.status === 'Connected' ? 'bg-green-500' : 'bg-orange-400 animate-pulse'}`}></span>
                                  <span className="text-xs font-bold text-slate-600">{integ.status}</span>
                               </div>
                               <span className="text-[10px] text-slate-400 font-mono">{integ.ping}</span>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Security & Automation */}
                <div className="space-y-6">
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-4">
                         <h3 className="font-bold text-slate-900 flex items-center gap-2">
                            <i className="fa-solid fa-shield-halved text-green-600"></i> Security Audit
                         </h3>
                         <button onClick={handleScanSecurity} className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition-colors">Scan Now</button>
                      </div>
                      <div className="space-y-2 text-sm">
                         <div className="flex justify-between">
                            <span className="text-slate-600">Permissions</span>
                            <span className="text-green-600 font-bold"><i className="fa-solid fa-check"></i> Optimized</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-slate-600">Access Level</span>
                            <span className="text-slate-800 font-medium">Admin (User)</span>
                         </div>
                         <div className="flex justify-between">
                            <span className="text-slate-600">Last Scan</span>
                            <span className="text-slate-400">{lastScan}</span>
                         </div>
                      </div>
                   </div>

                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                         <i className="fa-solid fa-bolt text-yellow-500"></i> Automation
                      </h3>
                      <div className="flex items-center justify-between">
                         <span className="text-sm text-slate-600">Background Triggers</span>
                         <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Active</span>
                      </div>
                      <button className="mt-4 w-full py-2 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                         <i className="fa-solid fa-play"></i> Test Trigger (Simulation)
                      </button>
                   </div>
                </div>

             </div>
           )}

           {activeTab === 'tips' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TIPS.map((tip, idx) => (
                   <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${tip.color}`}>
                            <i className={`fa-solid ${tip.icon}`}></i>
                         </div>
                         {tip.action && (
                            <button 
                              onClick={() => tip.action === 'clear_cache' ? handleClearCache() : toggleTheme()}
                              className="text-xs font-bold bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg text-slate-600 transition-colors"
                            >
                               {tip.action === 'clear_cache' ? 'Clear Cache' : 'Toggle Theme'}
                            </button>
                         )}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{tip.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                         {tip.detail}
                      </p>
                   </div>
                ))}
             </div>
           )}

           {activeTab === 'general' && (
             <div className="space-y-6 max-w-2xl mx-auto">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                   <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-mobile-screen text-indigo-600"></i> App Preferences
                   </h3>
                   
                   <div className="space-y-4">
                      {/* Performance Mode */}
                      <div className="flex items-center justify-between py-2 border-b border-slate-50">
                         <div>
                            <p className="font-medium text-slate-800">Low Latency Mode (Speed)</p>
                            <p className="text-xs text-slate-400">Reduces animations and blur effects for faster load times.</p>
                         </div>
                         <button 
                           onClick={() => setLowLatencyMode(!lowLatencyMode)}
                           className={`w-12 h-6 rounded-full p-1 transition-colors ${lowLatencyMode ? 'bg-indigo-600' : 'bg-slate-300'}`}
                         >
                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${lowLatencyMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                         </button>
                      </div>

                      <div className="flex items-center justify-between py-2 border-b border-slate-50">
                         <div>
                            <p className="font-medium text-slate-800">Clear Application Cache</p>
                            <p className="text-xs text-slate-400">Fixes lag issues. Does not delete account data.</p>
                         </div>
                         <button onClick={handleClearCache} className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100 transition-colors">
                            Clear Cache
                         </button>
                      </div>

                      <div className="flex items-center justify-between py-2 border-b border-slate-50">
                         <div>
                            <p className="font-medium text-slate-800">Beta Testing</p>
                            <p className="text-xs text-slate-400">Get access to future features before others.</p>
                         </div>
                         <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase">
                            Joined
                         </span>
                      </div>

                      <div className="flex items-center justify-between py-2">
                         <div>
                            <p className="font-medium text-slate-800">Offline Mode</p>
                            <p className="text-xs text-slate-400">Sync status for working without internet.</p>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-slate-500">Active</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                   <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-shield-halved text-indigo-600"></i> Account Privacy
                   </h3>
                   <div className="space-y-2">
                      <div className="flex justify-between text-sm text-slate-600">
                         <span>2FA Status</span>
                         <span className="text-green-600 font-bold">Enabled</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                         <span>App Permissions</span>
                         <span className="text-slate-900 font-bold">Microphone Only</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                         <span>Last Login</span>
                         <span className="text-slate-900 font-bold">Today, 10:42 AM</span>
                      </div>
                   </div>
                </div>
             </div>
           )}

        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
