import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import CartLists from './Pages/CartLists';
import Navigation from './Navigation/Nav';
import { useState } from "react";
import productsData from "./db/data"
import Product from './Components/Product';

function App() {
  const [selectBrand, setSelectBrand] = useState(null);

  const [searchProduct, setSearchProduct] = useState("");

  const searchByProduct = (event) => {
    setSearchProduct(event.target.value);
  };

  const clickProduct = (event) => {
    setSelectBrand(event.target.value);
  };

  function filteredData(productsData, selected, searchProduct) {
    let filteredProducts = productsData;

    if (searchProduct) {
      filteredProducts =  productsData.filter((productsData) => 
            productsData.title.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1);
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, title }) =>
          category === selected ||
          company === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, maxQuantity, newPrice }) => (
        <Product
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          maxQuantity={maxQuantity}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(productsData, selectBrand, searchProduct);
  return (
    <BrowserRouter>
      <Navigation searchByProduct={searchByProduct}/>
      <Routes>
        <Route exact path="/" element={<Home clickProduct={clickProduct} result={result} />} />
        <Route path='/cart' element={<CartLists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;