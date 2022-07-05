import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const [isAdded,setIsAdded]=React.useState(false)


  const onClickPlus = () =>{
    setIsAdded(!isAdded)
  }

  const [isFavorite, setIsFavorite]=React.useState(false)
  const onFavorite=()=>{
    setIsFavorite(!isFavorite)
  }




  

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img height={32} width={32} src={isFavorite ? "img/h2.png": "img/h1.png"} alt="Heart" onClick={onFavorite} />
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
            width={20}
            height={20}
            src={isAdded ? "/img/plus1.png":"/img/plus.png"}
            alt="Plus"
            onClick={onClickPlus}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
