import '../css/App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Projects';
import Footer from './Footer';
import TimelineComponent from './Timeline';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <About/> 
        <TimelineComponent/>
        <Skills/>
        <Portfolio/>
        <Footer/>
    </div>
  );
}

export default App;
