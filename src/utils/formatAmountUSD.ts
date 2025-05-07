export function formatAmountUSD(amount: number): string {
  return (
    "$ " +
    amount.toLocaleString("en-US", {
      currency: "USD",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
  );
}
