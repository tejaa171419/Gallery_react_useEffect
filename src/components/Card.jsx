import React from "react";

const Card = ({ elem }) => {
  return (
    <div>
      <a href={elem.url}>
        <div className="h-70 w-70 overflow-hidden bg-white rounded-xl ">
          <img
            className="h-full w-full object-cover"
            src={elem.download_url}
            alt=""
          />
        </div>
        <h3 className="font-bold text-lg">{elem.author}</h3>
      </a>
    </div>
  );
};

export default Card;
