import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home.js';
import About from './views/About.js';
import SkillSet from './views/SkillSet.js';
import Journey from './views/Journey.js';
import ContactMe from './views/ContactMe.js';
import MainOutlet from './MainOutlet.js';

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<MainOutlet/>}>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<SkillSet />} />
                    {/* <Route path="/journey" element={<Journey />} /> */}
                    <Route path="/contact" element={<ContactMe />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router