import React from 'react'

const Modal = ({Handleclose,HandleOfferAccept,handleExit}) => {
  return (
      <div onClick={handleExit} className='modal'>
          <div className='modal-content'>
          <button onClick={Handleclose} className='close-btn'>X</button>
          <div className='content'>
              Click the button below to
              accept the offer below
          </div>

          <button onClick={HandleOfferAccept} className='accept-btn'>ACCEPT OFFER</button>
          </div>
    </div>
  )
}

export default Modal;
