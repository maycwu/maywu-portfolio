import '../css/App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <About/> 
        <Skills/>
        <Portfolio/>
        <Footer/>
    </div>
  );
}

export default App;
