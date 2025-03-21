import userData from "./userData.json";
import Profile from "./components/Profile";

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
    </div>
  );
};
export default App;
