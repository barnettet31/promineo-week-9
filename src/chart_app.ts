import { Chart } from "chart.js/auto";

type ChartData = {
    year: number;
    count: number;
}

export const createMyChart =(ctx:HTMLCanvasElement, dta:ChartData[])=> new Chart(ctx, {
  type: "bar",
  data: {
    labels: dta.map((d) => d.year),
    datasets: [
      {
        data: dta.map((d) => d.count),
        label: "Count by year",
      },
    ],
  },
});


