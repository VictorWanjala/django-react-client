import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowProducts from './comps/ShowProducts';
import AddProduct from './comps/AddProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarMenu from './comps/NavbarMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarMenu/>
      <Routes>
        <Route path='/' element={<ShowProducts/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
