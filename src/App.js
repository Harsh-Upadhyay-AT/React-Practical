import './App.css';
import Addorder from './component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './component/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Addorder />}/>
        <Route path="/products" element={<Product />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
    