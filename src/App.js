import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom"
import { useDispatch } from 'react-redux';
//import Products from './Components/ClassComponents/Products';
//import Products from './Components/FnComponents/Products';
const Products = React.lazy(()=> import('./Components/FnComponents/Products'))
//import NotFound from './Components/FnComponents/NotFound';
const NotFound = React.lazy(()=> import('./Components/FnComponents/NotFound'))
//import NavigationBar from './Components/FnComponents/NavBar';
const NavigationBar = React.lazy(()=> import('./Components/FnComponents/NavBar'))
//import ProductDetails from './Components/FnComponents/ProductDetails';
const ProductDetails = React.lazy(()=> import('./Components/FnComponents/ProductDetails'))

const AddProduct = React.lazy(()=> import('./Components/FnComponents/AddProduct'))

const AddReduxProduct = React.lazy(()=> import('./Components/FnComponents/AddReduxProduct'))

const UpdateProduct = React.lazy(()=> import('./Components/FnComponents/UpdateProduct'))

const Cart = React.lazy(() => import('./Components/FnComponents/Cart'));

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <React.Suspense fallback={<h1> Loading... </h1>}>
      <NavigationBar/>
      <Routes>
        <Route exac path="/products" element={<Products />} />
        <Route  path="/products/:name" element={<ProductDetails />} />
        <Route  path="/addprod" element={<AddProduct />} />
        <Route  path="/addprodred" element={<AddReduxProduct />} />
        <Route  path="/products/update/:id" element={<UpdateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
      </React.Suspense>      
    </div>
  );
}

export default App;
