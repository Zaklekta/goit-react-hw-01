import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css["list-item"]}>
      <img className={css["avatar"]} src={avatar} alt="Avatar" width="200" />
      <p className={css["friend-name"]}>{name}</p>
      <p className={clsx(css.status, isOnline && css.online)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
