// Define types
type CardData = {
  title: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
  comparison: string;
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

export type { Transaction, SavingPlan, CardData };
