import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white bg-blue-500"
    : "text-[#adb7be] border-slate-600";
  return (
    <div>
      <button
        className={`${buttonStyle} rounded-full border-2 border-slate-600 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
