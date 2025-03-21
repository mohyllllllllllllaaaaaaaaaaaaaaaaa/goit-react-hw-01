import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";

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
      <h3>Friend List</h3>
      <FriendList friends={friends} /> 
    </div>
  );
}

export default App;

