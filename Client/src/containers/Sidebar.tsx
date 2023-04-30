import { useState, useEffect, useRef } from "react";
import Button from "../components/button";
import { Editor } from "@monaco-editor/react";
import defaultVal from "../lib/constants";
import ResultsModal from "../components/ResultsModal";

const Sidebar = () => {
  const [value, setValue] = useState("");
  const [bckSpace, setBckSpace] = useState<number | null>(0);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [textAreaisDisabled, setTextAreaIsDisabled] = useState(true);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number | null>(0);
  const [tpm, SetTpm] = useState<number>(0);
  const [efficiency, setEfficiency] = useState<number>(0);

  interface ResultsModalProps {
    elapsedTime: number | null;
  }

  useEffect(() => {
    if (startTime && endTime) {
      setElapsedTime(endTime - startTime);
    }
  }, [startTime, endTime]);

  function handleKeyDown(event: { key: string; preventDefault: () => void }) {
    if (event.key === "Enter") {
      setValue(value + "\n    ");
      event.preventDefault();
    }
    if (event.key === "Backspace") {
      setBckSpace((prev) => prev + 1);
    }
  }
  console.log(value);
  console.log(bckSpace);

  const handleStart = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    setTextAreaIsDisabled(false);

    textAreaRef.current.focus();

    setStartTime(Date.now());
  };

  const handleEvaluate = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    if (startTime) {
      setEndTime(Date.now());
    }

    setShowResults(true);

    setValue("");

    if (elapsedTime) {
      SetTpm(value.length / (elapsedTime / 60000));
    }
  };

  const handleReset = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  console.log(defaultVal.length, value.length);
  return (
    
    <div className=" max-w-[800px] lg:max-w-[1350px] flex w-full h-full relative">
      {showResults ? (
          <ResultsModal
            elapsedTime={elapsedTime}
            tpm={tpm}
            efficiency={efficiency}
          />
        ) : null}
      <div className="w-[150px] p-4 border-r border-[#9c1d3476] flex flex-col gap-10">
        <Button name={"Javascript"} />
        <Button name={"Typescript"} />
        <Button name={"Python"} />
        <Button name={"Solidity"} />
        <Button name={"Swift"} />
        <Button name={"C#"} />
        <Button name={"C++"} />
      </div>
      <div className="flex flex-col gap-20 text-center mx-10">
        <button
          type="button"
          className="w-[100px] px-4 py-2 bg-green-600 rounded-xl"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          type="button"
          className="w-[100px] px-4 py-2 bg-[#416E93] rounded-xl"
          onClick={handleEvaluate}
        >
          Evaluate
        </button>
        <button
          type="button"
          className="w-[100px] px-4 py-2 bg-[#9C1D34] rounded-xl"
          onClick={handleReset}
        >
          Reset
        </button>
        
      </div>

      <div className="min-w-[70%] min-h-full relative">
        <Editor
          className=""
          height="100%"
          width="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={defaultVal}
        />
        <div className="min-w-[100%] min-h-[100%] absolute -top-[0.5px] left-[62px]">
          <textarea
            className="bg-transparent text-[14px] font-fira w-[80%] min-h-[100%] leading-[18px]"
            rows={35}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            ref={textAreaRef}
            disabled={textAreaisDisabled}
          />
        </div>
      </div>
      {/* <div>{snipet}</div> */}
    </div>
  );
};
export default Sidebar;
