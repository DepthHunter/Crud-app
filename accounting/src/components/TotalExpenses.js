import React from 'react';
import { connect } from 'react-redux';

const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + parseInt(expense.amount), 0);

  return (
    <div>
      <h2>Total Expenses</h2>
      <p>Total: {total}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

export default connect(mapStateToProps)(TotalExpenses);
