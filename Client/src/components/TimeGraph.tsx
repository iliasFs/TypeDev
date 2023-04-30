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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Time Performance",
    },
  },
};

const labels = ["Current", "Personal Average", "Overall Users Average"];

export const data = {
  labels,
  datasets: [
    {
      label: "Minutes",
      data: [4, 5, 7, 10],
      backgroundColor: "blue",
      color: "white",
    },
  ],
};

const TimeGraph = () => {
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

export default TimeGraph;
