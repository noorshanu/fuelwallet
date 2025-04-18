import './index.css'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import BrowserSupport from './components/Support'
import GetStarted from './components/GetStarted'
import Features from './components/Feature'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import StarsBackground from './components/ui/Starbg';

function App() {

 
  return (
    <div className="w-full  overflow-x-hidden">
      <StarsBackground />
      <NavBar />
      <main className='relative w-full'>
        <Hero />
        <BrowserSupport />
        <img src="/blur2.png" alt=""  className="absolute top-[15%] left-[10%]  "/>
        <GetStarted />
        <Features />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  )
}

export default App