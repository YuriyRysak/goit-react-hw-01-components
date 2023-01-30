
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
  return(
    <table className={css.transactionHistory}>
  <thead className={css.head_row}>
    <tr className={css.values_row}>
      <th className={css.header_column}>Type</th>
      <th className={css.header_column}>Amount</th>
      <th className={css.header_column}>Currency</th>
    </tr>
  </thead>

  <tbody>
     {items.map(({id, type, amount, currency}) => (
      <tr key={id} className={css.values_row}>
      <td className={css.data_transaction}>{type}</td>
      <td className={css.data_transaction}>{amount}</td>
      <td className={css.data_transaction}>{currency}</td>
    </tr>

     ))}
     
  </tbody>
</table>
  )
};



TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
