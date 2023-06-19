import React, { useState } from 'react';

const Modal = (props: any) => {
  return (
    <>
      <div className={props.opened ? 'opened' : 'closed'}>
          <pre>{JSON.stringify(props.currentItem)}</pre>
        <div className="modal-content">
          {
            props.currentItem ?
              <img src={props.currentItem.images?.downsized?.url} />
            :
             null
          }
          <button onClick={() => props.changeImage(-1)}>Prev</button>
          <button onClick={() => props.changeImage(1)}>Next</button>
        </div>
      </div>
    </>
  )
}

export default Modal;
