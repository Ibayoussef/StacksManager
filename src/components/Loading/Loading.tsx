import React from "react";

interface LoadingProps {
  demo?: boolean;
}
const Loading: React.FC<LoadingProps> = ({ demo }) => {
  return (
    <div
      className="scene-container"
      data-testid="loading-container"
      style={{
        position: demo ? "relative" : "fixed",
        width: demo ? "500px" : "100%",
        maxHeight: demo ? "500px" : "100%",
      }}
    >
      <div
        className="scene"
        style={{
          position: demo ? "relative" : "fixed",
          width: demo ? "500px" : "",
        }}
      >
        <div className="plane">
          <div className="cube cube--0">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--0"></div>
          <div className="cube cube--1">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--1"></div>
          <div className="cube cube--2">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--2"></div>
          <div className="cube cube--3">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--3"></div>
          <div className="cube cube--4">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--4"></div>
          <div className="cube cube--5">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--5"></div>
          <div className="cube cube--6">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--6"></div>
          <div className="cube cube--7">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--7"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
