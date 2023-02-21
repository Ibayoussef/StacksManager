import React, { useEffect, useState } from "react";

interface FilterIconProps {
  setSidebarActive: (param: boolean) => void;
}

const FilterIcon: React.FC<FilterIconProps> = ({ setSidebarActive }) => {
  const [animation, setAnimation] = useState<number>(100);
  const [started, setStarted] = useState<boolean>(false);
  const [reverse, setReverse] = useState<boolean>(false);
  useEffect(() => {
    if (started && !reverse) {
      setTimeout(() => setAnimation(animation - 5), 70);
      if (animation === 0) {
        setReverse(true);
      }
    }
    if (started && reverse) {
      setTimeout(() => setAnimation(animation + 5), 70);
      if (animation > 101) {
        setReverse(false);
      }
    }
    if (!started) {
      setAnimation(100);
    }
  }, [animation, started]);
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      data-testid="filter"
      onMouseEnter={() => setStarted(true)}
      onMouseLeave={() => setStarted(false)}
      onClick={() => setSidebarActive(true)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="50%" y1="100%" x2="0%" y2="0%">
          <stop
            offset={`${animation}%`}
            style={{ stopColor: "#433E99", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(143, 89, 157, 0.2)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M28.5923 0H1.40788C0.158783 0 -0.47151 1.51559 0.413548 2.40064L11.25 13.2387V25.3125C11.25 25.7714 11.4739 26.2014 11.8498 26.4646L16.5373 29.7447C17.4621 30.392 18.75 29.7359 18.75 28.5926V13.2387L29.5867 2.40064C30.47 1.51734 29.844 0 28.5923 0Z" />
    </svg>
  );
};

export default FilterIcon;
