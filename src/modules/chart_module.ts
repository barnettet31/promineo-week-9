import { Chart } from "chart.js/auto";

type ChartData = {
  year: number;
  month: number;
  interest: number;
  monthlyPrincipal: number;
  remainingPrincipal: number;
};

export const createMyChart = (ctx: HTMLCanvasElement, dta: ChartData[], loanTerm:number ) =>{
  if(Chart.getChart(ctx)){
    Chart.getChart(ctx).destroy();
  }
return new Chart(ctx, {
  type: "line",

  data: {
    labels: dta.map((d) => d.year),

    datasets: [
      {
        label: "Remaining Balance",
        data: dta.map((d) => d.remainingPrincipal),
        borderColor: "#0d6efd",
        backgroundColor:"#0d6efd",
        type: "line",
        order: 0,
      },
      {
        label: "Principal",
        data: dta.map((d) => d.monthlyPrincipal),
        borderColor: "#074297",
        backgroundColor: "#074297",
        type: "bar",
        yAxisID: "payments",
      },
      {
        label: "Interest",
        data: dta.map((d) => d.interest),
        backgroundColor: "#03214b",
        borderColor: "#03214b",
        type: "bar",
        yAxisID: "payments",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Year",
        },
        ticks: {
          stepSize: loanTerm,
        },
      },
      y: {
        beginAtZero: true,
        stacked: false,
        title: {
          display: true,
          text: "Balance",
        },
      },
      payments: {
        min: 0,
        stacked: true,
        beginAtZero: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Monthly Payments",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Mortgage Over Years",
      },
      
    },
    interaction:{
      mode: 'index',
    }
  },
});
}
  
