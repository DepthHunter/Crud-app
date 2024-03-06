import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../redux/actions';

const ExpensesList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h2>Expenses List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.name} - {expense.amount}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

export default connect(mapStateToProps, { deleteExpense })(ExpensesList);
