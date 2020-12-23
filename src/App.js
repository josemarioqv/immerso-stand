import background from './assets/background3.jpeg'
import music from './assets/music.mp3'
import logo from './assets/immerso.png'
import contact from './assets/contactanos.png'
import catalina from './assets/catalina.jpeg'
import visit from './assets/visita.png'
import yt from './assets/youtube.png'
import './App.css';
import 'aframe';
import React, { useState } from "react";
import Gui from './Components/Gui'


function App() {
  const [stateSelected, setStateSelected] = useState(0);

  return (
   

    <div className="App">
      <a-scene  cursor="rayOrigin: mouse">
        

        <a-plane position="10 2 -8" rotation="0 -40 0" width="7" height="4" color="#654321"></a-plane>
        <a-plane position="10 -3 -8" rotation="0 -40 0" width="1" height="10" color="#654321"></a-plane>
        <a-image src={logo} onClick={() => { setStateSelected(1); }} position="9.95 2 -8" rotation="0 -40 0"  width="5" height="3"></a-image>
      
        <a-plane position="4 0 8" rotation="0 200 0" width="5" height="4" color="#654321"></a-plane>
        <a-plane position="4 -3 8" rotation="0 200 0" width="1" height="5" color="#654321"></a-plane>
        <a-image src={visit} position="3.9 1.1 7.9" rotation="0 200 0" width="3.5" height="1.7"></a-image>
        <a-image src={catalina}  link="href: https://theimmerso.com/experience-page/la-catalina-botanical-garden; on: click" position="3.8 -0.2 7.8" rotation="0 200 0" width="4" height="2"></a-image>


        <a-plane position="11 0 8" rotation="0 225 0" width="4" height="2" color="#654321"></a-plane>
        <a-plane position="11 -3 8" rotation="0 225 0" width="1" height="5" color="#654321"></a-plane>
        <a-image src={contact} onClick={() => { setStateSelected(2); }} position="10.95 0 8" rotation="0 225 0" width="3.5" height="1.7"></a-image>


        <a-plane position="18 0 6" rotation="0 250 0" width="4" height="2" color="#654321"></a-plane>
        <a-plane position="18 -3 6" rotation="0 250 0" width="1" height="5" color="#654321"></a-plane>
        <a-image src={yt} link="href:https://www.youtube.com/watch?v=xnuCtKQ7Ofw; on: click" position="17.95 0 6" rotation="0 250 0" width="2" height="2"></a-image>

        <a-camera  wasd-controls-enabled="false">
        <a-sound src={music} autoplay="true"
          position="0 0 0" loop="true" volume="1"></a-sound>
        </a-camera>

        <Gui state={stateSelected} setStateSelected={setStateSelected}/>

        <a-sky src={background} sound="src: #waves"></a-sky>
      </a-scene>
    </div>
  );
}

export default App;
