const currentDate = new Date();
const dateDiv = document.querySelectorAll(".date");
const insertDate = () => {
  // for (let x = 0; x < dateDiv.length; x++) {
  //   dateDiv[x].innerHTML = currentDate.toLocaleDateString();
  // }
  dateDiv.forEach((date) => {
    date.innerHTML = currentDate.toLocaleDateString();
  });
};

insertDate();

const timeDiv = document.querySelectorAll(".activity-time");

const insertRandomTime = () => {
  timeDiv.forEach((time) => {
    const random = Math.floor(Math.random() * 30);

    if (random < 24) {
      time.innerHTML = `
        ${random} hours ago
      `;
    } else {
      time.innerHTML = "1 day ago";
    }
  });
};

insertRandomTime();

const data = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 75, 100],
      backgroundColor: ["#766faf", "#53be53", "#4ac6ff"],
      hoverOffset: 4,
    },
  ],
};

let trafficChartMobile = document
  .getElementById("mobile-chart")
  .getContext("2d");
let config = new Chart(trafficChartMobile, {
  type: "doughnut",
  data: data,
  clip: { left: 5, top: false, right: -2, bottom: 0 },
});

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const labels = Utils.months({ count: 7 });
const data2 = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: "Dataset 2",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
  ],
};
