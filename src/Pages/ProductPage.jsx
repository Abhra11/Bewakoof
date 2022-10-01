import React from "react";
import Header from '../Components/Header'
import "../styles/Product.css"

const data=[
    {
      id:1,
      url:'https://images.bewakoof.com/t320/starboy-oversized-fit-t-shirt-545603-1664287564-1.jpg',
      price:456,
      dPrice:999,
      brand:'Bewakoof',
      name:"Men's Blue Itachi Of The Sharingan Graphic P...",
  
  
  },
  {
      id:2,
      url:'https://images.bewakoof.com/t320/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg',
      price:669,
      dPrice:1009,
      brand:'Bewakoof',
      name:"Game Over Minimal Half Sleeve T-Shirt Navy Bl..."
  },
  {
      id:3,
      url:'https://images.bewakoof.com/t320/men-s-black-genjutsu-t-shirt-390475-1655747919-1.jpg',
      price:756,
      dPrice:1999,
      brand:'Bewakoof',
      name:"Men's Black Minion Striped Oversized T-shirt"
  },
  {
      id:4,
      url:'https://images.bewakoof.com/t320/men-s-black-stripe-minion-relaxed-fit-t-shirt-452883-1655751697-1.jpg',
      price:499,
      dPrice:669,
      brand:'Bewakoof',
      name:"Men's Blue Itachi Of The Sharingan Graphic P...",

  },
  {
      id:5,
      url:'https://images.bewakoof.com/t320/starboy-oversized-fit-t-shirt-545597-1664287601-1.jpg',
      price:789,
      dPrice:1999,
      brand:'Bewakoof',
      name:"Men's Black Minion Striped Oversized T-shirt"
  },
  {
    id:6,
    url:'https://images.bewakoof.com/t320/men-s-black-moon-knight-oversize-fit-t-shirt-522479-1659680064-1.jpg',
    price:456,
    dPrice:999,
    brand:'Bewakoof',
    name:"Men's Black Minion Striped Oversized T-shirt"
  },
  {
    id:7,
    url:'https://images.bewakoof.com/t320/savvy-redmen-aop-t-shirt-464968-1656045539-1.jpg',
    price:309,
    dPrice:999,
    brand:'Bewakoof',
    name:"Men's Blue Itachi Of The Sharingan Graphic P...",
  },
  {
    id:8,
    url:'https://images.bewakoof.com/t320/don-t-grow-up-half-sleeve-t-shirt-544706-1664256006-1.jpg',
    price:379,
    dPrice:999,
    brand:'Bewakoof',
    name:"Game Over Minimal Half Sleeve T-Shirt Navy Bl"
  },
  {
    id:9,
    url:'https://images.bewakoof.com/t640/game-over-minimal-half-sleeve-t-shirt-navy-blue-305202-1655748497-1.jpg',
    price:456,
    dPrice:999,
    brand:'Bewakoof',
    name:"Men's Blue Itachi Of The Sharingan Graphic P...",
   },
  {
    id:10,
    url:'https://images.bewakoof.com/t320/don-t-grow-up-half-sleeve-t-shirt-544706-1664256006-1.jpg',
    price:50,
    dPrice:100,
    brand:'Bewakoof',
    name:"Game Over Minimal Half Sleeve T-Shirt Navy Bl"
  }
  ]
function Product(){
    return <>
    <Header/>

    <div className="parent">
        <p style={{'fontSize':'12px', 'marginTop':'10px'}}>Home  /  Men Clothing</p>
        <p style={{'fontSize':'24px', 'marginTop':'24px', fontWeight:'bold', borderBottom:'1px solid', width:'20%'}}>Men Clothing (15)</p>
        <div>
            <div>
                <p style={{'color':'grey', 'marginTop':'30px'}}>Filters</p>
                <div>
                <select name="" className="raman">
                    <option value="">Category</option>
                </select>
                </div>

                <div style={{'display':'flex', gap:'50px'}}>

                <div >
                    <div>
                        <select name="" className="raman">
                        <option value="">Sizes</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Brand</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Color</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Design</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Fit</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Sleeve</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Neck</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Type</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Rating</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Discount</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Sort By</option>
                        </select>
                    </div>

                    <div>
                        <select name="" className="raman">
                        <option value="">Category</option>
                        </select>
                    </div>
                
                    </div>

                    <div className="cards">
                    {data && data.map(ele=>(
                            <div>
                                <img src={ele.url} alt="" />
                                <div style={{'display':'flex', "justifyContent":'space-between'}}>
                                <p style={{'color':'#5d5765 ', "fontSize":"14px"}} >{ele.brand}</p>
                                <p style={{'fontSize':'25px',marginBottom:"-10px"}}>♡</p>
                                </div>
                                
                                <p style={{'color':'#979797  ', "fontSize":"12px"}}>{ele.name}</p>
                                <div style={{'display':'flex', gap:'10px'}}>
                                    <p style={{fontWeight:'bold', fontSize:'18px'}} >{`₹${ele.price}`}</p>
                                    <p style={{textDecoration: 'line-through', color:'#979797 ', fontSize:''}}>{`₹${ele.dPrice}`}</p>
                                </div>
                                <p style={{width:"150px",'fontSize':'13px', "fontWeight":'bold','background':'#f7f7f7 '}}>{`₹${ele.price-69} for Tribe Members`}</p>
                            </div>
                            
                        ))}
                    </div>
                       
                   
                   
                </div>
                
               
            </div>

            
        
           
        </div>
    </div>

        
    </>
}

export default Product;