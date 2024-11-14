import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Subscribe from "./components/Subscibe";


function App() {
  return (
    <div  className="overflow-x-hidden bg-white text-dark">
        <Hero/>
        <Services/>
        <Banner/>
        <Subscribe/>
        <Banner2/>
        <Footer/>
    </div>
  )
}

export default App
