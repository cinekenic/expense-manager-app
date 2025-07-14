/** @format */

import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import type { Expense } from "../../model/Expense";
import DashboardStatus from "./DashboardStatus";

const Dashboard = () => {
  const loggedInUser: string = "John Doe";

  const { expenses, error, loading } = useExpenses();

  const totalExpenses = expenses.reduce((total: number, expense: Expense) => total + expense.amount, 0);

  return (
    <div className="container">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <DashboardStatus loggedInUser={loggedInUser} totalExpenses={totalExpenses} />
      <hr />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
