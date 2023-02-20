import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, storeFilters } from "../../../slices/stacksSlice";
import { AppState } from "../../../Enums/AppState";

const DropdownInput: React.FC = () => {
  const dispatch = useDispatch();
  const { users, filters } = useSelector((state: AppState) => state.stacks);
  const { author } = filters;
  const [checked, setChecked] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getUsers());
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setChecked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [checked]);

  const handleSelect = (option: string) => {
    dispatch(storeFilters({ ...filters, author: option }));
    setChecked(false);
  };
  return (
    <div className="dropdowninput" data-testid="dropdown" ref={dropdownRef}>
      <div className="dropdown">
        <input
          type="checkbox"
          id="dropdown"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />

        <label className="dropdown__face">
          <div className="dropdown__text">
            {author ? author.slice(0, 6) : "Select an author"}
          </div>

          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items" data-testid="listbox">
          {users.map((user: string) => (
            <li key={user} onClick={() => handleSelect(user)}>
              {user.slice(0, 6)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownInput;
