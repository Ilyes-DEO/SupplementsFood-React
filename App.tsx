import { useState } from 'react'
import { Navbar } from './src/Components/Organismes/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryFilter from './src/Components/Pages/FoodSupplementsPage';
import SupplementsDetails from './src/Components/Pages/SupplementsDetailsPage';
import LoginForm from './src/Components/LoginForm';
import Basket from './src/Components/Basket';
import { AuthProvider } from './src/Components/AuthContext';
import HomePage from './src/Components/Pages/HomePage';
import ChatComponent from './src/GPT-AI/ChatComponents';
function App() {
  return (
    <AuthProvider>
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Category" element={<CategoryFilter />} />
          <Route path="/Supplements" element={<CategoryFilter />} />
          <Route path="/Supplements/:id" element={<SupplementsDetails />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/NUTRIA" element={<ChatComponent />} />
        </Routes>
    </div>
    </AuthProvider>

    )
}

export default App
