import React, { ChangeEvent } from "react";
import search from "../../assets/search.svg";
import { useDispatch } from "react-redux";
import { searchStack } from "../../slices/stacksSlice";

/**
Searchbar component
@returns {JSX.Element} Searchbar component
*/

const Searchbar: React.FC = () => {
  const dispatch = useDispatch();
  /**
    Handles search input change
    @param {ChangeEvent<HTMLInputElement>} e - Input change event object
    @returns {void}
    */
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(searchStack(value));
  };
  return (
    <div className="input-container">
      <img className="input-container__searchicon" src={search} alt="search" />
      <input
        type="text"
        onChange={handleSearch}
        className="input-container__searchinput"
        placeholder="Search by Name or ID..."
      />
    </div>
  );
};

export default Searchbar;
