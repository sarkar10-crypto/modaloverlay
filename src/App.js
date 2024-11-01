import './App.css';
import { useState } from 'react';
import Modal from './Components/modal';
import Last from './Components/last';

function App() {
  const [isshow, setisshow] = useState(false);
  const [isofferaccepted, setisofferaccepted] = useState(false);
  const Handleoffer = () => {
    setisshow(true);
  }

  const Handleclose = () => {
    setisshow(false);
  }

  const HandleOfferAccept = () => {
    setisshow(false);
    setisofferaccepted(true);
  }
  const handleExit = (e) => {
    // setisshow(false); ye logic lagaunga toh kahi pe bhi click hua to close ho jaye ga hum ko sirf modal-content ke bahar clickExit ko apply karna hai
    console.log(e.target.className);
    if (e.target.className === "modal") {
      Handleclose();
    }
  }
  
  return (
    <div className="App">
      
      {
        !isofferaccepted && <div className='show-offer'>
          <h1>MODAL OVERLAY</h1>
        <button onClick={Handleoffer} className='offer-btn'>Show Offer</button>
      </div>
      }
      {
        isshow && <Modal Handleclose={Handleclose} HandleOfferAccept={HandleOfferAccept} handleExit={handleExit} />
      }
      {
        isofferaccepted && <Last/>
      }
    </div>
  );
}

export default App;
