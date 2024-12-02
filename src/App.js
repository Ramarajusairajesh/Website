import './App.css';
import { NavMobile } from './Components/Navigation';
import info from './static/images/keyboard_black_bg.png';
function App() {
  return (
    <>
      <div>
        <NavMobile />
      </div>

      <div className="Homepage">
        <div className="Welcome">
          <h1> This is a fun website I created </h1>
          <h4>I am a massochist and to feel more pain I started this ! </h4>
        </div>
        <div className="help">
          <h1> User your keyboard arrows to use this site !</h1>
          <h3> Your mouse scroll wheel doesn't work in this site</h3>
        </div>
        <div class="image-container">
          <img src={info} alt="Centered Image" />
        </div>

      </div>
    </>
  );

}

export default App;
