# Promineo Week  Homework

This is my homework for week 9 of the Promineo Front End Development Bootcamp. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

Coding Steps:
	•	Create a new website using HTML and Bootstrap. The website must include the following:
	•	At least 2 pages.
	•	A Bootstrap navbar, table, and form.
	•	Bootstrap grid used throughout to format elements
	•	Elements should stack vertically when the window is small

### Links
- Live Site URL: [Live Site On GitHub Pages](https://barnettet31.github.io/promineo-week-9/)

## My process
First I started with a picture of what I wanted the page structure to look like. Here's a picture of that: 

![](./design.jpg)

Then I layed out the basic HTML. Honestly this project was pretty easy again so I decided to add some fancy JS plugins as well as a special challenge for myself. 

So behold I have created a mortgage tracker that also uses a line graph to map out data for you over time! 

Oh also, you know I couldn't stop there! I have a serious problem. I added Jest for testing AND added typescript for type safety. 

Ya boi doesn't know how to take it easy y'all! 

### What I learned
I learned how to use ChartJS in this project! Here's how I implemented that! 





```js
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
  

```





## Author

- Twitter - [@barnett_travis5](https://twitter.com/barnett_travis5)
- LinkedIn - [@travis-barnette-ba7987237](https://www.linkedin.com/in/travis-barnette-ba7987237/)