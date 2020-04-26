import React from "react";

function Categories({ children }) {
  return (
    <div className='categories'>
      <h3 className='categories__title'>Mi lista</h3>
      {children}
    </div>
  );
}

export default Categories;
