import React from 'react'

const ContactUs = () => {

  //This function carries the data posted from the React form to the google sheets.
  
  const handleSubmit = (e) => {
  e.preventDefault();

  const url =
    "https://script.google.com/macros/s/AKfycbySAZYP1QgYRIoDh2-HVtrv9U723OIZXmKh1I6lMUXGf4WffTvxCnyCx0Jx7jfkJd7L/exec";

  const formData = new URLSearchParams({
    FullName: e.target.FullName.value,
    PhoneNumber: e.target.PhoneNumber.value,
    EmailAddress: e.target.EmailAddress.value,
    Vehicle: e.target.Vehicle.value,
    Issue: e.target.Issue.value,
    Expectations: e.target.Expectations.value,
  });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  })
    .then((res) => res.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => console.log(error));
};



  return (
    <>
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Visual & CTA */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
          
          {/* Robot Visual Placeholder */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full"></div>
            
            {/* 3D Robot Image Placeholder */}
            {/* In a real app, replace the SVG below with your 3D Robot Image (<img src="..." />) */}
            <div className="relative z-10 w-64 h-64 bg-gradient-to-b from-zinc-800 to-black border border-zinc-700 rounded-3xl flex items-center justify-center shadow-2xl group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 rounded-3xl"></div>
               <svg className="w-32 h-32 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)] animate-pulse" style={{animationDuration: '3s'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 1 0 10 15.5 2.5 2.5 0 0 0 7.5 13m9 0A2.5 2.5 0 1 0 19 15.5 2.5 2.5 0 0 0 16.5 13"/>
               </svg>
               {/* Phone in hand representation */}
               <div className="absolute bottom-6 right-8 w-8 h-12 bg-zinc-900 border border-zinc-600 rounded-md rotate-12 flex items-center justify-center">
                   <div className="w-6 h-10 bg-black rounded-sm"></div>
               </div>
            </div>
          </div>

          <div className="space-y-4 max-w-md">
             <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
               Need <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">Assistance?</span>
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               KIVI and the SEUS support team are charged up and ready to help you with your EV journey.
             </p>
          </div>

        </div>

        {/* Right Column: Form */}
        <div className="relative">
            {/* Tech Corners (Cyan Accents) */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#00F0FF] rounded-tl-lg z-20"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#00F0FF] rounded-br-lg z-20"></div>

            {/* Form Container */}
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 md:p-10 shadow-2xl relative z-10">
                
                <div className="mb-8">
                    <h3 className="text-2xl font-bold uppercase tracking-wider text-white">Connect with SEUS</h3>
                    <p className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] mt-2 uppercase">Initiate Support Sequence</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="group">
                        <input 
                          type="text"
                          name="FullName" 
                          placeholder="FullName" 
                          className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                        />
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          type="tel" 
                          name="PhoneNumber"
                          placeholder="PhoneNumber" 
                          className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                        />
                        <input 
                          type="email"
                          name="EmailAddress" 
                          placeholder="EmailAddress" 
                          className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                        />
                    </div>

                    {/* Vehicle Select */}
                    <div className="relative">
                        <select name="Vehicle" className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-gray-400 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all appearance-none cursor-pointer">
                            <option value="">Vehicle</option>
                            <option value="sedan">SEUS Model S (Sedan)</option>
                            <option value="suv">SEUS Model X (SUV)</option>
                            <option value="fleet">Commercial Fleet Unit</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>

                    {/* Description */}
                    <textarea 
                      placeholder="Issue" 
                      name="Issue"
                      rows="3"
                      className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all resize-none"
                    ></textarea>

                     {/* Expectations */}
                     <textarea 
                      placeholder="Expectations" 
                      name="Expectations"
                      rows="2"
                      className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all resize-none"
                    ></textarea>

                    {/* Submit Button */}
                    <button className="w-full group relative overflow-hidden bg-transparent border border-[#00F0FF] text-[#00F0FF] font-bold py-4 rounded-lg transition-all hover:bg-[#00F0FF] hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                        <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
                            Transmit Data 
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </button>
                </form>

            </div>
        </div>

      </div>
      
      {/* Footer Text */}
      <div className="absolute bottom-4 text-[10px] text-zinc-600">
        © 2024 SEUS Electric. Powered by KIVI Intelligence.
      </div>
    </div>
    </>
  )
}

export default ContactUs