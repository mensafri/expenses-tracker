import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpenses() {
  const expenseCtx = useContext(ExpenseContext);

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
