import React from "react";
import { withRouter, Link } from "react-router-dom";
import ImoziIco from "media/ico/imozi.svg";
import CalendarIco from "media/ico/calendar.svg";
import AlrmIco from "media/ico/alrm.svg";
import MenuIco from "media/ico/menu.svg";
import RouteData from "Routes";

const Aside = ({ location }) => {
  const fillBtn = path => {
    return path === location.pathname ? "black" : "gray";
  };
  return (
    <div className="App-aside">
      <div className="App-aside-top">
        {RouteData.map(({ path, ico, alt }, index) => (
          <Link to={path} key={index}>
            {ico(fillBtn(path))}
          </Link>
        ))}
      </div>
      <div className="App-aside-bottom">
        <Link to="/#">
          <img src={ImoziIco} alt="카카오 이모티콘샵" />
        </Link>
        <Link to="/#">
          <img src={CalendarIco} alt="톡캘린더" />
        </Link>
        <Link to="/#">
          <img src={AlrmIco} alt="알림" />
        </Link>
        <Link to="/#">
          <img src={MenuIco} alt="메뉴" />
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Aside);
