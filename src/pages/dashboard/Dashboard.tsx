/** @format */

import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import type { Expense } from "../../model/Expense";
import AppHelper from "../../utils/AppHelper";
import DashboardStatus from "./DashboardStatus";

const Dashboard = () => {
  const loggedInUser: string = AppHelper.getLoggedInUser();

  const { expenses, error, loading } = useExpenses();

  const totalExpenses = expenses.reduce((total: number, expense: Expense) => total + parseFloat(expense.amount), 0);

  return (
    <div className="container">
      {loading && <div>Loading...</div>}
      {error && <p className="text-danger">Error: {error}</p>}
      <DashboardStatus loggedInUser={loggedInUser} totalExpenses={totalExpenses} />
      <hr />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
