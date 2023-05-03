import { useState } from "react";

interface CustomAlertProps {
  name: string;
}

function CustomAlert({ name }: CustomAlertProps) {
  const [show, setShow] = useState(true);

  function handleClose() {
    setShow(false);
  }

  if (!show) {
    return null;
  }

  return (
    <div className="w-[350px] h-[250px]">
      <p>{name}</p>
      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
}

export default CustomAlert;
