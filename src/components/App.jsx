import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { StatList } from './Statistics/StatList';
import statistics from '../data/statistics.json';

import { FriendList } from './Friends/FriendsList';
import friends from '../data/friends.json';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './Transaction/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <StatList statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
