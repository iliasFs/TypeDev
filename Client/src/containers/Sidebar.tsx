import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import { Editor } from "@monaco-editor/react";
import ResultsModal from "../components/ResultsModal";
import CreateSnippet from "../components/CreateSnippet";
import { categories } from "../lib/constants";
import axios from "axios";

const Sidebar = () => {
  const [value, setValue] = useState("");
  const [bckSpace, setBckSpace] = useState<number>(0);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [wpm, setWpm] = useState<number>(0);
  const [efficiency, setEfficiency] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<string>("");
  const [errorCount, setErrorCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Javascript");
  const [data, setData] = useState<string>("");
  const [showCategories, setShowCategories] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/admin-snippet/${selectedCategory.toLowerCase()}`
      )
      .then((response) => {
        setData(
          response.data[Math.floor(Math.random() * response.data.length)].body
        );
      });
  }, [selectedCategory]);

  useEffect(() => {
    if (startTime && endTime) {
      setElapsedTime(endTime - startTime);
    }
  }, [startTime, endTime]);

  function handleKeyDown(event: { key: string; preventDefault: () => void }) {
    if (event.key === "Enter") {
      setValue(value + "\n  ");
      event.preventDefault();
    }
    if (event.key === "Backspace") {
      setBckSpace((prev) => prev + 1);
    }
  }

  const handleStart = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (textAreaRef.current) {
      textAreaRef.current?.removeAttribute("disabled");
      textAreaRef.current?.focus();
    }

    setStartTime(Date.now());
    setShowCategories(false);
  };

  const handleEvaluate = () => {
    if (startTime) {
      setEndTime(Date.now());
    }
    setShowCategories(false);
    setShowResults(true);

    setIsHidden("hidden");

    const timeInMinutes = elapsedTime / 60000;

    const wordCount = value.trim().split(/\s+/).length;

    if (timeInMinutes === 0) {
      setWpm(wordCount);
    } else {
      setWpm(Math.floor(Math.abs(wordCount / timeInMinutes)));
    }

    const typedValue = value.trim();
    const typedWords = typedValue.split(/\s+/);
    const sampleWords = data.split(/\s+/);
    let errors = 0;

    for (let i = 0; i < typedWords.length; i++) {
      if (typedWords[i] !== sampleWords[i]) {
        errors++;
      }
      const errorCount = errors + Math.floor(bckSpace / 3);
      const errorRate = wordCount > 0 ? (errorCount / wordCount) * 100 : 0;
      setEfficiency(100 - errorRate);
    }
  };

  const handleReset = () => {
    setWpm(0);
    setValue("");
    setBckSpace(0);
    setElapsedTime(0);
    setEfficiency(0);
    setSelectedCategory("javascript");
    setStartTime(0);
    setEndTime(0);
    setShowCategories(true);
  };

  const handleRegen = () => {
    return axios
      .get(
        `http://localhost:8080/admin-snippet/${selectedCategory.toLowerCase()}`
      )
      .then((response) => {
        setData(
          response.data[Math.floor(Math.random() * response.data.length)].body
        );
      });
  };

  const handleCreate = () => {
    setIsHidden("hidden");
    setShowCategories(false);
    setShowCreateModal(true);
  };

  return (
    <div className=" max-w-[800px] lg:max-w-[1350px] flex w-full h-full relative">
      {showCreateModal ? (
        <CreateSnippet
          setShowCreateModal={setShowCreateModal}
          setIsHidden={setIsHidden}
          setShowCategories={setShowCategories}
        />
      ) : null}
      {showResults ? (
        <ResultsModal
          elapsedTime={elapsedTime}
          wpm={wpm}
          efficiency={efficiency}
          setShowResults={setShowResults}
          setIsHidden={setIsHidden}
          handleReset={handleReset}
          errorCount={errorCount}
          wordCount={wordCount}
        />
      ) : null}
      {showCategories && (
        <div className="w-[150px] px-4 border-r border-[#9c1d3476] flex flex-col gap-16">
          {categories.map((category, index) => (
            <div key={index}>
              <Button
                name={category.name}
                handleCategoryClick={() => setSelectedCategory(category.name)}
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-20 text-center mx-10">
        <button
          className="w-[100px] px-4 py-2 bg-green-600 rounded-xl"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          type="button"
          className="w-[100px] px-4 py-2 bg-[#3C6181] rounded-xl"
          onClick={handleEvaluate}
        >
          Evaluate
        </button>
        <button
          type="button"
          className="w-[100px] px-4 py-2 bg-[#828587] rounded-xl"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="w-[100px] px-4 py-2 bg-[#a46b00] rounded-xl"
          onClick={handleRegen}
        >
          Regen
        </button>
        <button
          type="button"
          className="w-[100px] px-4 py-2 bg-[#3d1d4a] rounded-xl"
          onClick={handleCreate}
        >
          Create
        </button>
        <button
          type="button"
          className="w-[100px] px-4 py-2 bg-[#800000] rounded-xl"
          onClick={(): void => {
            console.log("empty");
          }}
        >
          History
        </button>
      </div>

      <div className={`min-w-[80%] min-h-full relative ${isHidden}`}>
        <Editor
          className=""
          height="100%"
          width="100%"
          theme="vs-dark"
          defaultLanguage={selectedCategory.toLowerCase()}
          value={data}
          options={{
            wordWrap: "on",
            minimap: { enabled: false },
            renderValidationDecorations: "off",
          }}
        />
        <div className="min-w-[100%] min-h-[100%] absolute -top-[0.5px] left-[62px]">
          <textarea
            className="bg-transparent text-[14px] font-fira w-[92%] min-h-[100%] leading-[18px]"
            rows={35}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            ref={textAreaRef}
            disabled
          />
        </div>
      </div>
      {/* <div>{snipet}</div> */}
    </div>
  );
};
export default Sidebar;
