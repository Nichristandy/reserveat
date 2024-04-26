import { Line } from "react-chartjs-2";
import "chart.js/auto";
const LineChart = () => {
  const data = {
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
  };
  return (
    <>
      <Line data={data} />
    </>
  );
};

export default LineChart;
