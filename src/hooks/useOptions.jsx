import { useContext } from "react";
import ListContext from "../context/OptionsProvider";

const UseOptions = () => {
  return useContext(ListContext);
};

export default UseOptions;