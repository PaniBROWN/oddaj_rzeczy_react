import React from "react";

function ThreeColums() {
  return (
    <div className="three-column-container">
      <div className="column">
        <p className="number">5</p>
        <p className="title">ODDANYCH WORKÓW</p>
        <p className="descr">  
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
          pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
          malesuada ultricies. Curabitur et ligula.
        </p>
      </div>
      <div className="column">
        <p className="number">10</p>
        <p className="title">WSPARTYCH ORGANIZACJI</p>
        <p className="descr">
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
          pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
          malesuada ultricies. Curabitur et ligula.
        </p>
      </div>
      <div className="column">
        <p className="number">15</p>
        <p className="title">ZORGANIZOWANYCH ZBIÓREK</p>
        <p className="descr">
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
          pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
          malesuada ultricies. Curabitur et ligula.
        </p>
      </div>
    </div>
  );
}

export default ThreeColums;
