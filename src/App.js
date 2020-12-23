import background from './assets/background3.jpeg'
import music from './assets/music.mp3'
import './App.css';
import 'aframe';


function App() {

  


  return (
    <div className="App">
      <a-scene>
        

        <a-plane position="10 2 -8" rotation="0 -40 0" width="7" height="4" color="#654321"></a-plane>
        <a-plane position="10 -3 -8" rotation="0 -40 0" width="1" height="10" color="#654321"></a-plane>

        <a-plane id='Contactanos'
          position="4 0 8" 
          rotation="0 200 0" 
          width="4" 
          height="2" 
          color="#654321"
          text="value: CONTACTANOS; color:black; align:center"
          scale="1 1 1"
          >          
        </a-plane>
        <a-plane position="4 -3 8" rotation="0 200 0" width="1" height="5" color="#654321"></a-plane>


        <a-plane position="11 0 8" rotation="0 225 0" width="4" height="2" color="#654321"></a-plane>
        <a-plane position="11 -3 8" rotation="0 225 0" width="1" height="5" color="#654321"></a-plane>

        <a-plane position="18 0 6" rotation="0 250 0" width="4" height="2" color="#654321"></a-plane>
        <a-plane position="18 -3 6" rotation="0 250 0" width="1" height="5" color="#654321"></a-plane>


        <a-camera  wasd-controls-enabled="false">
        <a-sound src={music} autoplay="true"
          position="0 0 0" loop="true" volume="0.7"></a-sound>
        </a-camera>

        <a-sky src={background} sound="src: #waves"></a-sky>
      </a-scene>
    </div>
  );
}

export default App;
