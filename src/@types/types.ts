// Define types
type OverviewCardType = {
  id: number;
  title: string;
  amount: number;
  percentage: number;
  comparison: string;
  iconUrl: string;
};

type SavingPlan = {
  title: string;
  targetDate: string;
  currentAmount: number;
  targetAmount: number;
  percentage: number;
  type: "primary" | "secondary" | "success" | string;
};

type Transaction = {
  id: number;
  name: string;
  date: string;
  amount: number;
  isExpense: boolean;
  status: "Completed" | "Pending" | "Failed" | string;
  icon: string;
};

export type { Transaction, SavingPlan, OverviewCardType };
