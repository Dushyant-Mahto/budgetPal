import React from "react";

const Summary = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="bg-white p-4 shadow rounded border-l-4 border-green-500">
        <h3 className="text-sm text-gray-500">Income</h3>
        <p className="text-xl text-green-600 font-semibold">₹{income}</p>
      </div>

      <div className="bg-white p-4 shadow rounded border-l-4 border-red-500">
        <h3 className="text-sm text-gray-500">Expense</h3>
        <p className="text-xl text-red-600 font-semibold">₹{expense}</p>
      </div>

      <div className="bg-white p-4 shadow rounded border-l-4 border-indigo-500">
        <h3 className="text-sm text-gray-500">Balance</h3>
        <p
          className={`text-xl font-semibold ${
            balance >= 0 ? "text-indigo-600" : "text-red-600"
          }`}
        >
          ₹{balance}
        </p>
      </div>
    </div>
  );
};

export default Summary;
