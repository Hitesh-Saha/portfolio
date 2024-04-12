import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home.js';
import About from './views/About.js';
import SkillSet from './views/SkillSet.js';
import Journey from './views/Journey.js';
import ContactMe from './views/ContactMe.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillSet />} />
          {/* <Route path="/journey" element={<Journey />} /> */}
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
