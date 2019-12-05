import React, { useState } from "react";
import Header from "Components/Header";
import BoxColumn from "Components/BoxColumn";
import ColumnChatTail from "Components/ColumnChatTail";
const Chat = () => {
  const [searchinput, setSearchInput] = useState("");
  const chatRoomData = [
    {
      name: "챗룸1",
      message: "Happy hacking!",
      updatedTime: "오후 10:03",
      chatCount: "3"
    },
    {
      name: "챗룸2",
      message: "Happy hacking!",
      updatedTime: "오후 10:01",
      chatCount: "300+"
    },
    {
      name: "챗룸3",
      message: "Happy hacking!",
      updatedTime: "오후 08:31",
      chatCount: "13"
    },
    {
      name: "챗룸4",
      message: "Happy hacking!",
      updatedTime: "오후 05:54",
      chatCount: "1"
    },
    {
      name: "챗룸5",
      message: "Happy hacking!",
      updatedTime: "오후 09:22",
      chatCount: "14"
    }
  ];
  const headerData = {
    title: "채팅",
    placeHolder: "채팅방 이름, 참여자 검색"
  };
  const userFilter = array => {
    return array.filter(user => user.name.includes(searchinput));
  };
  return (
    <>
      <Header data={headerData} state={searchinput} set={setSearchInput} />
      <div className="Section-body">
        <article className="Article">
          {userFilter(chatRoomData).map((user, i) => (
            <BoxColumn data={user} size="sm" key={i}>
              <ColumnChatTail
                updatedTime={user.updatedTime}
                chatCount={user.chatCount}
              />
            </BoxColumn>
          ))}
        </article>
      </div>
    </>
  );
};
export default Chat;
