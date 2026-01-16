import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Services from './pages/Services/Services'
import TechnicianPanel from "./pages/Technician Panel/TechnicianPanel"
import ContactUs from "./pages/ContactUs/ContactUs"


const App = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-body transition-colors duration-300">
      <Header />
      
      <Routes>
      <Route path ="/" element= {<Home />} />
      <Route path ="/services" element= {<Services />} />
      <Route path = "/TechnicianPanel" element = {< TechnicianPanel />} />
      <Route path = "/ContactUs" element = {< ContactUs />} />

      </Routes>
      

      <Footer />
    </div>
  )
}

export default App
