let grossIncome: number = 50000;
let taxRate: number = 0.07;
let taxpaid: number = grossIncome * taxRate;
let netIncome: number = grossIncome - taxpaid;

console.log("--------Tax Calculation Report-------");
console.log("Gross Income: %d", grossIncome);
console.log("Tax Rate: %d%%", taxRate * 100);
console.log("Tax Paid: %d", taxpaid);
console.log("Net Income: %d", netIncome);
console.log("-------------------------------------");