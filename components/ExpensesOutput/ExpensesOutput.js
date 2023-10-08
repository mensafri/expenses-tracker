import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "Sepasan Sepatu",
      amount: 900000,
      date: new Date("2023-12-19"),
    },
    {
      id: "e2",
      description: "Sepasang Sepatu 2",
      amount: 505000,
      date: new Date("2023-10-19"),
    },
    {
      id: "e3",
      description: "Sepasang Baju 2",
      amount: 20300,
      date: new Date("2023-01-19"),
    },
    {
      id: "e4",
      description: "Sepasang Celana 2",
      amount: 20000,
      date: new Date("2023-01-10"),
    },
    {
      id: "e5",
      description: "Baju 2",
      amount: 30000,
      date: new Date("2023-01-9"),
    },
  ];

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
