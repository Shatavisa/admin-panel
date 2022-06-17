import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import ProductList from "./pages/productList/ProductList"
import React, { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import { productInputs, userInputs } from "./formSOURCE";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useSelector } from "react-redux";




const App =() => {

  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {admin && (
            <React.Fragment>
             <Route path="/" element={<Home />} />
          


             <Route path="users">
               <Route index element={<List />} />
               <Route path=":userId" element={<Single />} />
               {/* <Route path="new" element={<New inputs={userInputs} title="Add New User" />} /> */}
             </Route>
   
             <Route path="products">
               <Route path="/products" element={<ProductList />} />
   
               <Route path=":productId" element={<Product />} />
   
   
               {/* <Route path="newproduct" element={<NewProduct />} /> */}
   
   
             </Route>
             </React.Fragment>
          )}
         

        </Routes>
      </BrowserRouter>

   
  );
}

export default App;
