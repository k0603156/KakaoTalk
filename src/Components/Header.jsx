import React from "react";
import AddUserIco from "media/ico/add_user.svg";
import SearchIco from "media/ico/search.svg";
const Header = ({ data, state, set }) => {
  const inputChange = e => {
    set(e.target.value);
  };
  return (
    <header className="Section-header">
      <div className="Section-toolbar">
        <span className="Section-title">{data.title}</span>
        <div className="Section-menu">
          <a href="/#">
            <img src={AddUserIco} alt="친구 추가" />
          </a>
        </div>
      </div>
      <div className="Section-searchbar">
        <input
          className="Searchbar-input"
          type="text"
          placeholder={data.placeHolder}
          onChange={inputChange}
          value={state}
        />
        <div className="Searchbar-inputcap">
          <img src={SearchIco} alt="검색" />
        </div>
      </div>
    </header>
  );
};
export default Header;
