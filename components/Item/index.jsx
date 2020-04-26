import React from 'react';
import './Item.scss';
import playIcon from '../../assets/images/play-icon.png';
import plusIcon from '../../assets/images/plus-icon.png';

function Item({
  title,
  type,
  language,
  year,
  contentRating,
  duration,
  cover,
  description,
  source,
}) {
  return (
    <>
      <div className='carousel-item'>
        <img className='carousel-item__img' src={cover} alt={title} />
        <div className='carousel-item__details'>
          <div>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
            />
          </div>
          <p className='carousel-item__details--title'>{title}</p>
          <p className='carousel-item__details--subtitle'>
            2019 16+ 114 minutos
            {`${year} ${contentRating} ${duration} minutos`}
          </p>
        </div>
      </div>
    </>
  );
}

export default Item;
