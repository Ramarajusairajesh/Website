import './App.css';
import { NavMobile } from './Components/Navigation';
import info from './static/images/keyboard_black_bg.png';
import { listener } from './keybaord_listner';
import Home from './home';
import Getlost from './getlost';
import Blog from './blog';
import About from './about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {


  return (<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/getlost" element={<Getlost />} />
    </Routes>
  </Router>
  );
}

export default App;
