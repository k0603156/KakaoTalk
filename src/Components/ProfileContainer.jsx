import React from "react";
import ProfileImage from "media/image/profile_image.png";

function ProfileContainer({ data, size = "lg" }) {
  return (
    <div className={"Profile-container " + size}>
      <span className="Profile-img-wrapper ">
        <img src={ProfileImage} alt="프로필 이미지" />
      </span>
      <div className="Profile-data-wrapper">
        <span className="Profile-data-name">{data.name}</span>
        <div className="Profile-data-message">{data.message}</div>
      </div>
    </div>
  );
}
export default ProfileContainer;
