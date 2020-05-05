import React from 'react';
import { connect } from 'react-redux';
import './Item.scss';
import PropTypes from 'prop-types';
import playIcon from '../../assets/images/play-icon.png';
import plusIcon from '../../assets/images/plus-icon.png';
import { setFavorite, removeFavorite } from '../../src/redux/actions/index';
import removeIcon from '../../assets/images/remove-item.png';

function Item({
  id,
  title,
  year,
  contentRating,
  duration,
  cover,
  setFavorite,
  removeFavorite,
  isList,
}) {
  const handlerFavorite = () => {
    setFavorite({ id, title, year, contentRating, duration, cover });
  };
  const handlerRemoveFavorite = () => {
    removeFavorite(id);
  };
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
            {!isList && (
              <img
                className='carousel-item__details--img'
                src={plusIcon}
                alt='Plus Icon'
                onClick={handlerFavorite}
              />
            )}
            {isList && (
              <img
                className='carousel-item__details--img'
                src={removeIcon}
                alt='Plus Icon'
                onClick={handlerRemoveFavorite}
              />
            )}
          </div>
          <p className='carousel-item__details--title'>{title}</p>
          <p className='carousel-item__details--subtitle'>
            {`${year} ${contentRating} ${duration} minutos`}
          </p>
        </div>
      </div>
    </>
  );
}

Item.protoTypes = {
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
};
export default connect(null, mapDispatchToProps)(Item);
