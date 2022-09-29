import React from "react";

const Footer=()=>{
    return <>
        <div style={{backgroundColor:'#181818 ', color:'white', height:'400px'}}>
            <img style={{'marginLeft':'205px'}} width={'150px'} src="https://i.pinimg.com/originals/47/3c/cc/473ccc3cbfa9813d512afb9b3587ab6f.jpg" alt="" />
            <div style={{display:'flex', justifyContent:"space-evenly", width:'100%', margin:'auto', 'marginTop':'-80px'}}>

                <div>
                    <p style={{'color':'#fdd835', 'fontSize':'13px'}}>CUSTOPMER SERVICE</p>
                    <p>Contact Us</p>
                    <p>Track Order</p>
                    <p>Return Order</p>
                    <p>Cancel Order</p>
                </div>


                <div>
                    <p style={{'color':'#fdd835', 'fontSize':'13px'}}>COMPANY</p>
                    <p>About Us</p>
                    <p>We're Hiring</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Blog</p>
                </div>


                <div>
                    <p style={{'color':'#fdd835', 'fontSize':'13px'}}>CONNECT WITH US</p>
                 </div>


                 <div>
                    <p style={{'color':'#fdd835', 'fontSize':'13px'}}>KEEP UP TO DATE</p>
                </div>
            </div>

            
        </div>
    </>
}

export default Footer;