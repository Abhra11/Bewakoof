import React from "react";
import {Swiperr,Swiperr2,Swiperr3,Swiperr4} from "../Swiper&Data/Swiper";
import {Data1,Data2,Data3, Data4,Data5} from "../Swiper&Data/data1";
import Header from "./Header";

function HomePage(){
    return <>
        <Header/>
        <div className="nav2" style={{display:'flex', justifyContent:'center' , justifyContent:'space-around',height:'70px',width:'40%', margin:'auto', marginBottom:'0px' }}>
            <p style={{ fontSize:'17px', fontWeight:'bold', borderBottom:'1px solid #ffd835', borderWidth:'4px',width:'110px' ,textAlign:'center',}}>MEN</p>
            <p style={{ fontSize:'17px'}}>WOMEN</p>
            <p style={{ fontSize:'17px'}}>ACCESSORIES</p>
        </div>
        <div id="slider" style={{marginBottom:'10px'}}>
           
           <p>We are now delivering across UAE. Let the shopping begin!</p>
          
         
        </div>
        <Swiperr/>
        <img style={{marginTop:'40px', width:'100%'}} src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg" alt="404 Error"  />
        <Data1/>
        <h3 style={{textAlign:'center', fontSize:'23px', }}>POPULAR CATEGORIES</h3>
        <Data2/>
        <h3  style={{textAlign:'center', fontSize:'23px', }}>DISCOUNT PE DISCOUNT</h3>
        <Data3/>
        <p style={{textAlign:'center', fontSize:'17px',fontWeight:'bold' }}>BESTSELLER FOR MEN</p>
        <div style={{marginBottom:'30px'}}>
            <Swiperr3/>
        </div>
        <a style={{marginLeft:'48%', fontSize:'12.5px',color:'#52afbc ', fontWeight:'bold' }} href="">VIEW ALL</a>
        <div style={{marginTop:'20px'}}>
            <Swiperr2/>
        </div>
        <p  style={{textAlign:'center', fontSize:'23px', fontWeight:'bold' }}>BEST BARGAIN CORNER</p>

        <div style={{marginTop:'-20px'}}>
         <Data4/>
        </div>
        <p style={{textAlign:'center', fontSize:'17px',fontWeight:'bold' }}>CLEARANCE ZONE</p>
        <div style={{marginTop:'20px'}}>
            <Swiperr4/>
        </div>
        <a style={{marginLeft:'48%', fontSize:'12.5px',color:'#52afbc ', fontWeight:'bold' }} href="">VIEW ALL</a>
        <h3  style={{textAlign:'center', fontSize:'23px', }}>THE STOOPID COLLECTION</h3>
        <Data5/>
        <img style={{marginTop:'', width:'100%'}} src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png"  />
        <p style={{textAlign:'center', fontSize:'19px',fontWeight:'bold' }}>Customize your T-shirts</p>
        <img style={{marginTop:'', width:'100%'}} src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif"  />
 
    </>
}

export default HomePage;