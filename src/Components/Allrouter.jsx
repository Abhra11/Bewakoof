import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import Login from "../Pages/Login";
import Product from "../Pages/ProductPage";
import Cart from "../Pages/CartPage"
import PrivateRoute from "./PrivateRoute";

function Allrouter(){
    return <div>
        <Routes>
            <Route path ="/" element={<HomePage/>}/>
            <Route path ="/login" element={<Login/>}/>  
            <Route path ="/product" element={<PrivateRoute><Product/></PrivateRoute>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>


        </Routes>
    </div>
}

export default Allrouter;