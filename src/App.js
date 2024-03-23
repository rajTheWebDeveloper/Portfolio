import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blurbar from './components/Blurbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-[#111111] ml-[40px] md:ml-[50px] text-white min-h-screen mx-auto overflow-x-hidden">
      <Navbar />
      <Blurbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;