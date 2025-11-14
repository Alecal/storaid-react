import React from 'react';

function Tile(props) {
  return (
    <div className='h-full w-full transition duration-200 transform hover:-translate-y-1 hover:scale-105'>

      <div className="tileCard">
        <h5 className="mb-3">{props.title}</h5>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default Tile;