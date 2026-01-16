import React from 'react'

const TechnicianPanel = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-cyan-500/30">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/50 text-cyan-400 text-xs font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></span>
            ECOSYSTEM LIVE
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight tracking-tight">
            Empower Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              Tech Squad
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Manage your elite force of EV specialists. Deploy missions, track skillsets, and optimize performance with AI-driven insights from KIVI.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00F0FF] hover:bg-cyan-400 text-black font-bold transition shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              Deploy Technician
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-white font-medium transition backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
              View Analytics
            </button>
          </div>
        </div>

        {/* Right Content - Kivi Card */}
        <div className="relative flex justify-end">
          {/* Main Card */}
          <div className="w-full max-w-md h-[400px] bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative shadow-2xl group">
             {/* Abstract Robot Placeholder Background */}
             <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black">
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
                {/* Glowing Center (Robot position) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-60 bg-cyan-500/20 blur-[80px] rounded-full"></div>
             </div>
             
             {/* Robot Silhouette / Representation */}
             <div className="absolute inset-0 flex items-center justify-center">
                 {/* Replace this SVG with your actual 3D Robot Image */}
                 <svg className="w-48 h-64 text-zinc-700 drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 1 0 10 15.5 2.5 2.5 0 0 0 7.5 13m9 0A2.5 2.5 0 1 0 19 15.5 2.5 2.5 0 0 0 16.5 13"/></svg>
             </div>

             {/* Overlay Text */}
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-3xl font-bold text-white mb-1">KIVI</h3>
                <p className="text-cyan-400 text-sm font-mono">System Architect // AI Assistant</p>
             </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute top-1/2 -left-4 md:-left-12 bg-black border border-zinc-800 p-5 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.6)] animate-bounce" style={{animationDuration: '4s'}}>
             <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                 </div>
                 <span className="text-xs text-gray-400 font-semibold uppercase">Efficiency Rate</span>
             </div>
             <div className="text-3xl font-bold tracking-tight">98.4%</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        {/* Card 1 */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-cyan-500/30 transition group">
           <div className="flex justify-between items-start mb-4">
              <div>
                 <div className="text-sm text-gray-500 font-medium mb-1">Active Technicians</div>
                 <div className="text-3xl font-bold text-white">1,248</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-cyan-900/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
           </div>
           <div className="text-xs text-green-400 flex items-center gap-1">
              <span className="text-lg">↑</span> 12% this week
           </div>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-purple-500/30 transition group">
           <div className="flex justify-between items-start mb-4">
              <div>
                 <div className="text-sm text-gray-500 font-medium mb-1">Certifications Issued</div>
                 <div className="text-3xl font-bold text-white">856</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-900/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-400 group-hover:text-black transition">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
           </div>
           <div className="text-xs text-cyan-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Level 3 Mastery
           </div>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-orange-500/30 transition group">
           <div className="flex justify-between items-start mb-4">
              <div>
                 <div className="text-sm text-gray-500 font-medium mb-1">Total Payouts</div>
                 <div className="text-3xl font-bold text-white">$4.2M</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-orange-900/20 text-orange-400 flex items-center justify-center group-hover:bg-orange-400 group-hover:text-black transition">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              </div>
           </div>
           <div className="text-xs text-orange-400 flex items-center gap-1">
              <span>⚡</span> Processed via SEUS
           </div>
        </div>

        {/* Card 4 */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-green-500/30 transition group">
           <div className="flex justify-between items-start mb-4">
              <div>
                 <div className="text-sm text-gray-500 font-medium mb-1">Avg. Repair Time</div>
                 <div className="text-3xl font-bold text-white">42m</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-900/20 text-green-400 flex items-center justify-center group-hover:bg-green-400 group-hover:text-black transition">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
           </div>
           <div className="text-xs text-green-400 flex items-center gap-1">
              <span className="text-lg">↘</span> -8% vs benchmark
           </div>
        </div>
      </div>

      {/* Main Grid: Skills Matrix & Elite Squad */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        
        {/* Left Column: Skill Matrix */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center px-2">
             <h2 className="text-xl font-bold text-white">Technician Skill Matrix</h2>
             <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300">View Full Report</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Skill 1 */}
             <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-900/20 text-red-500 rounded-lg"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></div>
                      <div>
                         <div className="font-bold text-sm">High Voltage Systems</div>
                         <div className="text-[10px] text-gray-500">Battery & Inverter</div>
                      </div>
                   </div>
                   <span className="text-xl font-bold text-white">85%</span>
                </div>
                <div className="w-full bg-black h-1.5 rounded-full overflow-hidden">
                   <div className="h-full bg-red-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                </div>
             </div>

             {/* Skill 2 */}
             <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-900/20 text-blue-500 rounded-lg"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                      <div>
                         <div className="font-bold text-sm">Motor Diagnostics</div>
                         <div className="text-[10px] text-gray-500">Propulsion Units</div>
                      </div>
                   </div>
                   <span className="text-xl font-bold text-white">92%</span>
                </div>
                <div className="w-full bg-black h-1.5 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 w-[92%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
             </div>

             {/* Skill 3 */}
             <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyan-900/20 text-cyan-500 rounded-lg"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
                      <div>
                         <div className="font-bold text-sm">Software & Firmware</div>
                         <div className="text-[10px] text-gray-500">OTA Updates</div>
                      </div>
                   </div>
                   <span className="text-xl font-bold text-white">78%</span>
                </div>
                <div className="w-full bg-black h-1.5 rounded-full overflow-hidden">
                   <div className="h-full bg-cyan-400 w-[78%] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                </div>
             </div>

             {/* Skill 4 */}
             <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-900/20 text-green-500 rounded-lg"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                      <div>
                         <div className="font-bold text-sm">Safety Protocols</div>
                         <div className="text-[10px] text-gray-500">ISO 26262</div>
                      </div>
                   </div>
                   <span className="text-xl font-bold text-white">99%</span>
                </div>
                <div className="w-full bg-black h-1.5 rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-[99%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Elite Squad */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-500 text-lg">🏆</span>
                <h3 className="text-lg font-bold">Elite Squad</h3>
            </div>
            
            <div className="space-y-6 flex-1">
                {/* User 1 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-900 border border-teal-700 flex items-center justify-center text-teal-400 font-bold text-xs">
                            AC
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Alex Chen</div>
                            <div className="text-[10px] text-yellow-500">★ 4.98 Rating</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-bold text-cyan-400">142</div>
                        <div className="text-[10px] text-gray-500 uppercase">Missions</div>
                    </div>
                </div>

                {/* User 2 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-gray-400 font-bold text-xs">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Sarah Connor</div>
                            <div className="text-[10px] text-yellow-500">★ 4.92 Rating</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-bold text-white">128</div>
                        <div className="text-[10px] text-gray-500 uppercase">Missions</div>
                    </div>
                </div>

                {/* User 3 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-gray-400 font-bold text-xs">
                             <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="12" cy="10" r="3"></circle><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path></svg>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Mike Ross</div>
                            <div className="text-[10px] text-yellow-500">★ 4.85 Rating</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-bold text-white">115</div>
                        <div className="text-[10px] text-gray-500 uppercase">Missions</div>
                    </div>
                </div>
            </div>

            <button className="w-full mt-6 py-3 border border-dashed border-zinc-700 rounded-xl text-xs text-gray-400 hover:text-white hover:border-zinc-500 transition">
                View Leaderboard →
            </button>
        </div>
      </div>

      {/* Bottom Section: Pipeline & Funds */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
         
         {/* Pipeline Table */}
         <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-6 px-2">Onboarding Pipeline</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
                
                {/* Header */}
                <div className="grid grid-cols-4 p-4 border-b border-zinc-800 text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                    <div className="col-span-1">Technician</div>
                    <div className="col-span-1">Stage</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1 text-right">Action</div>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-4 p-4 border-b border-zinc-800 items-center hover:bg-zinc-800/50 transition">
                    <div className="col-span-1 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold">JD</div>
                        <div>
                            <div className="text-sm font-bold">John Doe</div>
                            <div className="text-[10px] text-gray-500">ID: #T-9021</div>
                        </div>
                    </div>
                    <div className="col-span-1 text-sm text-gray-400">Background Check</div>
                    <div className="col-span-1">
                        <span className="px-2 py-1 rounded bg-yellow-900/30 text-yellow-500 text-[10px] font-bold border border-yellow-800">Pending</span>
                    </div>
                    <div className="col-span-1 text-right">
                         <button className="text-cyan-400 text-xs font-bold hover:underline">Review</button>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-4 p-4 items-center hover:bg-zinc-800/50 transition">
                    <div className="col-span-1 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold">AS</div>
                        <div>
                            <div className="text-sm font-bold">Anna Smith</div>
                            <div className="text-[10px] text-gray-500">ID: #T-9022</div>
                        </div>
                    </div>
                    <div className="col-span-1 text-sm text-gray-400">Technical Assessment</div>
                    <div className="col-span-1">
                        <span className="px-2 py-1 rounded bg-green-900/30 text-green-500 text-[10px] font-bold border border-green-800">Passed</span>
                    </div>
                    <div className="col-span-1 text-right">
                         <button className="text-cyan-400 text-xs font-bold hover:underline">Approve</button>
                    </div>
                </div>
            </div>
         </div>

         {/* Funds Card */}
         <div className="bg-[#050b14] border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
             {/* Background glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-900/20 blur-3xl rounded-full"></div>

             <div>
                 <div className="text-sm text-gray-400 mb-1">Total Distributed</div>
                 <div className="text-3xl font-mono font-bold text-white tracking-tight">$842,300.00</div>
             </div>

             <div className="mt-8 mb-8">
                <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                    <span>Next Payout Cycle</span>
                    <span className="text-cyan-400">14h 22m</span>
                </div>
                
                {/* Dark Progress Bar */}
                <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                    <div className="flex justify-between text-[10px] mb-2 text-gray-400">
                        <span>Processing</span>
                        <span className="text-green-500">85%</span>
                    </div>
                    <div className="w-full bg-black h-1.5 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[85%] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    </div>
                </div>
             </div>

             <button className="w-full py-3 bg-[#00F0FF] hover:bg-cyan-400 text-black font-bold rounded-xl transition shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                 Manage Funds
             </button>
         </div>

      </div>
    </div>
  )
}

export default TechnicianPanel