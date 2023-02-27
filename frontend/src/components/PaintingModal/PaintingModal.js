import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './PaintingModal.css'

function PaintingModal({photo}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    
      <img className='galleryPainting' src={photo}  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
          <img src={photo}  alt={photo} className='modalPhoto' />
      </Modal>

    </>
  );
}

export default PaintingModal;