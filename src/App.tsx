import React, { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Product from './components/Product';
import ProductsList from './components/ProductsList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
