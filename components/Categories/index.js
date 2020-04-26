import React from 'react';
import './Categories.scss';

function Categories({ children, tittle = 'insert Title' }) {
  return (
    <div className='categories'>
      <h3 className='categories__title'>{tittle}</h3>
      {children}
    </div>
  );
}

export default Categories;
