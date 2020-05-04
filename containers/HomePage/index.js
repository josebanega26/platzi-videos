import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Carousel from '../../components/Carousel';
import { connect } from 'react-redux';

const URL = 'http://localhost:3000/initialState';
const HomePage = ({ myList = [], trends = [], originals = [] }) => {
  // const [videos, setVideos] = useState({
  //   myList: [],
  //   trends: [],
  //   originals: [],
  // });
  // const fetchData = () => {
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setVideos(res);
  //     })
  //     .catch((err) => console.error(err));
  //   return () => {};
  // };
  // useEffect(fetchData, []);
  return (
    <div>
      <Search />
      {!!myList.length && (
        <Categories tittle='Mi lista'>
          <Carousel items={myList} />
        </Categories>
      )}
      {!!trends.length && (
        <Categories tittle='Tendencias'>
          <Carousel items={trends} />
        </Categories>
      )}
      {!!originals.length && (
        <Categories tittle='Peliculas Originales'>
          <Carousel items={originals} />
        </Categories>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(HomePage);
