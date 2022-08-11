import React from "react";
import Card from "../components/Card/Card";

const Home = ({
  cartItems,
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCard,
  isLoading,
}) => {
  const itemRender = () => {
    return (
      isLoading
        ? [...Array(9)]
        : items.filter((item) => item.title.toLowerCase().includes(searchValue))
    ).map((items, index) => (
      <Card
        key={index}
        onFavorites={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCard(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(items.id))}
        {...items}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content">
      <div className="Lupa">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Меню"}</h1>
        <div className="Search">
          <img width={20} height={20} src="img/lupa.png" alt="Lupa" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="x"
              height={20}
              src="img/krest.png"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="tt">{itemRender()}</div>
    </div>
  );
};

export default Home;
