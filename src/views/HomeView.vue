<!-- import { ref, onMounted } from "vue";
import axios from "axios";

const chartDataDay = ref();
const chartOptionsDay = ref();

const chartDataMonth = ref();
const chartOptionsMonth = ref();

const setChartData = (revenueData) => {
  return {
    datasets: [
      {
        label: "Income",
        data: revenueData,
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
console.log(chartDataDay);
onMounted(async () => {
  // Fetch data from your API using Axios
  try {
    const response = await axios.get(
      "http://localhost/revenue/daily_revenue.php"
    );
    const revenueData = response.data; // Assuming your API returns an array of revenue data for each month
    chartDataDay.value = setChartData(revenueData);
    chartOptionsDay.value = setChartOptions();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  //   chị cảm thấy mount lạ lạ nó ghi sao day à? mount đó tháng tiếng anh ghi sao month
  try {
    // thay link đi
    const response = await axios.get(
      "http://localhost/revenue/monthly_revenue.php"
    );
    const revenueData = response.data; // Assuming your API returns an array of revenue data for each month
    chartDataMonth.value = setChartData(revenueData);
    chartOptionsMonth.value = setChartOptions();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}); -->

<!--  <Chart
          type="bar"
          :data="chartDataDay"
          :options="chartOptionsDay"
          class="flex justify-content-center bg-white p-2 h-full align-items-center"
        /> -->
