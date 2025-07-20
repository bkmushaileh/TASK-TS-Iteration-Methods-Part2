// don't edit or remove the type declaration
type TransactionType = "income" | "expense";
type Transaction = [TransactionType, number];

/**
 * You can use this array to
 * manually test your functions
 */
const transactions: Transaction[] = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// `filterIncomeTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Returns a new array containing only the income transactions.
// example:
// filterIncomeTransactions(transactions); // => [["income", 1000], ["income", 1500], ["income", 700]]
function filterIncomeTransactions(transactions: Transaction[]): Transaction[] {
  // write your code here...
  const newFilterIncomeTransactions = transactions.filter(
    (transaction) => transaction[0] === "income"
  );
  return newFilterIncomeTransactions; // replace empty array with what you see is fit
}
console.log(filterIncomeTransactions(transactions));
// `filterExpenseTransactions` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - Return a new array containing only the expense transactions.
// example:
// filterExpenseTransactions(transactions); // => [["expense", 500], ["expense", 300]]
function filterExpenseTransactions(transactions: Transaction[]): Transaction[] {
  const newFilterExpenseTransactions = transactions.filter(
    (transaction) => transaction[0] === "expense"
  );
  return newFilterExpenseTransactions; // replace empty array with what you see is fit
}
console.log(filterExpenseTransactions(transactions));

// `calculateTotalIncome` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total income and returns it.
// example:
// calculateTotalIncome(transactions); // => 3200  (1000 + 1500 + 700)
function calculateTotalIncome(transactions: Transaction[]): number {
  // write your code here...
  const newTotalIncome = transactions
    .filter((transaction) => transaction[0] === "income")
    .reduce((total, transaction) => total + transaction[1], 0);
  return newTotalIncome; // replace -1 with what you see is fit
}
console.log(calculateTotalIncome(transactions));

// `calculateTotalExpenses` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the total expense and returns it.
// example:
// calculateTotalExpenses(transactions); // => 800  (500 + 300)
function calculateTotalExpenses(transactions: Transaction[]): number {
  // write your code here...
  const newCalculateExpense = transactions
    .filter((transaction) => transaction[0] === "expense")
    .reduce((total, transacion) => total + transacion[1], 0);

  return newCalculateExpense; // replace -1 with what you see is fit
}
console.log(calculateTotalExpenses(transactions));

// `calculateNetTotal` function that:
// - Accepts a "transactions" parameter of type "Transaction[]".
// - calculates the net total (total income - total expenses) and returns it.
// example:
// calculateNetTotal(transactions); // => 2400  (3200 - 800)
function calculateNetTotal(transactions: Transaction[]): number {
  // write your code here...
  const newTotalIncome = transactions
    .filter((transaction) => transaction[0] === "income")
    .reduce((total, transaction) => total + transaction[1], 0);
  const newCalculateExpense = transactions
    .filter((transaction) => transaction[0] === "expense")
    .reduce((total, transacion) => total + transacion[1], 0);
  const netTotal = newTotalIncome - newCalculateExpense;

  return netTotal; // replace -1 with what you see is fit
}
console.log(calculateNetTotal(transactions));
// `filterSignificantTransactions` function that:
// - Accepts 2 parameters:
// - a "transactions" parameter of type "Transaction[]".
// - a "threshold" parameter of type "number"
// - identifies and creates a new array with transactions (both incomes and expenses) above or equal to "threshold".
// example:
// filterSignificantTransactions(transactions, 1000); // =>  [["income", 1000], ["income", 1500]]
function filterSignificantTransactions(
  transactions: Transaction[],
  threshold: number
): Transaction[] {
  // write your code here...
  const newFilter = transactions.filter(
    (transaction) => transaction[1] >= threshold
  );

  return newFilter; // replace empty array with what you see is fit
}
console.log(filterSignificantTransactions(transactions, 1000));

export {
  Transaction,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
