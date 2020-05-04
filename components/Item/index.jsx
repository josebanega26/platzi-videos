import React from 'react';
import './Item.scss';
import PropTypes from 'prop-types';
import playIcon from '../../assets/images/play-icon.png';
import plusIcon from '../../assets/images/plus-icon.png';
import { setFavorite } from '../../src/redux/actions/index';
import { connect } from 'react-redux';

function Item({ title, year, contentRating, duration, cover, setFavorite }) {
  const handlerFavorite = () => {
    setFavorite({ title, year, contentRating, duration, cover });
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
            <img
              className='carousel-item__details--img'
              src={plusIcon}
              alt='Plus Icon'
              onClick={handlerFavorite}
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

Item.protoTypes = {
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  setFavorite,
};
export default connect(null, mapDispatchToProps)(Item);
