import React, { useState } from "react";
const Checkbox: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className={`checkbox ${checked ? "checked" : ""}`}>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
      <svg
        width="25"
        height="17"
        viewBox="0 0 25 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49111 16.6661L0.366101 9.25709C-0.122034 8.81197 -0.122034 8.09026 0.366101 7.64509L2.13383 6.03309C2.62196 5.58793 3.41347 5.58793 3.9016 6.03309L9.375 11.0241L21.0984 0.33384C21.5865 -0.11128 22.378 -0.11128 22.8662 0.33384L24.6339 1.94584C25.122 2.39096 25.122 3.11267 24.6339 3.55784L10.2589 16.6662C9.7707 17.1113 8.97925 17.1113 8.49111 16.6661Z"
          fill={checked ? "white" : "#433E99"}
        />
      </svg>
    </div>
  );
};

export default Checkbox;
