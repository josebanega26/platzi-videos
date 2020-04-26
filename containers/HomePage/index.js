import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Carousel from '../../components/Carousel';

const URL = 'http://localhost:3000/initialState';
function HomePage() {
  const [videos, setVideos] = useState({
    myList: [],
    trends: [],
    originals: [],
  });
  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setVideos(res);
      })
      .catch((err) => console.error(err));
    return () => {};
  };
  useEffect(fetchData, []);
  return (
    <div>
      <Search />
      {!!videos.myList.length && (
        <Categories tittle='Mi lista'>
          <Carousel items={videos.myList} />
        </Categories>
      )}
      {!!videos.trends.length && (
        <Categories tittle='Tendencias'>
          <Carousel items={videos.trends} />
        </Categories>
      )}
      {!!videos.originals.length && (
        <Categories tittle='Peliculas Originales'>
          <Carousel items={videos.originals} />
        </Categories>
      )}
    </div>
  );
}

export default HomePage;
