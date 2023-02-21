import React, { useEffect, useState } from "react";

interface FilterIconProps {
  handleClick: () => void;
}

const FilterIcon: React.FC<FilterIconProps> = ({ handleClick }) => {
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
      data-testid="add"
      className="add"
      viewBox="0 0 30 30"
      onMouseEnter={() => setStarted(true)}
      onMouseLeave={() => setStarted(false)}
      onClick={() => handleClick()}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad2" x1="50%" y1="100%" x2="0%" y2="0%">
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
      <path d="M15 0C6.71371 0 0 6.71371 0 15C0 23.2863 6.71371 30 15 30C23.2863 30 30 23.2863 30 15C30 6.71371 23.2863 0 15 0ZM23.7097 16.6935C23.7097 17.0927 23.3831 17.4194 22.9839 17.4194H17.4194V22.9839C17.4194 23.3831 17.0927 23.7097 16.6935 23.7097H13.3065C12.9073 23.7097 12.5806 23.3831 12.5806 22.9839V17.4194H7.01613C6.61694 17.4194 6.29032 17.0927 6.29032 16.6935V13.3065C6.29032 12.9073 6.61694 12.5806 7.01613 12.5806H12.5806V7.01613C12.5806 6.61694 12.9073 6.29032 13.3065 6.29032H16.6935C17.0927 6.29032 17.4194 6.61694 17.4194 7.01613V12.5806H22.9839C23.3831 12.5806 23.7097 12.9073 23.7097 13.3065V16.6935Z" />
    </svg>
  );
};

export default FilterIcon;
