import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import Login from "../Pages/Login";
import Product from "../Pages/ProductPage";

function Allrouter(){
    return <div>
        <Routes>
            <Route path ="/" element={<HomePage/>}/>
            <Route path ="/login" element={<Login/>}/>  
            <Route path ="/product" element={<Product/>}/>

        </Routes>
    </div>
}

export default Allrouter;