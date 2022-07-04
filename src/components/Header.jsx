import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="headerLeft">
          <img width={40} height={40} src="img/logo.png" alt="" />
          <div className="HeaderInfo">
            <h3>Pizaa</h3>
            <p>Лучшая</p>
          </div>
        </div>

        <ul className="HeaderRight">
          <li>
            <img width={20} height={20} src="img/card.png" alt="" />
            <span>245 руб</span>
          </li>
          <li>
            <img width={20} height={20} src="img/User.png" alt="" />
          </li>
        </ul>
      </header>
  )
}

export default Header