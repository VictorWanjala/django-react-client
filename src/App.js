import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowProducts from './comps/ShowProducts';
import AddProduct from './comps/AddProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarMenu from './comps/NavbarMenu';
import ProductDetail from './comps/ProductDetail';
import UpdateProduct from './comps/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarMenu/>
      <Routes>
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/:id/update' element={<UpdateProduct />} />
          <Route path='/:id/' element={<ProductDetail />} />
          <Route path='/' element={<ShowProducts />} />
        <Route/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
