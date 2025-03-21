import css from "./Profile.module.css";
const Profile = ({name, tag, location, image, stats }) => {
    return (
        <div className={css.user}>
          <div >
            <img src={image} alt="User avatar" />
            <p className={css.userName}>{name}</p>
            <p>@{tag}</p>
            <p>{location}</p>
            </div>
            <ul >
                <li>
                    <span>Followrs</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
                </ul>  
        </div>
    );
};
export default Profile;