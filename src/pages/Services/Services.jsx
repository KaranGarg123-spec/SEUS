import React from 'react'

const Services = () => {
  return (
    <>
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden">
      
      &nbsp
      &nbsp

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold tracking-wider text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] inline-block mr-2 shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
            THE FUTURE OF EV CARE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight uppercase text-white">
            Power Up <br/> With <br/>
            <span className="text-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">Intelligence</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            Navigate the electric revolution with SEUS. Real-time diagnostics, smart trip planning, and instant parts availability—all powered by KIVI AI.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              WATCH DEMO
            </button>
            <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#00F0FF] hover:bg-cyan-400 text-black font-bold transition shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              GET STARTED
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800">
            <div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-gray-500 mt-1">Charging Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs text-gray-500 mt-1">Service Centers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-500 mt-1">Kivi Support</div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative h-[500px] w-full bg-zinc-900 rounded-[3rem] border border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            
            {/* Floating Card 1 */}
            <div className="absolute top-12 left-8 bg-black border border-zinc-800 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                </div>
                <div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold">Optimized Range</div>
                    <div className="font-bold text-sm text-white">420 KM</div>
                </div>
            </div>

            {/* Placeholder for 3D Character */}
            <div className="w-64 h-80 bg-cyan-900/20 rounded-full blur-3xl absolute opacity-40"></div>
            <div className="relative z-10 w-48 h-64 bg-gradient-to-b from-zinc-800 to-black rounded-full shadow-inner flex flex-col items-center justify-center border-4 border-zinc-700/50">
                <div className="w-32 h-32 bg-zinc-800 rounded-full mb-4 relative overflow-hidden shadow-inner">
                    <div className="absolute top-10 left-6 w-3 h-3 bg-black rounded-full"></div>
                    <div className="absolute top-10 right-6 w-3 h-3 bg-black rounded-full"></div>
                    <div className="absolute top-16 left-10 w-12 h-6 bg-cyan-900/50 rounded-full opacity-50"></div>
                </div>
                <div className="w-24 h-12 bg-zinc-800 rounded-full shadow-sm"></div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-16 right-8 bg-black border border-zinc-800 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style={{animationDuration: '4s'}}>
                <div className="w-10 h-10 bg-cyan-900/30 rounded-lg flex items-center justify-center text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                </div>
                <div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold">Energy Saved</div>
                    <div className="font-bold text-sm text-white">12.4 kWh</div>
                </div>
            </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
              The SEUS <span className="text-[#00F0FF]">Ecosystem</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A seamlessly integrated suite of services designed to keep your EV running at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Trip Planner */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500/30 transition group">
              <div className="w-12 h-12 bg-cyan-900/20 text-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Smart Trip Planner</h3>
              <p className="text-gray-400 text-sm mb-6">AI-driven route optimization based on your battery health, terrain, and weather conditions.</p>
              
              <div className="bg-black border border-zinc-800 rounded-xl p-4 text-white text-xs">
                <div className="flex justify-between mb-2">
                    <span>Route A</span>
                    <span className="text-green-400">Efficient</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full mb-2">
                    <div className="w-3/4 bg-green-500 h-1.5 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="flex justify-between text-gray-500 text-[10px]">
                    <span>2h 45m</span>
                    <span>18% Battery Left</span>
                </div>
              </div>
            </div>

            {/* Card 2: Energy Prediction (Featured) */}
            <div className="bg-gradient-to-b from-zinc-800 to-black rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl border border-zinc-700 transform md:-translate-y-4">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <div className="w-12 h-12 bg-[#00F0FF] text-black rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Energy Prediction</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">KIVI analyzes your driving habits to predict energy consumption with 98% accuracy.</p>
              
              <ul className="space-y-3 relative z-10 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-900/50 flex items-center justify-center text-[#00F0FF] text-[10px]">✓</div>
                    Real-time consumption analysis
                </li>
                <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-900/50 flex items-center justify-center text-[#00F0FF] text-[10px]">✓</div>
                    Charging station slot booking
                </li>
                 <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-900/50 flex items-center justify-center text-[#00F0FF] text-[10px]">✓</div>
                    Grid load balancing
                </li>
              </ul>
            </div>

            {/* Card 3: Parts */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500/30 transition group">
              <div className="w-12 h-12 bg-cyan-900/20 text-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Parts Availability</h3>
              <p className="text-gray-400 text-sm mb-6">Instant inventory check across all SEUS service centers. Book repairs in one tap.</p>
              
              <div className="flex gap-2">
                  <div className="flex-1 bg-zinc-800 rounded-lg p-3 text-center">
                      <div className="text-[10px] text-gray-500 mb-1">Brake Pads</div>
                      <div className="text-xs font-bold text-green-400">In Stock</div>
                  </div>
                  <div className="flex-1 bg-zinc-800 rounded-lg p-3 text-center">
                      <div className="text-[10px] text-gray-500 mb-1">Coolant</div>
                      <div className="text-xs font-bold text-orange-500">Low Stock</div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* App Showcase / Kivi Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
              
              {/* Phone Mockup */}
              <div className="flex-1 flex justify-center">
                  <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                      
                      {/* Screen Content */}
                      <div className="w-full h-full bg-[#0f172a] text-white p-6 pt-12 flex flex-col relative">
                          {/* Status Bar Fake */}
                          <div className="flex justify-between text-[10px] text-gray-400 mb-6">
                              <span>9:41</span>
                              <span>📶 🔋</span>
                          </div>

                          <div className="flex justify-between items-start mb-8">
                              <div>
                                  <div className="text-xs text-gray-400 uppercase tracking-widest">Welcome Back</div>
                                  <div className="text-xl font-bold">ALEXANDER</div>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-[#00F0FF] text-black flex items-center justify-center font-bold text-xs">A</div>
                          </div>

                          {/* Alert Card */}
                          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-4 rounded-xl flex gap-3 mb-6">
                              <div className="w-8 h-8 rounded-full bg-cyan-900/50 text-[#00F0FF] flex items-center justify-center flex-shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                              </div>
                              <div className="text-[10px] text-gray-300 leading-tight">
                                  "Your battery efficiency dropped by 2% due to cold weather. I've adjusted the pre-conditioning schedule."
                              </div>
                          </div>

                          {/* Grid Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-auto">
                              <div className="bg-slate-800 p-4 rounded-2xl">
                                  <div className="text-[#00F0FF] mb-2">⚡</div>
                                  <div className="text-2xl font-bold">78%</div>
                                  <div className="text-[10px] text-gray-400">Charge Level</div>
                              </div>
                              <div className="bg-slate-800 p-4 rounded-2xl">
                                  <div className="text-[#00F0FF] mb-2">🚗</div>
                                  <div className="text-2xl font-bold">240</div>
                                  <div className="text-[10px] text-gray-400">Range (km)</div>
                              </div>
                          </div>

                          {/* Bottom Action */}
                          <button className="w-full bg-[#00F0FF] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 mb-8 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                              FIND CHARGER
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                          </button>
                          
                          {/* Bottom Nav Fake */}
                          <div className="flex justify-between px-4 text-gray-500">
                              <span className="text-[#00F0FF]">🏠</span>
                              <span>🗺️</span>
                              <div className="w-10 h-10 -mt-6 bg-[#00F0FF] rounded-full flex items-center justify-center text-black text-xl">+</div>
                              <span>📊</span>
                              <span>⚙️</span>
                          </div>

                      </div>
                  </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-8">
                  <h2 className="text-4xl font-bold uppercase leading-tight text-white">
                      Meet <span className="text-[#00F0FF]">Kivi</span> <br/>
                      Your Co-Pilot
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                      KIVI isn't just a chatbot; it's the core of the SEUS ecosystem. It monitors your vehicle's health in real-time, predicts maintenance needs before they happen, and finds the most efficient route for every journey.
                  </p>

                  <div className="space-y-6 pt-4">
                      <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-900/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                          </div>
                          <div>
                              <h4 className="font-bold text-lg text-white">Proactive AI</h4>
                              <p className="text-sm text-gray-500">Analyzes millions of data points to optimize battery life.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-cyan-900/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                          </div>
                          <div>
                              <h4 className="font-bold text-lg text-white">Secure & Private</h4>
                              <p className="text-sm text-gray-500">Your driving data is encrypted and used solely for your benefit.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-full bg-purple-900/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                          </div>
                          <div>
                              <h4 className="font-bold text-lg text-white">Connected Network</h4>
                              <p className="text-sm text-gray-500">Seamlessly connects your car to service centers and charging grids.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      
    </div>
  
    </>
  )
}

export default Services