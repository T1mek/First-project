import React ,{useState,useEffect} from "react";
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const itemsResponse = await axios.get(
        "https://62c5602fa361f72512824193.mockapi.io/items"
      );

      const cardResponse = await axios.get(
        "https://62c5602fa361f72512824193.mockapi.io/Card"
      );

      const favoritesResponse = await axios.get(
        "https://62c5602fa361f72512824193.mockapi.io/favorites"
      );
      setIsLoading(false)
      setCartItems(favoritesResponse.data);
      setFavorites(cardResponse.data);

      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCard = (obj) => {
    // try {
    if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
      axios.delete(
        `https://62c5602fa361f72512824193.mockapi.io/Card/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((cartObj) => Number(cartObj.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://62c5602fa361f72512824193.mockapi.io/Card", obj);

      setCartItems((prev) => [...prev, obj]);
    }
    // } catch (error) {
    //   alert("Не удалось добавить в корзину");
    // }
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://62c5602fa361f72512824193.mockapi.io/Card/${id}`);

    setCartItems((prev) => prev.filter((it) => it.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://62c5602fa361f72512824193.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://62c5602fa361f72512824193.mockapi.io/favorites",
          obj
        );

        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в закладки");
    }
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
