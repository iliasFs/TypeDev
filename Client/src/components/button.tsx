import React from "react";

type buttonProps = {
  name: string;
};
const button = ({ name }: buttonProps) => {
  return (
    <div className="py-4 px-2">
      <button className="bg-[#9c1d34] py-1 px-2 rounded-xl">{name}</button>
    </div>
  );
};

export default button;
