import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchCocktail, setSearchCocktail] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchCocktail}`);
      const data = await res.json();
      const { drinks } = data;
      if (drinks) {
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [searchCocktail]);
  return (
    <AppContext.Provider value={{ loading, setSearchCocktail, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
