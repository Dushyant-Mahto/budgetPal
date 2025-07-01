import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ transactions }) => {
  const monthlyData = {};

  transactions.forEach((txn) => {
    const date = new Date(txn.date);
    const month = `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;

    if (!monthlyData[month]) {
      monthlyData[month] = { month, income: 0, expense: 0 };
    }

    if (txn.type === "income") {
      monthlyData[month].income += txn.amount;
    } else {
      monthlyData[month].expense += txn.amount;
    }
  });

  const chartData = Object.values(monthlyData).sort((a, b) =>
    new Date(a.month) > new Date(b.month) ? 1 : -1
  );

  return (
    <div className="bg-white mt-6 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Monthly Income vs Expense</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#4ade80" />
          <Bar dataKey="expense" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
