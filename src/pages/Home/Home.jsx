import React from 'react'

const Home = () => {
  return (
    <>
    
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background-light dark:bg-background-dark">
<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
<div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]" style={{
    backgroundImage:
      "linear-gradient(#00E0FF 1px, transparent 1px), linear-gradient(90deg, #00E0FF 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  }}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-white/5 border border-primary/30 rounded-full px-4 py-1.5 backdrop-blur-sm animate-pulse">
<span className="w-2 h-2 rounded-full bg-primary shadow-neon"></span>
<span className="text-sm font-semibold tracking-wider uppercase text-slate-700 dark:text-gray-300">The Future of EV Assistance</span>
</div>
<h1 className="text-5xl md:text-7xl font-display font-black leading-tight text-slate-900 dark:text-white">
                    POWER UP WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 text-glow">SEUS</span>
</h1>
<p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 font-light max-w-2xl mx-auto lg:mx-0">
                    Your intelligent companion for the electric revolution. Smart diagnostics, instant support, and reliable charging solutions.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-primary border-2 border-transparent rounded-lg hover:bg-transparent hover:text-primary hover:border-primary hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-display uppercase tracking-wider" href="#services">
                        Explore Services
                        <span className="material-icons-round ml-2">bolt</span>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 dark:text-white transition-all duration-200 bg-transparent border-2 border-slate-300 dark:border-gray-700 rounded-lg hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-display uppercase tracking-wider group" href="#support">
                        Get Support
                        <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
<div className="pt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500 dark:text-gray-400 font-mono">
<div className="flex items-center">
<span className="material-icons-round text-primary mr-2 text-lg">verified</span>
                        Verified Techs
                    </div>
<div className="flex items-center">
<span className="material-icons-round text-primary mr-2 text-lg">speed</span>
                        &lt; 15min Response
                    </div>
</div>
</div>
<div className="relative flex justify-center lg:justify-end">
<div className="relative w-full max-w-lg aspect-square">
<div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
<div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
<img alt="KIVI - Your AI EV Companion Robot" className="w-full h-auto drop-shadow-2xl object-contain mask-image-gradient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo5rB9e7TtFjg8uC76CQO6N8ly9FOKl3Zqd6eCMide6zuMNTqwXDXQxYCAJWC5dNBsSwcg60LNcrchneGLxbDPIke1BSyiSFwsx5XD4OtukGtxD3Ma1VwMq5oi-Ab6Z8ZD678zImaVnLNtiLhgAu-pYSyc-c1hT9Ii076i51jkmuqtJUTKxckhGil-TAfAA0CG_OIRU0cS009AHviti1VFQvSPcy8BavLXOKFl06F3k1L13JJY76Wiil9HzeZW7NmgBkdy2u0E3no"/>
<div className="absolute -left-4 top-1/4 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md p-3 rounded-xl border border-primary/30 shadow-lg animate-bounce" style={{animationDuration: "3s"}}>
<div className="flex items-center gap-3">
<div className="bg-green-500/20 p-2 rounded-lg">
<span className="material-icons-round text-green-500">battery_charging_full</span>
</div>
<div>
<p className="text-xs text-slate-500 dark:text-gray-400">Battery Health</p>
<p className="font-display font-bold text-slate-900 dark:text-white">Optimal 98%</p>
</div>
</div>
</div>
<div className="absolute -right-4 bottom-1/4 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md p-3 rounded-xl border border-primary/30 shadow-lg animate-bounce" style={{animationDuration: "4s"}}>
<div className="flex items-center gap-3">
<div className="bg-primary/20 p-2 rounded-lg">
<span className="material-icons-round text-primary">support_agent</span>
</div>
<div>
<p className="text-xs text-slate-500 dark:text-gray-400">Status</p>
<p className="font-display font-bold text-slate-900 dark:text-white">Online</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 bg-white dark:bg-[#0F1218]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900 dark:text-white">INTELLIGENCE MEETS <span className="text-primary">ENERGY</span></h2>
<div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
<p className="text-lg text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
                    At SEUS, we are redefining EV ownership. Powered by our AI companion <strong className="text-primary">KIVI</strong>, we bridge the gap between complex electric vehicle technology and seamless user experience. We don't just fix cars; we optimize your journey.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="services">
<div className="group relative bg-slate-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
<span className="material-icons-round text-3xl text-red-500">sos</span>
</div>
<h3 className="text-xl font-display font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Emergency Support</h3>
<p className="text-slate-600 dark:text-gray-400 mb-6">Stuck on the road? KIVI dispatches immediate assistance tailored to your EV's specific needs, 24/7.</p>
<a className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="#">
                            Learn more <span className="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
<div className="group relative bg-slate-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
<span className="material-icons-round text-3xl text-primary">engineering</span>
</div>
<h3 className="text-xl font-display font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Verified Technicians</h3>
<p className="text-slate-600 dark:text-gray-400 mb-6">Access a network of certified EV specialists. Our vetting process ensures your high-tech vehicle is in expert hands.</p>
<a className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="#">
                            Find an Expert <span className="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
<div className="group relative bg-slate-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
<span className="material-icons-round text-3xl text-green-500">ev_station</span>
</div>
<h3 className="text-xl font-display font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Smart Charging</h3>
<p className="text-slate-600 dark:text-gray-400 mb-6">Optimize your charging schedule for cost and battery health. Locate fast chargers instantly through our app.</p>
<a className="inline-flex items-center text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="#">
                            Start Charging <span className="material-icons-round text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden" id="kivi">
<div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.1]" style={{backgroundImage: "radial-gradient(#00E0FF 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 order-2 md:order-1">
<h2 className="text-sm font-bold tracking-widest text-primary mb-2 uppercase">Your In-App Main Character</h2>
<h3 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-6">MEET 'KIVI'</h3>
<p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
                         KIVI isn't just a mascot; it's the interface to your vehicle's soul. KIVI monitors diagnostics, predicts maintenance needs, and guides you through technical issues with simple, human language.
                     </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<span className="material-icons-round text-primary mr-3 mt-1">check_circle</span>
<span className="text-slate-700 dark:text-gray-300">Real-time battery health monitoring</span>
</li>
<li className="flex items-start">
<span className="material-icons-round text-primary mr-3 mt-1">check_circle</span>
<span className="text-slate-700 dark:text-gray-300">Predictive maintenance alerts</span>
</li>
<li className="flex items-start">
<span className="material-icons-round text-primary mr-3 mt-1">check_circle</span>
<span className="text-slate-700 dark:text-gray-300">Gamified eco-driving rewards</span>
</li>
</ul>
<button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary hover:text-black transition-colors font-bold py-3 px-8 rounded-lg shadow-lg">
                         Download the App
                     </button>
</div>
<div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
<div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-primary/20 to-transparent rounded-full flex items-center justify-center p-8 border border-primary/30 shadow-[0_0_50px_rgba(0,224,255,0.2)]">
<img alt="KIVI Avatar" className="w-full h-full object-contain drop-shadow-lg transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo5rB9e7TtFjg8uC76CQO6N8ly9FOKl3Zqd6eCMide6zuMNTqwXDXQxYCAJWC5dNBsSwcg60LNcrchneGLxbDPIke1BSyiSFwsx5XD4OtukGtxD3Ma1VwMq5oi-Ab6Z8ZD678zImaVnLNtiLhgAu-pYSyc-c1hT9Ii076i51jkmuqtJUTKxckhGil-TAfAA0CG_OIRU0cS009AHviti1VFQvSPcy8BavLXOKFl06F3k1L13JJY76Wiil9HzeZW7NmgBkdy2u0E3no"/>
</div>
</div>
</div>
</div>
</section>
    </>
  )
}

export default Home