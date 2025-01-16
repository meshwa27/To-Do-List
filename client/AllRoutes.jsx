import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Update from './component/Update';
import AddProduct from './component/AddProduct';
import Getproduct from './component/Getproduct';
import NotFound from './component/NotFound';


const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Getproduct />} />
    <Route path="/update/:id" element={<Update />} />
    <Route path="/addproduct" element={<AddProduct />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  );
};

export default AllRoutes;