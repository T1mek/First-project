import React from "react";

import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";




function App() {
  const [items,setItems]=React.useState([])
  const [cartItems,setCartItems]=React.useState([])
  const [cartOpened,setCartOpened] = React.useState(false)
  
  React.useEffect(()=>{
    fetch("https://62c5602fa361f72512824193.mockapi.io/items").then((res)=>{
    return res.json();})
    .then(json=>{
      setItems(json)
    }
  )

  },[])
  const onAddToCard=(obj)=>{
    setCartItems((prev)=> [...prev,obj] )
    
    
  }
  
  return (
    <div className="wrapper">
      
      { cartOpened && <Drawer items={cartItems}   onClickKrest={()=>{
        setCartOpened(false)
      }} />}

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
          {items.map((items) => (
            <Card
              title={items.title}
              price={items.price}
              imageUrl={items.imageUrl}
              // onFavorite={() => alert("Добавили в закладки")}
              onPlus={(obj)=> onAddToCard(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
