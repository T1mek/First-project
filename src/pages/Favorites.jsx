import React from 'react'

import Card from '../components/Card/Card'



const Favorites = ({items,onAddToFavorite}) => {
  return (
    <div className="content">
    <div className="Lupa">
      <h1>Мои Закладки</h1>
      
     
    </div>

    <div className="tt">
    {items
        
        .map((items, index) => (
          <Card
            key={index}
            
            favorited={true}
            onFavorites={onAddToFavorite}
            {...items}
          />
        ))}
    </div>
  </div>
  )
}

export default Favorites