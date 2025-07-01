import React from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import useLocalStorage from "./hooks/useLocalStorage";
import BarChartComponent from "./components/BarChartComponent";

const App = () => {
  const [transactions, setTransactions] = useLocalStorage("budgetpal-txns", []);

  const handleAddTransactions = (txn) => {
    setTransactions((prev) => [txn, ...prev]);
  };

  const handleDeleteTransactions = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    if (confirmed) {
      setTransactions((prev) => prev.filter((txn) => txn.id !== id));
    }
  };

  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to clear all data?"
    );
    if (confirmReset) {
      setTransactions([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow py-4 px-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600">
          BudgetPal 💰
        </h1>
      </header>

      <main className="container mx-auto px-2 py-6 max-w-xl">
        <TransactionForm onAdd={handleAddTransactions} />
        <Summary transactions={transactions} />
        <button
          onClick={() => handleReset()}
          className="mt-4 mb-6 bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200 transition"
        >
          🔄 Reset All Transactions
        </button>

        <BarChartComponent transactions={transactions} />
        <h2 className="text-xl font-semibold mt-6 mb-2">Transactions</h2>
        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteTransactions}
        />
      </main>
    </div>
  );
};

export default App;
