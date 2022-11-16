import { createMyChart } from "./modules/chart_module";
const myLoanPaymentHolder = document.querySelector('#monthlyPayment');
const myTotalPayment = document.querySelector('#totalPayment');
const myTotalInterest = document.querySelector('#totalInterest');
const ctx = document.getElementById("myChart") as HTMLCanvasElement;
const myMortgageForm = document.getElementById(
  "mortgageForm"
) as HTMLFormElement;
interface MortgageData {
  loanAmount: number;
  downPayment: number;
  loanTerm: number;
  startYear: number;
  interestRate: number;
}
const setLoanData = function(monthly:number, total:number, interest:number) {
  myLoanPaymentHolder.textContent = "$" + monthly.toFixed(2);
  myTotalPayment.textContent = "$" + total.toFixed(2);
  myTotalInterest.textContent = "$" + interest.toFixed(2);
}
const everyNthElement = function<T>(arr:T[], n:number):T[]{
  return arr.filter((_,i)=>i%n===0);
}
myMortgageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const data = Object.fromEntries(formData);
  const TOTAL_NUMBER_OF_MONTHS = Number(data.loanTerm) * 12;
  const MONTHLY_INTEREST_RATE = Number(data.interestRate) / 100 / 12;
  const PRINCIPAL = Number(data.loanAmount) - Number(data.downPayment);
  let remainingPrincipal = PRINCIPAL;
  let totalInterest = 0;
  const MONTHLY_PAYMENT = PRINCIPAL * (MONTHLY_INTEREST_RATE * (1 + MONTHLY_INTEREST_RATE) ** TOTAL_NUMBER_OF_MONTHS) / ((1 + MONTHLY_INTEREST_RATE) ** TOTAL_NUMBER_OF_MONTHS - 1);
  const mortgageData = Array.from({ length: TOTAL_NUMBER_OF_MONTHS }, (_, i) => {
    const year = Number(data.startYear) + Math.floor(i / 12);
    const month = i % 12;
    
    const interest = remainingPrincipal * MONTHLY_INTEREST_RATE;
    const monthlyPrincipal = MONTHLY_PAYMENT - interest;
    totalInterest += interest;
     remainingPrincipal = remainingPrincipal - monthlyPrincipal;
    return {
      year,
      month,
      interest,
      monthlyPrincipal,
      remainingPrincipal,
    };
  }
);
  setLoanData(MONTHLY_PAYMENT,Number(data.loanAmount), totalInterest);
  const dataToSendToChart = [...everyNthElement(mortgageData, 12).filter(data=>data.year!=mortgageData[mortgageData.length-1].year), mortgageData[mortgageData.length-1]];
  createMyChart(ctx, dataToSendToChart , Number(data.loanTerm));
});

