import { border } from "@chakra-ui/react";
import React from "react";

    const data1=[
        {
            id:1,
            url:'https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1664353714.gif',
            name:'Design of the Day'
        },

        {
            id:2,
            url:'https://images.bewakoof.com/uploads/grid/app/bestseller-1660921671.jpg',
            name:'Bestseller'
        },
        {
            id:3,
            url:'https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg',
            name:'Customization'
        },
        {
            id:4,
            url:'https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg',
            name:'New Arrivals'
        },
        {
            id:5,
            url:'https://images.bewakoof.com/uploads/grid/app/last-sizes-1660921673.jpg',
            name:'Last Size Left'
        },
        {
            id:6,
            url:'https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg',
            name:'Plus Size'
        },
        {
            id:7,
            url:'https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg',
            name:'Official Collabration'
        },
        {
            id:8,
            url:'https://images.bewakoof.com/uploads/grid/app/vote-1660921675.jpg',
            name:'Vote for design'
        },
        {
            id:9,
            url:'https://images.bewakoof.com/uploads/grid/app/PC-1660921675.jpg',
            name:'Personal Care'
        }
    ]

    const data2=[
        {
            id:1,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-printedtees-1661866118.jpg',
           
        },
        {
            id:2,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-plaintees-1661866117.jpg',
           
        },
        {
            id:3,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-oversizedtees-1661866116.jpg',
           
        },
        {
            id:4,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-7-1662981567.jpg',
           
        },
        {
            id:5,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-8-1662981567.jpg',
           
        },
        {
            id:6,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-6-1662981566.jpg',
           
        },
        {
            id:7,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-1661866109.jpg',
           
        },
        {
            id:8,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1661866115.jpg',
           
        },
        {
            id:9,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg',
           
        },
        {
            id:10,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg',
           
        },
        {
            id:11,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-shorts-1661866118.jpg',
           
        },
        {
            id:12,
            url:'https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-covers-1661866111.jpg',
           
        },
        

    ]

    const data3=[
        {
            id:1,
            url:'https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2-at-599-1663944665.jpg'
        },
        {
            id:2,
            url:'https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-clearance-zone-1663691417.jpg'
        },
        {
            id:3,
            url:'https://images.bewakoof.com/uploads/grid/app/midsize-banner-Flat65Off-men-1663691416.jpg'
        },
        {
            id:4,
            url:'https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2at899--1--1664261158.jpg'
        }
    ]

    const data4=[
        {
            id:1,
            url:'https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-vests-men21-1661708908.jpg'
        },
        {
            id:2,
            url:'https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-pyjamas-1664210626.png'
        },
        {
            id:3,
            url:'https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-boxers-men1-1664210626.jpg'
        },
        {
            id:4,
            url:'https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-new-sliders---Copy-1664210627.jpg'
        }
    ]

    const data5=[
        {
            id:1,
            url:'https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131.jpg'
        },
        {
            id:2,
            url:'https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bottomwear-Men-1663680166.jpg'
        },
        {
            id:3,
            url:'https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bottomwear-Men-1663680166.jpg'
        },
        {
            id:4,
            url:'https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner2-1663930062.jpg'
        }
    ]

    

function Data1(){
    return <>
        <div style={{display:'flex',gap:'10px', justifyContent:'center',marginTop:'20px' }}>
        {data1.map(ele=>(
                <div  key={ele.id}>
                    <img width={'120px'} src={ele.url} alt="404 Error" />
                    <p style={{textAlign:'center', width:'100px', fontSize:'13px', fontWeight:'bold'}}>{ele.name}</p>
                </div>
                
            ))}
        </div>
           
       
    </>
}

function Data2(){
   
    return <>
        <div style={{display:'grid', gridTemplateColumns:'repeat(6,1fr)',width:'101%'}}>
            {data2.map(ele=>(
                
                    <img key={ele.id} src={ele.url} alt="" />
               
                
            ))}
        </div>
    </>
}

function Data3(){
   
    return <>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)',width:'100.5%', }}>
            {data3.map(ele=>(
                <div>
                    <img width={'99%'} key={ele.id} src={ele.url} alt="" />
                </div>
                    
               
                
            ))}
        </div>

        
    </>
}

function Data4(){
   
    return <>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)',width:'100.5%', }}>
            {data4.map(ele=>(
                <div>
                    <img width={'99%'} key={ele.id} src={ele.url} alt="" />
                </div>
                    
               
                
            ))}
        </div>

        
    </>
}

function Data5(){
   
    return <>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)',width:'100.5%', }}>
            {data5.map(ele=>(
                <div>
                    <img width={'99%'} key={ele.id} src={ele.url} alt="" />
                </div>
                    
               
                
            ))}
        </div>

        
    </>
}



export {Data1,Data2,Data3, Data4,Data5};