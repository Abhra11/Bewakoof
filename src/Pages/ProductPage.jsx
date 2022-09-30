import React from "react";
import Header from '../Components/Header'
import "../styles/Product.css"

function Product(){
    return <>
    <Header/>

    <div className="parent">
        <p style={{'fontSize':'12px', 'marginTop':'10px'}}>Home  /  Men Clothing</p>
        <p style={{'fontSize':'24px', 'marginTop':'24px', fontWeight:'bold', borderBottom:'1px solid', width:'20%'}}>Men Clothing (15)</p>
        <div>
            <div>

            </div>

            <div>
                
            </div>
        </div>
    </div>

        
    </>
}

export default Product;