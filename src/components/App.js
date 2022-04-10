import '../css/App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <About/> 
    </div>
  );
}

export default App;
