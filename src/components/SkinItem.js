import React, {useState} from "react";


function SkinItem({ image, name, description }) {
    const [Modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!Modal)
    }
    if(Modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
      <>
    <div className="skinItem" onClick={toggleModal}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
          {Modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{name}</h2>
            <p>{description}</p>
            <button className="close-modal" onClick={toggleModal}>
              ZAMKNIJ
            </button>
          </div>
        </div>
      )}
      </>
  );
}

export default SkinItem;