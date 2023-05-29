import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchDrink = async (info) => {
    try {
      const urlIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${info.ingredient}`;
      const urlCategory = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${info.category}`;
      const responseIngredient = await axios(urlIngredient);
      const responseCategory = await axios(urlCategory);

      const drinksIngredient = responseIngredient.data.drinks;
      const drinksCategory = responseCategory.data.drinks;

      const matchingDrinks = drinksIngredient.filter((drinkIngredient) =>
        drinksCategory.some(
          (drinkCategory) => drinkCategory.strDrink === drinkIngredient.strDrink
        )
      );

      setDrinks(matchingDrinks);
      console.log(matchingDrinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!drinkId) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [drinkId]);

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkIdClick = (id) => {
    setDrinkId(id);
  };

  return (
    <DrinksContext.Provider
      value={{
        fetchDrink,
        drinks,
        handleModalClick,
        modal,
        handleDrinkIdClick,
        recipe,
        loading,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
