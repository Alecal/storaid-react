import React from 'react';

function Tile(props) {
  return (
    <div className="tileCard">
      <h5 className="mb-3">{props.title}</h5>
      <p>
        {props.children}
      </p>
    </div>
  );
}

export default Tile;