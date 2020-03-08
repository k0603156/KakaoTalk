const ADD_FRIEND = "friends/ADD_FRIEND";
const DELETE_FAVORITE = "friends/DELETE_FAVORITE";
const DELETE_FRIEND = "friends/DELETE_FRIEND";

export const addFriend = friend => ({ type: ADD_FRIEND, friend });
export const deleteFavorite = friend => ({ type: DELETE_FAVORITE, friend });
export const deleteFriend = friend => ({ type: DELETE_FRIEND, friend });

const initialState = {
  favorites: [
    { name: "진환", message: "꽃길만 걷자♡" },
    { name: "지찬", message: "존나 추워 집밖은 지옥이다" },
    { name: "온유", message: "감사하면 두려울게 없지" },
    { name: "온유 사수님", message: "" }
  ],
  friends: [
    { name: "친구1", message: "내려놓기" },
    { name: "배성탑", message: "- 구슬동자 ost 3번식 듣자" },
    { name: "친구2", message: "Dobby is not free." },
    { name: "진환", message: "꽃길만 걷자♡" },
    { name: "지찬", message: "존나 추워 집밖은 지옥이다" },
    { name: "온유", message: "감사하면 두려울게 없지" },
    { name: "온유 사수님", message: "" }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        favorites: [...state.favorites],
        friends: [...state.friends, action.friend]
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          friend => friend.name !== action.friend.name
        )
      };
    case DELETE_FRIEND:
      return {
        favorites: state.favorites.filter(
          friend => friend.name !== action.friend.name
        ),
        friends: state.friends.filter(
          friend => friend.name !== action.friend.name
        )
      };

    default:
      return state;
  }
}
