import TimeGraph from "./TimeGraph";
import EfficiencyGraph from "./EfficiencyGraph";

interface ResultsModalProps {
  elapsedTime: number | null;
  wpm: number | null;
  efficiency: number | null;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  setIsHidden: React.Dispatch<React.SetStateAction<string>>;
}

const ResultsModal = ({
  elapsedTime,
  wpm,
  efficiency,
  setShowResults,
  setIsHidden,
}: ResultsModalProps) => {
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  const handleExit = () => {
    setShowResults(false);
    setIsHidden("");
  };
  return (
    <div className="w-full h-full absolute z-100">
      <div className="w-full h-full border bg-[#000000de] flex flex-col items-center">
        <div>
          <h3 className="py-2 text-lg font-bold">
            Time: {minutes} min {seconds} sec{" "}
          </h3>
          <h3 className="py-2 text-lg font-bold "> Wpm : {wpm} </h3>
          <h3 className="py-2 text-lg font-bold">
            {" "}
            Efficiency : {efficiency}{" "}
          </h3>
        </div>
        <div className="w-full gap-12 h-[80%] flex justify-center items-center">
          <TimeGraph />
          <EfficiencyGraph />
        </div>
        <div className="py-4">
          <button
            onClick={handleExit}
            className="w-[100px] px-4 py-2 bg-red-500 rounded-xl"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;
