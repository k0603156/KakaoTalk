import React, { useState } from "react";
import { connect } from "react-redux";
import { addFriend, deleteFavorite, deleteFriend } from "Store/modules/friends";
import Header from "Components/Header";
import BoxColumn from "Components/BoxColumn";
import Modal from "Components/Modal";
const Home = ({ friends, addFriend, deleteFavorite, deleteFriend }) => {
  const headerData = {
    title: "친구",
    placeHolder: "이름 검색"
  };
  const [searchinput, setSearchInput] = useState("");
  const myProfile = { name: "용국", message: "Happy hacking!" };
  const favoritesData = friends.favorites;
  const friendsData = friends.friends;
  const handleClickAddFriend = (e, data) => {
    addFriend(data);
  };
  const handleClickDelFavorite = (e, data) => {
    deleteFavorite(data);
  };
  const handleClickDelFriend = (e, data) => {
    deleteFriend(data);
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
          {userFilter(favoritesData).map((user, i) => (
            <BoxColumn
              data={user}
              onClick={e => handleClickDelFavorite(e, user)}
              // onClick={handleClick.bind(null, user)}
              size="sm"
              key={i}
            />
          ))}
        </article>
        <article className="Article">
          <div className="Article-header">친구</div>
          {userFilter(friendsData).map((user, i) => (
            <BoxColumn
              data={user}
              onClick={e => handleClickDelFriend(e, user)}
              size="sm"
              key={i}
            />
          ))}
        </article>
      </div>
      {/* <Modal /> */}
    </>
  );
};
const mapStateToProps = state => ({
  friends: state.friends
});
const mapDispatchToProps = dispatch => ({
  addFriend: friend => dispatch(addFriend(friend)),
  deleteFavorite: friend => dispatch(deleteFavorite(friend)),
  deleteFriend: friend => dispatch(deleteFriend(friend))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
