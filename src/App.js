import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Service from './components/Myservice/Service';
import Latest from './components/Latest/Latest';
import Gettouch from './components/Gettouch/Gettouch';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Hero/>
         <About/>
         <Service/>
         <Latest/>
         <Gettouch/>
         <Footer/>
    </div>
  );
}

export default App;
