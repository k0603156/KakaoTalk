import React, { useState } from "react";
import Header from "Components/Header";
import BoxColumn from "Components/BoxColumn";
const User = () => {
  const [searchinput, setSearchInput] = useState("");
  const myProfile = { name: "용국", message: "Happy hacking!" };
  const favoritData = [
    { name: "진환", message: "Happy hacking!" },
    { name: "지찬", message: "Happy hacking!" },
    { name: "온유", message: "Happy hacking!" },
    { name: "온유 사수님", message: "Happy hacking!" }
  ];
  const profileData = [
    { name: "친구1", message: "Happy hacking!" },
    { name: "친구2", message: "Happy hacking!" },
    { name: "친구3", message: "Happy hacking!" },
    { name: "친구4", message: "Happy hacking!" }
  ];
  const headerData = {
    title: "친구",
    placeHolder: "이름 검색"
  };
  const userFilter = array => {
    return array.filter(user => user.name.includes(searchinput));
  };
  return (
    <>
      <Header data={headerData} state={searchinput} set={setSearchInput} />
      <div className="Section-body">
        <BoxColumn data={myProfile} />
        <hr className="Section-devider" />
        <article className="Article">
          <div className="Article-header">즐겨찾기</div>
          {userFilter(favoritData).map((user, i) => (
            <BoxColumn data={user} size="sm" key={i} />
          ))}
        </article>
        <article className="Article">
          <div className="Article-header">친구</div>
          {userFilter(profileData).map((user, i) => (
            <BoxColumn data={user} size="sm" key={i} />
          ))}
        </article>
      </div>
    </>
  );
};
export default User;
