import React from "react";

const GifList = props => {
  return (
    <ul>
      {props.gifs.map(gif => (
        <li>
          <img key={gif.id} src={gif.images.original.url} alt={gif.id} />
        </li>
      ))}
    </ul>
  );
};

export default GifList;
