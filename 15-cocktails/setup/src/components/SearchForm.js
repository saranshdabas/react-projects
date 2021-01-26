import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchCocktail } = useGlobalContext();
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleValueChange = () => {
    const value = searchValue.current.value;
    setSearchCocktail(value);
  };
  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input type="text" ref={searchValue} onChange={handleValueChange} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
