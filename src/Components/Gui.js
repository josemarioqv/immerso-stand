import React from "react";
import statment from './../assets/statment.png'
import cancel from './../assets/cancel.png'


export default ({ state, setStateSelected }) => {
    if(state === 1){
      return (
        <a-entity>
        <a-image src={statment} position="4 1 0" rotation="0 -90 0" width="5" height="3"></a-image> 
        <a-plane  position="4 1 0" rotation="0 -90 0" width="5" height="3" color="#00b300"></a-plane> 
        <a-image src={cancel} onClick={() => { setStateSelected(0); }}position="3.95 2.2 2" rotation="0 -90 0" width="0.3" height="0.3"></a-image> 
        </a-entity>
    );
    }
    if(state === 2){
      return (
        <a-entity>
        <a-image src={statment} position="5 1 3" rotation="0 225 0" width="5" height="3"></a-image> 
        <a-plane  position="5 1 3" rotation="0 225 0" width="5" height="3" color="#00b300"></a-plane> 
        <a-image src={cancel} onClick={() => { setStateSelected(0); }} position="2.4 2 3" rotation="0 225 0" width="0.3" height="0.3"></a-image> 
        </a-entity>
    );
    }
  return(<div></div>)
};
