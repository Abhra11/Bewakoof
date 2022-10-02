import React from "react";

const Footer=()=>{
    return <>
        <div style={{backgroundColor:'#181818 ', color:'white', height:'300px'}}>
            <img style={{'marginLeft':'135px'}} width={'150px'} src="https://i.pinimg.com/originals/47/3c/cc/473ccc3cbfa9813d512afb9b3587ab6f.jpg" alt="" />
            <div style={{display:'flex', justifyContent:"space-evenly", width:'100%', margin:'auto', 'marginTop':'-80px'}}>

                <div>
                    <p style={{'color':'#fdd835', 'fontSize':'13px'}}>CUSTOMER SERVICE</p>
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

                    <div style={{"display":'flex', padding:'10px', gap:'5px'}}>
                        <img width={'20px'} src="https://cdn-icons-png.flaticon.com/128/1312/1312139.png" alt="" />
                        <p>4.7M People Like this</p>
                    </div>

                    <div style={{"display":'flex', padding:'10px', gap:'5px'}}>
                        <img width={'20px'} src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="" />
                        <p>1M Followers</p>
                    </div>
                        
                    <div style={{"display":'flex', padding:'10px', gap:'5px'}}>
                        <img width={'15px'}  src="https://cdn-icons-png.flaticon.com/128/2504/2504947.png" alt="" />
                        <img width={'15px'}  src="https://cdn-icons-png.flaticon.com/128/2504/2504932.png" alt="" />
                        <img width={'15px'}  src="https://cdn-icons-png.flaticon.com/128/2504/2504938.png" alt="" />
                        <img width={'15px'}  src="https://cdn-icons-png.flaticon.com/128/2504/2504884.png" alt="" />
                    </div>
                 </div>


                 <div>
                    <p style={{'color':'#fdd835', 'fontSize':'13px'}}>KEEP UP TO DATE</p>
                    <div>
                    <input style={{'background':'#181818 ', borderBottom:'1px solid #fdd835'}} type="text" placeholder="Enter Email ID" />
                    <button style={{'background':' #fdd835', color:'#181818', height:'30px', width:'100px'}}>Submit</button>
                    </div>
                   
                    
                </div>
            </div>

            
        </div>
    </>
}

export default Footer;