import React from "react";
import "./Carousel.scss";
import Item from "../Item";

function Carousel({ items = [] }) {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {items.map((item, index) => {
          return <Item key={index} />;
        })}
      </div>
    </section>
  );
}

export default Carousel;
