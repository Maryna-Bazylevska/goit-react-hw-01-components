import "./App.css";
import Profile from "./componens/Profile";
import Statistics from "./componens/Statistics";
import FriendList from "./componens/FriendList";
import TransactionHistory from "./componens/TransactionHistory";
import user from "./componens/Profile/user.json";
import data from "./componens/Statistics/data.json";
import friends from "./componens/FriendListItem/friends.json";
import transactions from "./componens/TransactionHistory/transactions.json";
function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
