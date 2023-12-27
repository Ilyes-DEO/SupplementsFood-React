import { useState } from 'react'
import Navbar from './src/Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import CategoryFilter from './src/Components/CategoryFilter';
import SupplementsFood from './src/Pages/SupplementsFood';
import SupplementsDetails from './src/Components/SupplementsDetails';
import SupplementsCards from './src/Components/SupplementsCards';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/Category" element={<CategoryFilter />} />
          <Route path="/Supplements" element={<CategoryFilter />} />
          <Route path="/Supplements/:id" element={<SupplementsDetails />} />
          <Route path="/Supplementss" element={<SupplementsCards />} />

        </Routes>
    </div>
 
    )
}

export default App
