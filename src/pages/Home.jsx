import Hero from "../components/Hero";
import Featued from "../components/Featued";
import About from "../components/About";
import Service from "../components/Service";
import Testomonials from "../components/Testomonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copywrite from "../components/Copywrite";
import Protfolio from "../components/Protfolio";

function Home() {
  return (
    <main className="max-w-[1600px] mx-auto ">
     <Hero />
     <Featued />
     <About />
     <Service />
     <Protfolio />
     <Testomonials />
     <Contact />
     <Footer />
     <Copywrite />
    </main>
  )
}

export default Home
