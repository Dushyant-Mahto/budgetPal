import React, { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleDateString(),
    };

    onAdd(newTransaction);

    setText("");
    setAmount("");
    setType("income");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="bold text-sm font-medium">Title</label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="e.g., Rent, Salary"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label>Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Enter Amount"
          className="w-full p-2 border round"
        />
      </div>

      <div className="flex gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            value="income"
            checked={type === "income"}
            onChange={() => setType("income")}
          />
          <span className="ml-2 text-green-600">Income</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="expense"
            checked={type === "expense"}
            onChange={() => {
              setType("expense");
            }}
          />
          <span className="ml-2 text-green-600">Expense</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 cursor-pointer"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
