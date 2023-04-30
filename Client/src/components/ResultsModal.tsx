import TimeGraph from "./TimeGraph";
import EfficiencyGraph from "./EfficiencyGraph";

interface ResultsModalProps {
  elapsedTime: number | null;
  tpm: number | null;
  efficiency: number | null;
}

const ResultsModal = ({ elapsedTime, tpm, efficiency }: ResultsModalProps) => {
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  return (
    <div className="w-full h-full absolute z-100">
      <div className="w-full h-full border bg-[#000000de]">
        <div>
          <h3>
            Time: {minutes} min {seconds} sec{" "}
          </h3>
          <h3> WPM :{tpm} </h3>
          <h3> Efficiency :{efficiency} </h3>
        </div>
        <div className="w-full gap-12 h-[80%] flex justify-center items-center">
          <TimeGraph />
          <EfficiencyGraph />
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;
