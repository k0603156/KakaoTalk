import React from "react";
import { withRouter, Link } from "react-router-dom";
import UserIco from "media/ico/user.svg";
import ChatIco from "media/ico/chat.svg";
import EllipsisIco from "media/ico/ellipsis.svg";
import ImoziIco from "media/ico/imozi.svg";
import CalendarIco from "media/ico/calendar.svg";
import AlrmIco from "media/ico/alrm.svg";
import MenuIco from "media/ico/menu.svg";
const Aside = ({ history }) => {
  return (
    <div className="App-aside">
      <div className="App-aside-top">
        <Link to="/list">
          <img src={UserIco} alt="친구" />
        </Link>
        <Link to="/list">
          <img src={ChatIco} alt="채팅" />
        </Link>
        <Link to="/list">
          <img src={EllipsisIco} alt="더보기" />
        </Link>
      </div>
      <div className="App-aside-bottom">
        <Link to="/list">
          <img src={ImoziIco} alt="카카오 이모티콘샵" />
        </Link>{" "}
        <Link to="/list">
          <img src={CalendarIco} alt="톡캘린더" />
        </Link>{" "}
        <Link to="/list">
          <img src={AlrmIco} alt="알림" />
        </Link>{" "}
        <Link to="/list">
          <img src={MenuIco} alt="메뉴" />
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Aside);
