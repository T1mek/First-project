import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

const Card = ({
  id,
  imageUrl,
  title,
  price,
  onPlus,
  onFavorites,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onFavorite = () => {
    onFavorites({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={0}
          width={150}
          height={175}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="276" y="171" rx="0" ry="0" width="5" height="2" />
          <rect x="0" y="164" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="190" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="235" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              height={32}
              width={32}
              src={isFavorite ? "img/h2.png" : "img/h1.png"}
              alt="Heart"
              onClick={onFavorite}
            />
          </div>
          <img
            className={styles.car}
            height={110}
            width={140}
            src={imageUrl}
            alt={title}
          />
          <h5>{title}</h5>
          <div className={styles.cardBottom}>
            <div className={styles.card1}>
              <span>Цена:</span>
              <b>{price} руб</b>
            </div>
            <button className={styles.button}>
              <img
                width={20}
                height={20}
                src={isAdded ? "/img/plus1.png" : "/img/plus.png"}
                alt="Plus"
                onClick={onClickPlus}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
