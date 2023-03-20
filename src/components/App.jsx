import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { StatList } from './Statistics/StatList';
import statistics from '../data/statistics.json';

import { FriendList } from './Friends/FriendsList';
import friends from '../data/friends.json';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './Transaction/TransactionHistory';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <StatList statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
