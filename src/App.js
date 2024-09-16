import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/CustomStyles.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import 'animate.css/animate.compat.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
