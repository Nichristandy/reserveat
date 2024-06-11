import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { fetchUserStatistic } from "../../DatabaseDummy/api";
import { useEffect, useState } from "react";

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "customer",
        data: [10, 30, 40, 80, 60, 30, 90],
        fill: true,
        backgroundColor: "rgba(44, 106, 132, 0.5)",
        borderColor: "rgba(44, 106, 132, 1)",
      },
    ],
  });

  useEffect(() => {
    const loadUserStatistic = async () => {
      try {
        const data = await fetchUserStatistic();

        // Assuming the data received is an array of user statistics for each day
        setChartData((prevState) => ({
          ...prevState,
          datasets: [
            {
              ...prevState.datasets[0],
              data: data.statistics,
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching user statistics:", error);
      }
    };

    loadUserStatistic();
  }, []);

  return (
    <>
      <Line data={chartData} />
    </>
  );
};

export default LineChart;
