import { Profile } from './Profile/Profile';
import user from '../data/user.json';
// import { Stat } from './Statistics/Stat';
import statistics from '../data/statistics.json'
import { StatList } from './Statistics/StatList';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      {/* <Stat stat={statistics[2]}/> */}
      <StatList statistics={statistics}/>
    </div>
  );
};
