import React from "react";

import { useContext } from "react";
import { cartContext } from "../CartContext/CartContextProvider";
import { removeItem } from "../CartContext/action";
import Header from "../Components/Header";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import '../styles/cart.css'
import Footer from "../Components/Footer";



const Cart = () => {
  const {cartState,cartDispatch}= useContext(cartContext);
  const navigate=useNavigate();
  const total =cartState.cartData?.map((el)=>{
    
    return el.dPrice
    
  })
let total2=0;
  for(let i=0; i<total.length; i++){
    total2+=total[i];
  }
  console.log(total2)
  console.log(cartState)
  const handleDel=(id)=>{
      const removeData=cartState.cartData.filter((ele)=>{
        return ele.id!==id;
      })
      cartDispatch(removeItem(removeData));
      console.log(id)
  }

  const handleOrder =()=>{
        alert('Congratulation Your Order is Successful ');
        navigate('/')

  }
 const len= cartState.cartData.length;
 const bagDis=cartState.cartData.map(ele=>{
    return ele.dPrice - ele.price
 }
    
 )
let bagDis2=0;
for(let i=0; i<bagDis.length; i++){
    bagDis2+=bagDis[i];
  }


 

  return <>
  <Header/>
     
      <div style={{width:'80%' , margin:"auto"}}>
      <p style={{fontWeight:'bold'}}>My Bag {len} item(s)</p>
      <div className="parent">

            <div className="child1" >
                <p style={{'marginTop':'30px', 'background':'#fcffee',fontSize:'12px', padding:'15px', 'height':"50px"}}>Yay! You get FREE delivery on this order</p>
                <div className="gChild">
                    {cartState && cartState.cartData && cartState.cartData.map(ele=>(
                        <div style={{border:'1px solid #d2d2d2 ',marginTop:'30px', padding:'30px', borderRadius:'7px'}}>
                        <div style={{display:'flex', justifyContent:'space-between'    }}>
                        <div >
                            <p>{ele.name}</p>
                            <div style={{'display':'flex', gap:'10px'}}>
                                <p  style={{fontWeight:'bold', fontSize:'18px'}} >{`₹${ele.price}`}</p>
                                <p style={{textDecoration: 'line-through', color:'#979797 ', fontSize:''}}>{`₹${ele.dPrice}`}</p>
                            </div>
                             <p style={{color:'#55944f'}}>You saved {`₹${ele.dPrice- ele.price}!`}</p>
                            <div style={{display:'flex', gap:'40px'}}>
                            <select style={{border:'1px solid' , padding:'5px', borderRadius:'5px', borderColor:'#e4e4e9 '}}>
                                <option value="">Size:S</option>
                            </select>

                            <select style={{border:'1px solid' , padding:'5px', borderRadius:'5px', borderColor:'#e4e4e9 '}}>
                                <option value="">Qty:1</option>
                            </select>
                            </div>
                            </div>

                        <div>
                            <img width={'100px'} src={ele.url} alt="" />
                        </div>
                        </div>

                        <div style={{'borderColor':'#e4e4e9','display':'flex', "justifyContent":'space-evenly', borderTop:'1px solid', marginTop:'30px'}}>
                            <button style={{'marginTop':'10px', color:"#979797"}} onClick={()=>handleDel(ele.id)}>Remove</button>
                            <button style={{'borderLeft':'1px solid', width:'50%', marginTop:'10px', borderColor:'#e4e4e9', color:'#979797'}}>Move To Wishlist</button>

                        </div>
                        </div>
                       
                    ))}
                </div>
            </div>

            <div className="child2">
                <p className="hline">Save extra 50 with TriBe  </p>
                <p className="hline2">Whistles! Get extra 10% Cashback on prepaid orders above Rs.699. Coupon code - OOF10.</p>
               
               <div>
               <p className="hline3">Have a Coupon / Referral / Gift Card ? Redeem</p>
               </div>

               <div style={{'border':'1px solid' ,  'borderColor':'#d2d2d2'}}>
                        <p  style={{'padding':'10px', 'background':'#e4e4e4'}}>Primary Summary</p>
                        <div style={{'display' :'flex', justifyContent:'space-between', padding:'30px'}}> 
                            <div>
                                <p>Total MRP (Incl. of taxes)  </p>
                                <p>Shipping Charges </p>
                                <p>Bag Discount </p>
                                <p>Subtotal </p>
                            </div>

                            <div>
                                <p>{`₹${total2}`}</p>
                                <p>Free</p>
                                <p>{`₹-${bagDis2}`}</p>
                                <p>{`₹${total2-bagDis2}`}</p>
                            </div>

                            

                        </div>
                        <p className="hline4">{`You are saving ₹ ${bagDis2} on this order`}</p>
                        <div style={{display:'flex', "justifyContent" :'space-between', padding:'20px', borderTop:'1px solid', marginTop:'20px'}}>
                            <div>
                                <p style={{'fontSize':'12px'}}>Total</p>
                                <p>{`₹${total2-bagDis2}`}</p>
                            </div>

                            <div >
                                <Button onClick={handleOrder} style={{'width':'300px', background:'teal', color:'white'}}>Continue</Button>
                            </div>
                        </div>
                     
               </div>
                
            </div>
      </div>
      </div>
      <Footer/>
  </>;
};

export default Cart;
