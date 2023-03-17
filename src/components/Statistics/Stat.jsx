export const Stat = ({ stat: { label, percentage, id } }) => {
  return (
    <div>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </div>
  );
};

// export const Statistics = ({ title, stats }) => {
//   const { id, label, percentage } = stats;
//   return (
//     <section className="statistics">
//       <h2 className="title">Upload stats</h2>

//       <ul className="stat-list">
//         {stats.map(stat => (
//             <li className="item" key={id}>
//             <span className="label">{label}</span>
//             <span className="percentage">{percentage}</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };
