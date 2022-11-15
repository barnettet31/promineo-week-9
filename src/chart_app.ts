import { Chart } from "chart.js/auto";

const ctx = document.getElementById("myChart") as HTMLCanvasElement;
const dta = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const myChart = new Chart(ctx, {
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

export default myChart;
