
import React, { useState, useEffect } from 'react';

const AnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [category, setCategory] = useState('E-commerce');
  
  // Simulated Data Simulation
  const [metrics, setMetrics] = useState({
    revenue: 12450,
    conversion: 3.2,
    visitors: 45200,
    agentsActive: 8
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        revenue: prev.revenue + Math.floor(Math.random() * 50),
        conversion: +(prev.conversion + (Math.random() * 0.1 - 0.05)).toFixed(2),
        visitors: prev.visitors + Math.floor(Math.random() * 10),
        agentsActive: prev.agentsActive
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderBarChart = (heights: number[], color: string) => (
    <div className="flex items-end justify-between h-24 gap-1 mt-4">
      {heights.map((h, i) => (
        <div 
          key={i} 
          className={`w-full rounded-t-sm opacity-80 hover:opacity-100 transition-all duration-500 ${color}`}
          style={{ height: `${h}%` }}
        ></div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-8 pb-12">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
         <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Analytics Command</h2>
            <p className="text-slate-500">Real-time insights across your digital empire.</p>
         </div>
         <div className="flex bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
            {['E-commerce', 'Marketing', 'Freelance'].map(cat => (
               <button
                 key={cat}
                 onClick={() => setCategory(cat)}
                 className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${category === cat ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
               >
                 {cat}
               </button>
            ))}
         </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Total Revenue</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">${metrics.revenue.toLocaleString()}</h3>
               </div>
               <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-lg"><i className="fa-solid fa-sack-dollar"></i></div>
            </div>
            <div className="text-xs font-bold text-green-500 flex items-center gap-1">
               <i className="fa-solid fa-arrow-trend-up"></i> +12.5% <span className="text-slate-300 font-medium">vs last {timeRange}</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
         </div>

         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Conversion Rate</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">{metrics.conversion}%</h3>
               </div>
               <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg"><i className="fa-solid fa-bolt"></i></div>
            </div>
            <div className="text-xs font-bold text-blue-500 flex items-center gap-1">
               <i className="fa-solid fa-arrow-trend-up"></i> +0.8% <span className="text-slate-300 font-medium">vs last {timeRange}</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
         </div>

         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Active Visitors</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">{metrics.visitors.toLocaleString()}</h3>
               </div>
               <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg"><i className="fa-solid fa-users"></i></div>
            </div>
            <div className="text-xs font-bold text-purple-500 flex items-center gap-1">
               <i className="fa-solid fa-eye"></i> Live <span className="text-slate-300 font-medium">now</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
         </div>

         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">AI Agent ROI</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-1">45x</h3>
               </div>
               <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg"><i className="fa-solid fa-robot"></i></div>
            </div>
            <div className="text-xs font-bold text-orange-500 flex items-center gap-1">
               <i className="fa-solid fa-check"></i> {metrics.agentsActive} Agents Active
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
         </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-lg text-slate-800">Performance Over Time</h3>
               <select className="bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold px-3 py-1 text-slate-600 outline-none">
                  <option>Revenue</option>
                  <option>Traffic</option>
               </select>
            </div>
            {/* Simulated Chart */}
            <div className="h-64 flex items-end gap-2">
               {Array.from({length: 20}).map((_, i) => {
                  const h = Math.floor(Math.random() * 70) + 30;
                  return (
                     <div key={i} className="flex-1 bg-indigo-500 rounded-t-md hover:bg-indigo-600 transition-all relative group" style={{height: `${h}%`}}>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                           ${(h * 100).toLocaleString()}
                        </div>
                     </div>
                  )
               })}
            </div>
            <div className="flex justify-between mt-4 text-xs font-bold text-slate-400 uppercase">
               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
         </div>

         <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2rem] p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
               <h3 className="font-bold text-lg mb-2">Project Profitability</h3>
               <p className="text-slate-400 text-sm mb-6">Top performing campaigns.</p>
               
               <div className="space-y-4">
                  <div>
                     <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Summer Sale</span>
                        <span className="text-green-400">92%</span>
                     </div>
                     <div className="w-full bg-white/10 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div></div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs font-bold mb-1">
                        <span>New Product Launch</span>
                        <span className="text-blue-400">78%</span>
                     </div>
                     <div className="w-full bg-white/10 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div></div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs font-bold mb-1">
                        <span>Retargeting Ads</span>
                        <span className="text-purple-400">64%</span>
                     </div>
                     <div className="w-full bg-white/10 rounded-full h-2"><div className="bg-purple-500 h-2 rounded-full" style={{width: '64%'}}></div></div>
                  </div>
               </div>
            </div>
            
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all mt-6">
               View Full Report
            </button>
         </div>
      </div>

    </div>
  );
};

export default AnalyticsDashboard;
