import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

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
      <div>
      <h3>Friend List</h3>
      <FriendList friends={friends} />
      </div> 
      <div>
      <h3>Transaction History</h3>
      <TransactionHistory items={transactions} />
    </div>
    </div>
  );
}

export default App;

