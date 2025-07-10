/** @format */

import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";

const Dashboard = () => {
  const { expenses, error, loading } = useExpenses();

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <ExpenseList expenses={expenses} />;
    </div>
  );
};

export default Dashboard;
