import './App.css';
import { NavMobile } from './Components/Navigation';
import info from './static/images/keyboard_black_bg.png';
import { listener } from './keybaord_listner';
import home from './home';
import getlost from './getlost';
import blog from './blog';
import about from './about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {


  return (<Router>
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/about" element={<about />} />
      <Route path="/myblog" element={<blog />} />
      <Route path="/getlost" element={<getlost />} />
    </Routes>
  </Router>
  );
}

export default App;
