import { useEffect, useState } from 'react'
import gsap from "gsap";
import './index.css'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import BrowserSupport from './components/Support'
import GetStarted from './components/GetStarted'
import Features from './components/Feature'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'

function App() {

useEffect(() => {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    gsap.to(star, {
      x: "random(-50, 50)",
      y: "random(-50, 50)",
      opacity: "random(0.3, 1)",
      duration: "random(1, 3)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });
}, []);

  return (
    <div className="min-h-screen landing-page text-white">
      <NavBar />
      <main>
        <Hero />
        <BrowserSupport />
        <GetStarted />
        <Features />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  )
}

export default App



//     <div className="landing-page">
//       <div className="stars-container">
//         {[...Array(100)].map((_, i) => (
//           <div key={i} className="star" />
//         ))}
//       </div>
//       <header className="header">
//         <h1>A Crypto Wallet to Blockchain Apps</h1>
//         <p>Start exploring blockchain applications in seconds.</p>
//         <button className="cta-btn">GET 1FUEL</button>
//       </header>
//     </div>

