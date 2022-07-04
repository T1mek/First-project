import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const onClickButton = () => {
    alert(123);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img height={32} width={32} src="img/h1.png" alt="" />
      </div>
      <img
        className={styles.car}
        height={110}
        width={140}
        src={props.imageUrl}
        alt={props.title}
      />
      <h5>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.card1}>
          <span>Цена:</span>
          <b>{props.price} руб</b>
        </div>
        <button className={styles.button}>
          <img
            width={11}
            height={11}
            src="/img/plus.png"
            alt="Plus"
            onClick={onClickButton}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
