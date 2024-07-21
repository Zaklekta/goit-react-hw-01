import css from "./Ptofile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.box}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css["stats-list"]}>
        <li className={css["stats-item"]}>
          <span className={css["stats-item-name"]}>Followers</span>
          <span className={css["stats-item-score"]}>{stats.followers}</span>
        </li>
        <li className={css["stats-item"]}>
          <span className={css["stats-item-name"]}>Views</span>
          <span className={css["stats-item-score"]}>{stats.views}</span>
        </li>
        <li className={css["stats-item"]}>
          <span className={css["stats-item-name"]}>Likes</span>
          <span className={css["stats-item-score"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
