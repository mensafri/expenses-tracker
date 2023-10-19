import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function RecentExpenses() {
  const [isFetchingState, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expenseCtx.setExpenses(expenses);
      } catch (error) {
        setError("Tidak Bisa Mengambil Data");
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  if (error && !isFetchingState) {
    return <ErrorOverlay message={error}/>;
  }

  if (isFetchingState) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      fallbackText="Tidak ada pengeluaran dalam 7 hari terakhir."
      expensesPeriod="7 Hari Terakhir"
    />
  );
}
