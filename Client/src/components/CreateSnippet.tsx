import { useState, useEffect } from "react";
import axios from "axios";

interface CreateSnippetProps {
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateSnippet = ({ setShowCreateModal }: CreateSnippetProps) => {
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("javascript");
  const [difficulty, setDifficulty] = useState("easy");

  const data = {
    body,
    category,
    difficulty,
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setShowCreateModal(false);
    try {
      const response = await axios.post(
        "http://localhost:8080/admin-snippet/",
        data
      );
      console.log(response.data);
      // You can perform any other actions with the response here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute lg:left-5 border w-full h-full flex items-center justify-center bg-[#0F0F0F] mx-auto">
      <div className="w-[60%] h-[70%] bg-gray my-auto ">
        <form
          onSubmit={handleSubmit}
          className="flex [#c4c8cc33] flex-col gap-10"
        >
          <div className="">
            <label
              className="block text-gray-400 font-bold mb-2"
              htmlFor="code-snippet"
            >
              Code Snippet
            </label>
            <textarea
              className="w-full bg-[#c4c8cc33] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="code-snippet"
              name="code-snippet"
              rows={6}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <label
              className="block text-gray-400 font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              className="w-full bg-[#c4c8cc33] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="category"
              name="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="javascript">javaScript</option>
              <option value="typescript">typeScript</option>
              <option value="python">python</option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-400 font-bold mb-2"
              htmlFor="difficulty"
            >
              Difficulty
            </label>
            <select
              className="w-full px-3 bg-[#c4c8cc33] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="difficulty"
              name="difficulty"
              onChange={(e) => {
                setDifficulty(e.target.value);
              }}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="px-8 py-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippet;
