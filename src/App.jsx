import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import TechSkills from './components/TechSkills'
import './App.css';
import './index.css';

function App() {
  return (
    <div className="scroll-smooth snap-mandatory snap-y ">
      <Navigation />
      <HeroSection />
      <About />
      <TechSkills />
      <Projects />
      <Contact /> 
    </div>
  );
}

export default App;
