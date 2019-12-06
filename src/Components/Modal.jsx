import React from "react";

const Modal = () => {
  return (
    <>
      <div className="Modal-overlay" />
      <div className="Modal">
        <div className="title">
          <p>친구 추가</p> <span>&times;</span>
        </div>
        <div className="content">
          <p>연락처로 친구 추가</p>
        </div>
        <div className="button-wrap">
          <button> 친구추가 </button>
        </div>
      </div>
    </>
  );
};
export default Modal;
