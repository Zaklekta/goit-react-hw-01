import FriendListItem from "./FriendListItem";
import css from "./FriendListItem.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friends-list"]}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
