import React from 'react';
import './Carousel.scss';
import Item from '../Item';

function Carousel({ items = [] }) {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {items.map(({ id, ...items }, index) => {
          return <Item key={id} {...items} />;
        })}
      </div>
    </section>
  );
}

export default Carousel;
