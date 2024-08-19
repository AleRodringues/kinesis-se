import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CollectionsPage from './Pages/CollectionsPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';
import ShippingInfoPage from './Pages/ShippingInfoPage';
import ConfirmationPage from './Pages/ConfirmationPage';
import AboutUsPage from './Pages/AboutUsPage';
import Cadastro from './Pages/Cadastro';
import UserProfile from './Pages/UserProfile';
import { CartProvider } from './CartContext';
import Header from './components/Header';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shipping-info" element={<ShippingInfoPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/login" element={<Cadastro />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
