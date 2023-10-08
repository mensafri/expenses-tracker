import { FlatList, Text } from "react-native";
import ExpensesItem from "./ExpensesItem";

function renderExpensesItem(itemData) {
  return <ExpensesItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  );
}
