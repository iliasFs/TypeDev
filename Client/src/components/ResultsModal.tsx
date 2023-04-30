import React from "react";

interface ResultsModalProps {
  elapsedTime: number | null;
  tpm: number | null;
  efficiency: number | null;
}

const ResultsModal = ({ elapsedTime, tpm, efficiency }: ResultsModalProps) => {
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  return (
    <div className="w-full h-full absolute z-100 ">
      <div className="w-full h-full border ">
        <div>
          <h3>
            Time: {minutes} min {seconds} sec{" "}
          </h3>
          <h3> WPM :{tpm} </h3>
          <h3> Efficiency :{efficiency} </h3>
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;
