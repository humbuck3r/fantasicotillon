import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Wsp from './Components/Wsp/Wsp';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer'
import Delivery from './Components/Delivery/Delivery';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';
import Quest from './Components/Quest/Quest'


function App() {
  return (
    <>
    <Header/>
    <Slider/>
    <Products/>
    <Wsp/>
    <About/>
    <Services/>
    
    <Quest/>
    <Delivery/>
    <Footer/>
    </>

  );
}

export default App;
