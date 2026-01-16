import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0A0C10]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
<NavLink className="flex items-center space-x-3 rtl:space-x-reverse group" to="">
<img alt="SEUS Logo" className="h-10 w-10 rounded-full border border-primary/50 group-hover:shadow-neon transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnmVu0Z_I38Fl0uOnaR4e7UODFOgG0cKfXG9OYXz9mIcv5pocHR2PkQbRjfJxW55vSKFlVKWsAawTpc6yjK74g-mbHa97nk0e9NkDZom3g6VOC2XTUoQhiGEDVoAQibLw70tA0TdpmLb3OjsGhMyI7I4cDHt_uMnaEJkdMAmBX2FpBN9JttMJtaNxNdGOO-CR0UFaHRuAwVFuV0dganDGQobYCOjusNOLdrXAw3D-_6VakDd5rhgFzIqI0WSgozClWGqH54ZN6pRg"/>
<span className="self-center text-2xl font-display font-bold whitespace-nowrap dark:text-white tracking-widest">SEUS</span>
</NavLink>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-slate-900 dark:text-white bg-transparent border border-primary hover:bg-primary hover:text-black hover:shadow-neon focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 transform hover:scale-105" type="button">
                    Client Login
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<span className="material-icons-round">menu</span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
<li>
<NavLink aria-current="page" className="block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 font-display tracking-wide" to="">Home</NavLink>
</li>
<li>
<NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white dark:hover:text-primary dark:border-gray-700 transition-colors" to="/services">SERVICES</NavLink>
</li>
<li>
<NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white dark:hover:text-primary dark:border-gray-700 transition-colors" to="/TechnicianPanel">TECHNICIAN PANEL</NavLink>
</li>
<li>
<NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white dark:hover:text-primary dark:border-gray-700 transition-colors" to="/ContactUs">CONTACT US</NavLink>
</li>
</ul>
</div>
</div>
</nav>
    </>
  )
}

export default Header