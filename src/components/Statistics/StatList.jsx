import { Stat } from './Stat';
import PropTypes from 'prop-types';

import {
  StatisticWraper,
  StatisticTitle,
  StatisticList,
  StatisticItem,
} from './Statistics.styled';

export const StatList = ({ title, statistics }) => {
  return (
    <StatisticWraper>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList className="stat-list">
        {statistics.map(stat => (
          <StatisticItem key={stat.id}>
            <Stat stat={stat} />
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticWraper>
  );
};

StatList.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
