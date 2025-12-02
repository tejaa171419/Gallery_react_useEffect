import React from "react";

const Buttons = ({ setIndex, index, setUser }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1);
            setUser([]);
          }
        }}
        className="bg-red-400 text-sm cursor-pointer active:scale-50 px-4 py-2 h-10 rounded"
      >
        prev
      </button>
      {index}
      <button
        onClick={() => {
          setUser([]);
          setIndex(index + 1);
        }}
        className="bg-red-400 text-sm cursor-pointer active:scale-50 px-4 py-2 h-10 rounded "
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
