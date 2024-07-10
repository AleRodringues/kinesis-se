import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import OrigensPage from './Pages/OrigensPage';
import CollectionPage from './Pages/CollectionPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/origens" element={<OrigensPage />} />
        <Route path="/collection/:country" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductDetailPage} />
      </Routes>
    </Router>
  );
}

export default App;
