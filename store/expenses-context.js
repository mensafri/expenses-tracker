import { createContext, useReducer } from "react";

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
  {
    id: "e6",
    description: "Sepasan Sepatu",
    amount: 900000,
    date: new Date("2023-12-19"),
  },
  {
    id: "e7",
    description: "Sepasang Sepatu 2",
    amount: 505000,
    date: new Date("2023-10-19"),
  },
  {
    id: "e8",
    description: "Sepasang Baju 2",
    amount: 20300,
    date: new Date("2023-01-19"),
  },
  {
    id: "e9",
    description: "Sepasang Celana 2",
    amount: 20000,
    date: new Date("2023-01-10"),
  },
  {
    id: "e10",
    description: "Baju 2",
    amount: 30000,
    date: new Date("2023-01-9"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
