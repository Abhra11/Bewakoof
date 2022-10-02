import React from "react";
import "../styles/login.css"
import Header from "../Components/Header";
import { InputLeftElement,Input,Button,Stack,InputGroup } from "@chakra-ui/react";
import {ViewOffIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";




const getData=(data={})=>{
    return axios.post(`https://reqres.in/api/login`,{
       email:data.email ,
       password:data.password,
    })
}

function Login(){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const data={email,password};
    const {authState,loginUser}= useContext(AppContext)
    let navigate=useNavigate();

    const handleSubmit= async()=>{
        try{
            getData(data).then((res)=>{
                console.log(res.data.token)
                if(res.data.token){
                  
                   navigate('/product')
                   loginUser(res.data.token=='QpwL5tke4Pnpja7X4')
                   alert("Login Successful")
                      
                    

                   
                   
                   
                }else{
                    console.log('hi')
                }
            })
        }
        catch(err){
            console.log(err)
            alert('Wrong Password')
        }
    }

    return <>
    <Header/>
       <div className="loginD">
            <div className="logo">
                <p style={{'fontWeight':'bold', fontSize:'30px', color:'Black' }}>Welcome to the world of Bewakoof!</p>
                <img style={{'marginTop':'180px'}}  src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="" />
            </div>

            <div className="loginPart">
                <p style={{'fontWeight':'bold', fontSize:'24px', color:'Black' }}>Login/Sign up</p>
                <p>for Latest trends, exciting offers and everything Bewakoof!</p>
                <Stack spacing={4} >
                    <InputGroup>
                         <InputLeftElement
                         style={{marginLeft:'80px', marginTop:'57px'}}
                            pointerEvents='none'
                            children={<EmailIcon color='teal' />}
                          />
                         <Input onChange={e=>setEmail(e.target.value)} style={{borderColor:'black', width:'450px', height:'55px',margin:'auto', marginTop:'50px'}} type='mail' placeholder='Enter Email Id' />
                        
                    </InputGroup>
                    <InputGroup>
                         <InputLeftElement
                         style={{marginLeft:'80px', marginTop:'17px'}}
                            pointerEvents='none'
                            children={<ViewOffIcon color='teal' />}
                          />
                         <Input  onChange={e=>setPassword(e.target.value)} style={{borderColor:'black', width:'450px', height:'55px',margin:'auto', marginTop:'10px'}} type='password' placeholder='Enter Password' />
                    
                    </InputGroup>
                </Stack>
                    <Stack  spacing={4} direction='row' align='center'>
                      <Button onClick={handleSubmit} style={{width:'450px', height:'65px',margin:'auto', marginTop:'10px'}} colorScheme='teal' size='lg'>CONTINUE</Button>
                    </Stack>
                    <div className="orLine">
                        
                        <p>__________ OR __________</p>
                    </div>

                    <div className="phn">
                        <p><PhoneIcon color={'teal'}/> CONTINUE WITH MOBILE NUMBER</p>
                    </div>

                    <div className="social">
                        <div className="goo" >
                            <img width="20px" style={{'marginTop':'10px', 'marginLeft':'35px'}} src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png" alt="ERROR" />
                            <p style={{marginTop:'-21px'}}>GOOGLE</p>
                        </div>

                        <div className="goo">
                        <img width="22px" style={{'marginTop':'10px', 'marginLeft':'25px'}} src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="ERROR" />
                            <p style={{marginTop:'-23px'}}>FACEBOOK</p>
                        </div>
                        
                    </div>
                    <p style={{ marginTop:'30px','color':'#bac0c9', "fontSize":'14px', 'width':'450px', 'margin':'auto'}}>By creating an account or logging in, you agree with Bewakoof's <a style={{'color':'teal', 'fontWeight':"bold"}} href="">Terms and Conditions</a> and <a style={{'color':'teal', 'fontWeight':"bold"}} href="">Privacy Policy</a>.</p>
            </div>
            

       </div>
    </>
}

export default Login;