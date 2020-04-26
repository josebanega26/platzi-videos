import React from "react";
import Search from "../../components/Search/";
import Categories from "../../components/Categories/";
import Carousel from "../../components/Carousel";

function HomePage() {
  return (
    <div>
      <Search />
      <Categories>
        <Carousel items={[1, 2, 3, 4, 5, 2, 3, 4, 5]} />
      </Categories>
    </div>
  );
}

export default HomePage;
