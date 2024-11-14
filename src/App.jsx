import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Services from "./components/Services";


function App() {
  return (
    <div  className="overflow-x-hidden bg-white text-dark">
        <Hero/>
        <Services/>
        <Banner/>
    </div>
  )
}

export default App
