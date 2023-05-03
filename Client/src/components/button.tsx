import React from "react";

type buttonProps = {
  name: string;
  handleCategoryClick: () => void;
};
const Button = ({ name, handleCategoryClick }: buttonProps) => {
  return (
    <div className="min-w-[60px]">
      <button
        type="button"
        onClick={handleCategoryClick}
        className="w-full bg-[#292929] py-2 px-4 rounded-xl text-[#9c1d34] font-bold"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
