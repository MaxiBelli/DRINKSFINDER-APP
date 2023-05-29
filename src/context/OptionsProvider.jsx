import { createContext, useState, useEffect } from "react";
import axios from "axios";

const OptionsContext = createContext();

const OptionsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async (url, setData) => {
    try {
      const { data } = await axios.get(url);
      setData(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchListData = async () => {
      await fetchData("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", setIngredients);
      await fetchData("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list", setCategories);
    };

    fetchListData();
  }, []);

  return (
    <OptionsContext.Provider value={{ categories, ingredients }}>
      {children}
    </OptionsContext.Provider>
  );
};

export { OptionsProvider };

export default OptionsContext;