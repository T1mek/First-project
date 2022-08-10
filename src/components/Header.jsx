import React from 'react'
import {Link} from "react-router-dom"
const Header = (props) => {


  


  return (
    <header style={{marginTop:"85px"}}>
      <Link style={{ textDecoration: 'none',color:"rgba(0, 0, 0, 1)"}} to={"/"}>
        <div className="headerLeft">
          <img width={40} height={40} src="img/logo.png" alt="" />
          <div className="HeaderInfo">
            <h3>Pizaa</h3>
            <p>Лучшая</p>
          </div>
        </div>
        </Link>

        <ul className="HeaderRight">
          <li onClick={props.onClickCart} style={{cursor: "pointer"}}>
            <img width={20} height={20} src="img/card.png" alt="Корзина" />
            <span>245 руб</span>
          </li>
          <li style={{cursor: "pointer" , marginRight:"20px "}}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/favorite"}>
            <img width={20} height={20} src="img/favorite.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
            <img width={20} height={20} src="img/User.png" alt="Пользователь" />
          </li>
        </ul>
      </header>
  )
}

export default Header