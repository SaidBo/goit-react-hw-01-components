import PropTypes from 'prop-types';
import { TransactionsTableItem, Td } from './Transaction.styled';

export const TransactionItem = ({ item: { id, type, amount, currency } }) => {
  return (
    <TransactionsTableItem key={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TransactionsTableItem>
  );
};


TransactionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};