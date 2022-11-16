import { createMyChart } from "./modules/chart_module";

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


myMortgageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const data = Object.fromEntries(formData);
  const TOTAL_NUMBER_OF_MONTHS = Number(data.loanTerm) * 12;
  const MONTHLY_INTEREST_RATE = Number(data.interestRate) / 100 / 12;
  const PRINCIPAL = Number(data.loanAmount) - Number(data.downPayment);
  let remainingPrincipal = PRINCIPAL;
  const MONTHLY_PAYMENT = PRINCIPAL * (MONTHLY_INTEREST_RATE * (1 + MONTHLY_INTEREST_RATE) ** TOTAL_NUMBER_OF_MONTHS) / ((1 + MONTHLY_INTEREST_RATE) ** TOTAL_NUMBER_OF_MONTHS - 1);
  const mortgageData = Array.from({ length: TOTAL_NUMBER_OF_MONTHS }, (_, i) => {
    const year = Number(data.startYear) + Math.floor(i / 12);
    const month = i % 12;
    
    const interest = remainingPrincipal * MONTHLY_INTEREST_RATE;
    const principal = MONTHLY_PAYMENT - interest;
  
     remainingPrincipal = remainingPrincipal - principal;
    return {
      year,
      month,
      interest,
      principal,
      remainingPrincipal,
    };
  }
);
console.table(mortgageData)
  
  createMyChart(ctx, mortgageData);
});

