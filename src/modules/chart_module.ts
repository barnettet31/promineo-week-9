import { Chart } from "chart.js/auto";

type ChartData = {
  year: number;
  month: number;
  interest: number;
  principal: number;
  remainingPrincipal: number;
};

export const createMyChart = (ctx: HTMLCanvasElement, dta: ChartData[]) =>{
  if(Chart.getChart(ctx)){
    Chart.getChart(ctx).destroy();
  }
return new Chart(ctx, {
  type: "line",

  data: {
    labels: dta.map((d) => d.year),

    datasets: [
      {
        label: "Remaining Principal",
        data: dta.map((d) => d.remainingPrincipal),
        borderColor: "blue",
        type: "line",
        order: 0,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Mortgage Over Years",
      },
    },
  },
});
}
  
