import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {IpropsToast} from './Toast.type';
function ToastCreate({show,onHiden}:IpropsToast) {
  const [position, setPosition] = useState('top-start');
  
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark "
      style={{ minHeight: '240px',width:'100vw',height:'100vh' ,zIndex:'-1',position:'absolute',top:'0px',left:'0px'}}
    >
    
        <Toast  show={true} delay={500}   onClose={onHiden}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
       
     
    </div>
  );
}

export default ToastCreate;