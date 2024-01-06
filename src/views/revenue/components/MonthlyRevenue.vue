<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const chartData = ref();
const chartOptions = ref();

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

onMounted(async () => {
  // Fetch data from your API using Axios
  try {
    const response = await axios.get(
      "http://localhost/revenue/monthly_revenue.php"
    );
    const revenueData = response.data; // Assuming your API returns an array of revenue data for each month
    chartData.value = setChartData(revenueData);
    chartOptions.value = setChartOptions();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <div class="bg-red-200 card">
    <Chart
      type="bar"
      :data="chartData"
      :options="chartOptions"
      class="flex justify-content-center bg-white p-2 h-full align-items-center"
      style="width: 32rem"
    />
  </div>
</template>

<style scoped>
.selected-item {
  background-color: white;
  font-weight: 600;
  border-bottom: none;
}
.deselect-item {
  background-color: rgb(248, 248, 248);
  color: var(--surface-800);
}

.deselect-item:hover {
  background-color: var(--surface-200);
  color: var(--blue-600);
}
</style>
