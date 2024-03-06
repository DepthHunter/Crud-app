import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../redux/actions';

const AddExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(), // Simple way to generate unique ID
      name,
      amount
    };
    addExpense(newExpense);
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default connect(null, { addExpense })(AddExpenseForm);
