import React from "react";
import ProfileContainer from "Components/ProfileContainer";
const User = () => {
  const profileData = { name: "용국", message: "Happy hacking!" };
  return (
    <div className="Section-body">
      <ProfileContainer data={profileData} />
      <hr className="Section-devider" />
      <div className="Article">
        <div className="Article-header">즐겨찾기</div>
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
      </div>
      <div className="Article">
        <div className="Article-header">친구</div>
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
        <ProfileContainer data={profileData} size="sm" />
      </div>
    </div>
  );
};
export default User;
