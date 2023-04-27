import React from "react";
import Button from "../components/button";

const Sidebar = () => {
  return (
    <div className="w-[150px] flex flex-col gap-10">
      <Button name={"Javascript"} />
      <Button name={"Typescript"} />
      <Button name={"Python"} />
      <Button name={"Solidity"} />
      <Button name={"Swift"} />
      <Button name={"C#"} />
      <Button name={"C++"} />
    </div>
  );
};

export default Sidebar;
