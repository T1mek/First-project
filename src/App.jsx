import React from "react";

import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";



function App() {
  const [items,setItems]=React.useState([])
  const [cartItems,setCartItems]=React.useState([])
  const [cartOpened,setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue]=React.useState("")
  
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

  const onChangeSearchInput = (event)=>{
    setSearchValue(event.target.value)
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
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Меню"} </h1>
          <div className="Search">
            <img width={20} height={20} src="img/lupa.png" alt="Lupa" />
           { searchValue && <img onClick={()=> setSearchValue("")}  className="x" height={20} src="img/krest.png" alt="Clear"/> }
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="tt">
          {items.map((items,index) => (
            <Card
              key={index}
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
