import { TransactionItem } from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import { TransactionsWraper, Th} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsWraper class="transaction-history">
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem item={item} />
        ))}
      </tbody>
    </TransactionsWraper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
