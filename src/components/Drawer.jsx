import React from 'react'

const Drawer = (props) => {
  return (
    <div  className="overlay">
    <div className="drawer">
    <div>
      <h2>
        Корзина
        <img className="n" height={20} src="img/krest.png" alt="" onClick={props.onClickKrest}/>
      </h2>
    </div>
    
      <div className="Item">
        <div className="cartItem">
          <div
            style={{ backgroundImage: "url(img/car/a1.png)" }}
            className="cartItemImg"
          ></div>

          <div className={{height: "1000px"}}>
            <p>Пеперони</p>
            <b style={{padding : "6px"}} >350р</b>
          </div>
          <img className="m" height={20} src="img/krest.png" alt="" />
        </div>
        <div className="cartItem">
          <div
            style={{ backgroundImage: "url(img/car/a1.png)" }}
            className="cartItemImg"
          ></div>

          <div className="">
            <p>Пеперони</p>
            <b style={{padding : "6px"}} >350р</b>
          </div>
          <img className="m" height={20} src="img/krest.png" alt="" />
        </div>
      </div>
      <div className="Korz">
        <ul>
          <li className="F">
            <span>Итого:</span>
            <div></div>
            <b>700руб</b>
          </li>
          <li>
            <span>Доставка</span>
            <div></div>
            <b>200 руб</b>
          </li>
        </ul>

        <button className="btn">
          Оформить заказ <img width={15} src="img/strelka.png" alt="" />
        </button>
      </div>
    
  </div>
  </div>

  )
}

export default Drawer