import { Stat } from './Stat';

export const StatList = ({ title, statistics }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statistics.map(stat => (
          <li key={stat.id}>
            <Stat stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
