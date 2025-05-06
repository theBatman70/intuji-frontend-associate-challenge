import { OverviewCardType } from "../@types/types";

const growthIconUrls = [
  "/assets/icons/export-green.svg",
  "/assets/icons/export-red.svg",
  "/assets/icons/export-yellow.svg",
  "/assets/icons/export-blue.svg",
];

// Mock data for Overview box
// Mock data for balance card
const balanceData: OverviewCardType = {
  id: 1,
  title: "Your Balance",
  amount: 28891.138,
  percentage: 10,
  comparison: "compared with last month",
  iconUrl: "/assets/icons/wallet.svg",
};

// Mock data for saving card
const savingData: OverviewCardType = {
  id: 2,
  title: "Saving",
  amount: 1050.44,
  percentage: 10,
  comparison: "compared with last month",
  iconUrl: "/assets/icons/save.svg",
};

// Mock data for expense card
const expenseData: OverviewCardType = {
  id: 3,
  title: "Expenses",
  amount: 200.31,
  percentage: 2,
  comparison: "compared with last month",
  iconUrl: "/assets/icons/direct-up.svg",
};

// Mock data for income card
const incomeData: OverviewCardType = {
  id: 4,
  title: "Incomes",
  amount: 21121.0,
  percentage: 8,
  comparison: "compared with last month",
  iconUrl: "/assets/icons/direct-down",
};

const overviewBoxData = [balanceData, savingData, expenseData, incomeData];

export { overviewBoxData, growthIconUrls };
