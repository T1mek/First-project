import React from "react";

const Drawer = ({ onClickKrest, items = [], onRemove }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div>
          <h2>
            Корзина
            <img
              className="n"
              height={20}
              src="img/krest.png"
              alt=""
              onClick={onClickKrest}
            />
          </h2>
        </div>

        <div className="Item">
          {items.map((items) => (
            <div key={items.id} className="cartItem">
              <div
                style={{ backgroundImage: `url(${items.imageUrl}` }}
                className="cartItemImg"
              ></div>

              <div className={{ height: "1000px" }}>
                <p>{items.title} </p>
                <b style={{ padding: "6px" }}>{items.price} </b>
              </div>
              <img
                className="m"
                height={20}
                src="img/krest.png"
                alt="Krest"
                onClick={() => onRemove(items.id)}
              />
            </div>
          ))}
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
  );
};

export default Drawer;
