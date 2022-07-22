import React from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://62c5602fa361f72512824193.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
        });
        axios.get("https://62c5602fa361f72512824193.mockapi.io/Card").then((res) => {
        setCartItems(res.data)});
        
   }, []);

  const onAddToCard = (obj) => {
    axios.post("https://62c5602fa361f72512824193.mockapi.io/Card",obj);

    setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id)=>{
    axios.delete(`https://62c5602fa361f72512824193.mockapi.io/Card/${id}`);

    setCartItems((prev) => prev.filter(it=> it.id !==id) );
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
        onRemove={onRemoveItem}
          items={cartItems}
          onClickKrest={() => {
            setCartOpened(false);
          }}
        />
      )}

      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />

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

        <div className="tt">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((items, index) => (
              <Card
                key={index}
                title={items.title}
                price={items.price}
                imageUrl={items.imageUrl}
                // onFavorite={() => alert("Добавили в закладки")}
                onPlus={(obj) => onAddToCard(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
