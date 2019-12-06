import React from "react";
import UserImage from "media/image/profile_image.png";

function BoxColumn({ size = "lg", onClick, data, children }) {
  return (
    <div className={"Column-container " + size} onClick={onClick}>
      <span className="Column-img-wrapper ">
        <img src={UserImage} alt="프로필 이미지" />
      </span>
      <div className="Column-data-wrapper">
        <span className="Column-data-name">{data.name}</span>
        <div className="Column-data-message">{data.message}</div>
      </div>
      {children}
    </div>
  );
}
export default BoxColumn;
