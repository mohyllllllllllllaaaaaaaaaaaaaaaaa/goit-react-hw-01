import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./friends.json";
import FriendsList from "./components/FriendList/FriendList";
import FriendListItem from "./components/FriendListItem/FriendListItem";

function App() {
  return (
    <div>
      <h3>User Profile</h3>
      <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
        <FriendList friends={friends} />
    </div>
  );
};
const FriendList = () => {
  return(
    <div>
     <FriendList friends={friends}/> 
    </div>
  );
 };


 
 export default App;

