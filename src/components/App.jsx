import user from "../data/user.json";
import statistics from "../data/statistics.json";
import friends from "../data/friends.json";
import transactions from '../data/transaction.json'
import {Profile} from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
console.log(user);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={statistics} />
<FriendList friends={friends} />

<TransactionHistory items={transactions} />
</div> 
  )
};
