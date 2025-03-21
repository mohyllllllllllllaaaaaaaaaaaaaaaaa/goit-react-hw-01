import FriendListItem from "../FriendListItem/FriendListItem";

const FriendsList = ({friends}) => {
    return (
        <div>
        <ul>
            {friends.map(({ id, avatar, name, isOnline}) => (
                <li key={id}>
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
    