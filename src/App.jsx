import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Menu from './components/Menu/Menu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'



import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
