import { CardData } from "../@types/types";

// Mock data for Overview box
// Mock data for balance card
const balanceData: CardData = {
  title: "Your Balance",
  amount: "$28,891.138",
  percentage: "10",
  isPositive: true,
  comparison: "compared with last month",
};

// Mock data for saving card
const savingData: CardData = {
  title: "Saving",
  amount: "$1,050.44",
  percentage: "10",
  isPositive: false,
  comparison: "compared with last month",
};

// Mock data for expense card
const expenseData: CardData = {
  title: "Expenses",
  amount: "$200.31",
  percentage: "2",
  isPositive: true,
  comparison: "compared with last month",
};

// Mock data for income card
const incomeData: CardData = {
  title: "Incomes",
  amount: "$21,121.0",
  percentage: "8",
  isPositive: true,
  comparison: "compared with last month",
};

export const overviewBoxData = [
  balanceData,
  savingData,
  expenseData,
  incomeData,
];
