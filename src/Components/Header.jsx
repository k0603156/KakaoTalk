import React from "react";
import AddUserIco from "media/ico/add_user.svg";
import SearchIco from "media/ico/search.svg";
const Header = () => {
  return (
    <header className="Section-header">
      <div className="Section-toolbar">
        <span className="Section-title">친구</span>
        <div>
          <a href="/#">
            <img src={AddUserIco} alt="친구 추가" />
          </a>
        </div>
      </div>
      <div className="Section-searchbar">
        <input className="Searchbar-input" type="text" placeholder="이름검색" />
        <div className="Searchbar-inputcap">
          <img src={SearchIco} alt="검색" />
        </div>
      </div>
    </header>
  );
};
export default Header;
