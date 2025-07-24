/** @format */

import { useState, useEffect } from "react";
import type { Expense } from "../model/Expense";
import { getExpenseByExpenseId } from "../services/expense-service";

const useExpenseByExpenseId = (expenseId: string) => {
  const [expense, setExpense] = useState<Expense | null>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getExpenseByExpenseId(expenseId)
      .then((response) => setExpense(response.data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
  }, []);

  return { expense, errors, isLoading, setLoader, setErrors };
};

export default useExpenseByExpenseId;
