import React from "react";

import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Koenigsegg",
    price: "2500",
    imageUrl: "img/car/a1.png",
  },
  {
    title: "Koenigsegg blue",
    price: "4500",
    imageUrl: "img/car/a2.png",
  },
  {
    title: "Land Rover White",
    price: "1500",
    imageUrl: "img/car/a3.png",
  },
  {
    title: "Land Rover Res",
    price: "1200",
    imageUrl: "img/car/a4.png",
  },
];

function App() {

  const [cartOpened,setCartOpened] = React.useState(false)
  

  return (
    <div className="wrapper">
      
      { cartOpened ? <Drawer  onClickKrest={()=>{
        setCartOpened(false)
      }} />: null}

      <Header onClickCart={()=>{
        setCartOpened(true)
      }} />

      <div className="content">
        <div className="Lupa">
          <h1>Меню</h1>
          <div className="Search">
            <img width={20} height={20} src="img/lupa.png" alt="Lupa" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="tt">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              // onFavorite={() => alert("Добавили в закладки")}
              // onPlus={() => alert("Нажали плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
