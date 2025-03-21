import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendsList = ({friends}) => {
    return (
        <div className={css.friendlist}>
        <ul >
            {friends.map(({ id, avatar, name, isOnline}) => (
                <li className={css.friedItem} key={id}>
                    <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}/>
                </li>
            ))}
        </ul>
        </div>
    );
};
export default FriendsList;
    