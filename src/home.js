import './home.css';
import './Components/Navigation';
import React, { useEffect } from 'react';
import NavMobile from './Components/Navigation';
import listener from './keybaord_listner'
import info from './static/images/keyboard_black_bg.png';

function Home() {

  useEffect(() => {
    const cleanupListener = listener();  // Initialize listener

    // Optionally clean up the listener on component unmount
    return () => {
      cleanupListener();
    };
  }, []); return (
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
          <h1> Use your keyboard arrows to use this site !</h1>
          <h3> Your mouse scroll wheel doesn't work in this site</h3>
        </div>
        <div className="image-container">
          <img src={info} alt="Please enable js" />
        </div>

      </div>
    </>
  );


}
export default Home;
