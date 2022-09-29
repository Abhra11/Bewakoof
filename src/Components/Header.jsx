import React from "react";
import { Input,Stack,InputGroup } from '@chakra-ui/react'

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
    <div style={{display:'flex',gap:'30px', justifyContent:"space-between"}}>
      <img width="200px" src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" alt="" />
      <p>MEN</p>
      <p>WOMEN</p>
      <p>MOBILE COVERS</p>
    </div>

    <div style={{display:'flex',gap:'30px', justifyContent:"space-between" }}>
      <Stack  w={'300px'} >
      <InputGroup>
      
        <Input type='tel' placeholder='🔍 Search by Product, category or collection' h={'40px'} w={'300px'} mt="8px" style={{background:'#eaeaea',border:'none',borderRadius:'10px'}}  />
      </InputGroup>

  
      </Stack>
      <p>|</p>
      <p>Login</p>
      <p>♡</p>
      <img  height={'35px'} width="40px" src="https://cdn-icons-png.flaticon.com/128/126/126515.png" alt="" />
      <img height={'35px'} width={'40px'} src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="" />
    </div>

    <div>

    </div>

  </div>
     
    </div>   
}

export default Header;