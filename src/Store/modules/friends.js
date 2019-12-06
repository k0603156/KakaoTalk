const ADD_FRIEND = "friends/ADD_FRIEND";
const DELETE_FAVORITE = "friends/DELETE_FAVORITE";
const DELETE_FRIEND = "friends/DELETE_FRIEND";

export const addFriend = friend => ({ type: ADD_FRIEND, friend });
export const deleteFavorite = friend => ({ type: DELETE_FAVORITE, friend });
export const deleteFriend = friend => ({ type: DELETE_FRIEND, friend });

const initialState = {
  favorites: [
    { name: "진환", message: "Happy hacking!" },
    { name: "지찬", message: "Happy hacking!" },
    { name: "온유", message: "Happy hacking!" },
    { name: "온유 사수님", message: "Happy hacking!" }
  ],
  friends: [
    { name: "친구1", message: "Happy hacking!" },
    { name: "친구2", message: "Happy hacking!" },
    { name: "친구3", message: "Happy hacking!" },
    { name: "진환", message: "Happy hacking!" },
    { name: "지찬", message: "Happy hacking!" },
    { name: "온유", message: "Happy hacking!" },
    { name: "온유 사수님", message: "Happy hacking!" }
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
