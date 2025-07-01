import React from "react";

const TransactionList = ({ transactions, onDelete }) => {
  if (transactions.length === 0) {
    return <p className="text-center text-gray-500">No transactions yet.</p>;
  }
  return (
    <ul className="mt-4 space-y-2">
      {transactions.map((txn) => (
        <li
          key={txn.id}
          className={`flex justify-between items-center p-3 rounded shadow-sm ${
            txn.type === "income" ? "bg-green-50" : "bg-red-50"
          }`}
        >
          <div>
            <h4 className="font-medium">{txn.text}</h4>
            <p className="text-xs text-gray-500">{txn.date}</p>
          </div>
          <div
            className={`font-bold ${
              txn.type === "income" ? "text-green-600" : "text-red-600"
            }`}
          >
            {txn.type === "expense" ? "-" : "+"}₹{txn.amount}
          </div>
          <button
            onClick={() => onDelete(txn.id)}
            className="text-sm text-red-400 hover:text-red-600 transition cursor-pointer"
            title="Delete"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
