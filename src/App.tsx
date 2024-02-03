import { useState } from "react";

import "./App.css";
const phrases = [
  "No"
  "Are you sure?"
  "Really sure?"
  "Are you sure you want to do that?"
  "Are you absolutely sure?"
  "Are you REALLY sure?"
  "Are you REALLY REALLY sure?"
  "Are you REALLY REALLY REALLY sure?"
  "Reconsider?"
  "Reconsider again?"
  "Change of heart?"
  "Alishu"
]
function App() {
  setNoCount (noCount + 1);
}
function getNoButtonText () {
 return phrases [Math.min(noCount, phrases.length - 1)]; 
}

  const [nocount, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  return (
    <div className="valentine-container">
      {yesPressed ? (
      <>  
      <img
      alt="bears kissing"
      src="https://media1.tenor.com/m/tl4tMev7ICEAAAAC/instagram-zefexwoo-shaurya.gif"
      />
      <div className="text">Yay!!!!!!!</div>
      </>
      ) : (
       <>
       <img
       <alt ="bear with hearts" 
       src="https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.gif"
       />
       <div> Will you be my valentine?</div>
       <div>
        <button
        className="yesButton"
        style={{ fontSize: yesButtonSize}}
        onClick={() => setYesPressed(true)}
        >
          Yes
          </button>
          <button onClick= { handleNoClick } className="noButton">

        {getNoButtonText()}
        </button>
          No
        </button>
        </div>
        </>
          
        }
      
      
    </>
  );
}

export default App;
