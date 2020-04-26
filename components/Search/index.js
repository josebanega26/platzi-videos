import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input type='text' className='input' placeholder='Buscar...' />
      </section>
    </div>
  );
};

export default Search;
