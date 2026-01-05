
import React from 'react';
import { ToolId } from '../types';
import { TOOL_CATEGORIES } from '../data/toolsData';

interface DashboardProps {
  onNavigate: (tool: ToolId) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-16 pb-12">
        {/* Hero Section */}
        <div className="text-center py-10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-widest mb-6 hover:scale-105 transition-transform">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> Live Status: Online
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Digital Workspace</span>
        </h1>
        <p className="text-slate-500 text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            Your all-in-one hub for freelance, e-commerce, and creative tools. 
            Powered by advanced AI to automate your workflow.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            <button 
            onClick={() => onNavigate(ToolId.TOOL_EXPLORER)}
            className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-900/20 hover:scale-105 transition-transform flex items-center gap-3"
            >
            <i className="fa-solid fa-rocket"></i> Explore 100+ Tools
            </button>
            <button 
            onClick={() => onNavigate(ToolId.CONTACT)}
            className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-3"
            >
            <i className="fa-regular fa-envelope"></i> Contact Us
            </button>
        </div>
        </div>
        
        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <div 
            onClick={() => onNavigate(ToolId.TOOL_EXPLORER)}
            className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-[2.5rem] shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all cursor-pointer group text-white col-span-1 md:col-span-2 lg:col-span-3 relative overflow-hidden min-h-[300px] flex flex-col justify-center"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/15 transition-colors"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
                <div className="inline-block p-3 bg-white/10 rounded-2xl mb-4 backdrop-blur-md border border-white/10">
                    <i className="fa-solid fa-compass text-3xl"></i>
                </div>
                <h3 className="text-4xl font-bold mb-4">Tool Explorer Hub</h3>
                <p className="text-indigo-100 text-lg opacity-90 max-w-xl leading-relaxed">
                    Access our massive library of 100 specialized AI workflows. From Marketing and Coding to E-commerce and Legal templates.
                </p>
            </div>
            <div className="flex flex-col gap-3 min-w-[200px]">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-400"></i> Freelance Tools
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-400"></i> E-commerce
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-green-400"></i> Education
                </div>
            </div>
            </div>
        </div>

        {/* Mr. Freetools Card (NEW) */}
        <div 
            onClick={() => onNavigate(ToolId.MR_FREETOOLS)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-cyan-500"
        >
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mr. Freetools</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Quick Utilities & Helpers.
                </p>
                </div>
            </div>
        </div>

        {/* Market Pulse Card */}
        <div 
            onClick={() => onNavigate(ToolId.TRENDING_HUB)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-emerald-500"
        >
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
                <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Market Pulse</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Stocks, Trends & Analysis.
                </p>
                </div>
            </div>
        </div>

        {/* AI Agent Hub Card */}
        <div 
            onClick={() => onNavigate(ToolId.AI_AGENT_HUB)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-blue-600"
        >
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-users-gear"></i>
                </div>
                <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI Agent Workforce</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Hire specialized AI pros.
                </p>
                </div>
            </div>
        </div>

        {/* Freelance Hub Card */}
        <div 
            onClick={() => onNavigate(ToolId.FREELANCE_HUB)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-green-500"
        >
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-laptop-code"></i>
                </div>
                <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Freelance Hub</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Proposals, Bios & Gig Tools.
                </p>
                </div>
            </div>
        </div>

        {/* VFX Studio Card */}
        <div 
            onClick={() => onNavigate(ToolId.VFX_HUB)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-orange-500"
        >
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">VFX Studio</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Assets, Breakdowns & Software.
                </p>
                </div>
            </div>
        </div>

        {/* Office Hub Card */}
        <div 
            onClick={() => onNavigate(ToolId.OFFICE_HUB)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-purple-500"
        >
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-briefcase"></i>
                </div>
                <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI Office Suite</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Docs, Sheets, Slides & Mail.
                </p>
                </div>
            </div>
        </div>

        {/* Feature Cards Row */}
        <div 
            onClick={() => onNavigate(ToolId.COPYWRITER)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-indigo-500"
        >
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-pen-nib"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Copywriter</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Generate high-converting marketing copy and blog posts instantly.</p>
        </div>

        <div 
            onClick={() => onNavigate(ToolId.IMAGE_GEN)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-pink-500"
        >
            <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-image"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Image Studio</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Turn your ideas into stunning visuals with our advanced AI art generator.</p>
        </div>

        <div 
            onClick={() => onNavigate(ToolId.VIDEO_GEN)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-red-500"
        >
            <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-video"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Video Studio</h3>
            <p className="text-slate-500 font-medium leading-relaxed">Create cinematic videos from simple text prompts using Veo.</p>
        </div>

        {/* AIxploria Card */}
        <div 
            onClick={() => onNavigate(ToolId.AIXPLORIA)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-cyan-500"
        >
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-atom"></i>
                </div>
                <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">AIxploria</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Explore the entire universe of external AI tools.
                </p>
                </div>
            </div>
        </div>

        {/* Digital Creator Hub Card */}
        <div 
            onClick={() => onNavigate(ToolId.WEBSITE_HUB)}
            className="glass-panel p-8 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden border-t-4 border-t-indigo-600"
        >
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-layer-group"></i>
                </div>
                <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Creator Hub</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                    Everything you need: Domains, E-commerce, Design, & Hosting.
                </p>
                </div>
            </div>
        </div>
        </div>

        {/* Quick Categories */}
        <div className="px-4">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Browse by Interest</h3>
        <div className="flex flex-wrap justify-center gap-3">
            {TOOL_CATEGORIES.map((cat, idx) => (
            <button 
                key={idx}
                onClick={() => onNavigate(ToolId.TOOL_EXPLORER)}
                className="px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-600 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-0.5"
            >
                {cat}
            </button>
            ))}
        </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-10 pb-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <i className="fa-solid fa-bolt text-xs"></i>
            </div>
            <span className="font-bold text-slate-800">OnlineMarket365</span>
            </div>
            
            <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <button onClick={() => onNavigate(ToolId.DASHBOARD)} className="hover:text-indigo-600 transition-colors">Home</button>
            <button onClick={() => onNavigate(ToolId.TOOL_EXPLORER)} className="hover:text-indigo-600 transition-colors">Tools</button>
            <button onClick={() => onNavigate(ToolId.CONTACT)} className="hover:text-indigo-600 transition-colors">Contact</button>
            <button className="hover:text-indigo-600 transition-colors">Privacy</button>
            </div>

            <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
            </a>
            </div>
        </div>
        <div className="text-center mt-8 text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} OnlineMarket365.com. All rights reserved.
        </div>
        </footer>
    </div>
  );
};

export default Dashboard;
