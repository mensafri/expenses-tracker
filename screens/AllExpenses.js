import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";

export default function AllExpenses() {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="Total" fallbackText="Tidak Ada Pengeluaran." />
  );
}
