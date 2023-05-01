import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Efficiency",
    },
  },
};

const labels = ["Current", "Personal Average", "Overall Users Average"];

const EfficiencyGraph = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Percentage",
        data: [20, 60, 90, 100],
        backgroundColor: "#923423",
      },
    ],
  };
  return (
    <div className="w-[40%] z-999">
      <Bar
        options={options}
        data={data}
        style={{ width: "450px", height: "450px" }}
      />
    </div>
  );
};

export default EfficiencyGraph;
