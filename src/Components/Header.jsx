import React from "react";
import { Input,Stack,InputGroup } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Header(){
 
  return <div id="nav">

  <div style={{display:"flex", justifyContent:'space-around', backgroundColor:"#eeeeee",height:'2em',alignItems:'center'}}>
      <div style={{display:'flex',gap:'30px',fontSize:'11px', justifyContent:"space-between", color:'#48647a'}}>
        <p>Offers</p>
        <p>Fanbook</p>
        <p> 📱 Downlolad App</p>
        <p> Tribe Membership</p>
 
      </div>

      <div style={{display:'flex',gap:"30px",fontSize:'11px', justifyContent:"space-between",color:'#48647a'}}>
        <p>Contact Us</p>
        <p>Track Order</p>
      </div>
  </div>

  <div style={{display:"flex", justifyContent:'space-around', borderBottom:"1px solid"}}>
    <div style={{display:'flex',gap:'30px', justifyContent:"space-between", }}>
      
      <Link to="/">
        <img width="200px" src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" alt="" />
      </Link>
      
      
      

      
      <p>MEN</p>
      <p>WOMEN</p>
      <p>MOBILE COVERS</p>
    </div>

    <div style={{display:'flex',gap:'30px', justifyContent:"space-between",   }}>
      <Stack  w={'300px'} >
      <InputGroup>
      
        <Input  type='tel' placeholder='🔍 Search by Product, category or collection' h={'30px'} w={'300px'} mt="8px" style={{background:'#eaeaea',border:'none',borderRadius:'10px',}}  />
      </InputGroup>

  
      </Stack>
      <p>|</p>
      <Link to='/login'> <p>Login</p></Link>
      
      <p>♡</p>
      
      <Link to='/cart'>
      <img   width="30px" src="https://cdn-icons-png.flaticon.com/128/126/126515.png" alt="" />
      </Link>
      
      <img style={{'marginTop':'-5px'}} width={'50px'} src="https://cdn-icons-png.flaticon.com/128/6211/6211382.png" alt="" />
    </div>

    <div>

    </div>

  </div>
     
    </div>   
}

export default Header;