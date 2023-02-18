import React, { useState } from "react";
import { Flex } from "../Flex/Flex";

import filter from "../../assets/filter.svg";
import add from "../../assets/add.svg";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { ToastContainer, toast } from "react-toastify";
const Toolbar: React.FC = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const notify = () =>
    toast.error(
      "Sorry this feature is not yet available, we are working on it"
    );
  return (
    <Flex
      className="toolbar"
      direction="row"
      align="center"
      justify="flex-end"
      gap={27}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <FilterSidebar
        sidebarActive={{ state: sidebarActive, action: setSidebarActive }}
      />
      <img src={filter} onClick={() => setSidebarActive(true)} alt="filter" />
      <img src={add} alt="add" />
    </Flex>
  );
};

export default Toolbar;
