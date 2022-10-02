// Import Swiper React components
import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
const data=[
    {
        id:1,
        url:'https://images.bewakoof.com/uploads/grid/app/oof-new-men-1-1664352274.gif'
    },
    {
        id:2,
        url:'https://images.bewakoof.com/uploads/grid/app/winter-men-banner-1663943605.gif'
    },
    {
        id:3,
        url:'https://images.bewakoof.com/uploads/grid/app/revamped-banners-B1G1-men-1663834972.jpg'
    },
    {
        id:4,
        url:'https://images.bewakoof.com/uploads/grid/app/b2g1-men-1663944664.jpg'
    },
    {
        id:5,
        url:'https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-refreshed-1664257073.jpg'
    }
]

const data2=[
  {
    id:1,
    url:'https://images.bewakoof.com/uploads/grid/app/pants-1x1-upto-70--m-1664359504.gif'
},
{
    id:2,
    url:'https://images.bewakoof.com/uploads/grid/app/ColorSplash-StaticBanner-Men-01-Live-1663744899.jpg'
},
{
    id:3,
    url:'https://images.bewakoof.com/uploads/grid/app/StaticBanner-FestiveCoords-men-01-1664383562.gif'
},
{
    id:4,
    url:'https://images.bewakoof.com/uploads/grid/app/buy-3-8992-1663691414.jpg'
},
// {
//     id:5,
//     url:'https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-refreshed-1664257073.jpg'
// }
]

const data3=[
  {
    id:1,
    url:'https://images.bewakoof.com/t320/starboy-oversized-fit-t-shirt-545603-1664287564-1.jpg',
    price:456,
    dPrice:999,


},
{
    id:2,
    url:'https://images.bewakoof.com/t320/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg',
    price:669,
    dPrice:1009,
},
{
    id:3,
    url:'https://images.bewakoof.com/t320/men-s-black-genjutsu-t-shirt-390475-1655747919-1.jpg',
    price:756,
    dPrice:1999,
},
{
    id:4,
    url:'https://images.bewakoof.com/t320/men-s-black-stripe-minion-relaxed-fit-t-shirt-452883-1655751697-1.jpg',
    price:499,
    dPrice:669
},
{
    id:5,
    url:'https://images.bewakoof.com/t320/starboy-oversized-fit-t-shirt-545597-1664287601-1.jpg',
    price:789,
    dPrice:1999
},
{
  id:6,
  url:'https://images.bewakoof.com/t320/men-s-black-moon-knight-oversize-fit-t-shirt-522479-1659680064-1.jpg',
  price:456,
  dPrice:999,
},
{
  id:7,
  url:'https://images.bewakoof.com/t320/savvy-redmen-aop-t-shirt-464968-1656045539-1.jpg',
  price:309,
  dPrice:999,
},
{
  id:8,
  url:'https://images.bewakoof.com/t320/don-t-grow-up-half-sleeve-t-shirt-544706-1664256006-1.jpg',
  price:379,
  dPrice:999,
},
{
  id:9,
  url:'https://images.bewakoof.com/t320/don-t-grow-up-half-sleeve-t-shirt-544706-1664256006-1.jpg',
  price:456,
  dPrice:999,
 },
// {
//   id:5,
//   url:'https://images.bewakoof.com/t320/don-t-grow-up-half-sleeve-t-shirt-544706-1664256006-1.jpg'
// }
]

const data4=[
  {
    id:1,
    url:'https://images.bewakoof.com/t320/men-s-black-vibes-t-shirt-298518-1655747879-5.jpg',
    price:456,
    dPrice:999,


},
{
    id:2,
    url:'https://images.bewakoof.com/t320/men-s-black-dab-marshmello-t-shirt-206423-1655747893-1.jpg',
    price:669,
    dPrice:1009,
},
{
    id:3,
    url:'https://images.bewakoof.com/t320/white-half-sleeve-t-shirt-105-1659608382-1.jpg',
    price:756,
    dPrice:1999,
},
{
    id:4,
    url:'https://images.bewakoof.com/t320/men-s-black-t-shirt-106-1659608016-5.jpg',
    price:499,
    dPrice:669
},
{
    id:5,
    url:'https://images.bewakoof.com/t320/batman-outline-logo-full-sleeve-t-shirt-bml-black-283891-1655748205-1.jpg',
    price:789,
    dPrice:1999
},
{
  id:6,
  url:'https://images.bewakoof.com/t320/men-s-white-t-shirt-1093-1655746832-1.jpg',
  price:456,
  dPrice:999,
},
{
  id:7,
  url:'https://images.bewakoof.com/t320/men-s-red-t-shirt-183125-1659522723-5.jpg',
  price:309,
  dPrice:999,
},
{
  id:8,
  url:'https://images.bewakoof.com/t320/men-s-full-sleeve-t-shirts-1094-1659608683-1.jpg',
  price:379,
  dPrice:999,
},
{
  id:9,
  url:'https://images.bewakoof.com/t320/men-s-blue-t-shirt-1092-1659608123-2.jpg',
  price:456,
  dPrice:999,
 },
{
  id:10,
  url:'https://images.bewakoof.com/t320/men-s-black-vibes-t-shirt-298518-1655747859-1.jpg',
  price:669,
  dPrice:969,
},

]

 const Swiperr = () => {
  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination ]}
    >
      {data.map(ele=>(
        <SwiperSlide key={ele.id}><img width={'500px'} src={ele.url} alt="" /></SwiperSlide>
      ))}
      
    </Swiper>
  );
};

const Swiperr2 = () => {
  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination]}
    >
      {data2.map(ele=>(
        <SwiperSlide key={ele.id}><img width={'500px'} src={ele.url} alt="" /></SwiperSlide>
      ))}
      
    </Swiper>
  );
};

const Swiperr3 = () => {
  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      pagination={{
        clickable: true,
      }}
      //  navigation
       scrollbar={{ draggable: true }}
      modules={[Autoplay, Pagination]}
    >
      <div>
        {data3.map(ele=>(
          
          <SwiperSlide key={ele.id}><img width={'300px'} src={ele.url} alt=""  />
          <div style={{display:'flex', gap:'30px'}}>
          <p style={{fontWeight:'bold', fontSize:'18px'}}>{`₹${ele.price}`}</p>
          <p style={{textDecoration: 'line-through', color:'#979797 ', fontSize:''}}>{ele.dPrice}</p>
          </div>
          
          </SwiperSlide>
        ))}
      </div>
      
      
    </Swiper>
   
  );
};

const Swiperr4 = () => {
  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      pagination={{
        clickable: true,
      }}
      //  navigation
       scrollbar={{ draggable: true }}
      modules={[Autoplay, Pagination]}
    >
      <div>
        {data4.map(ele=>(
          
          <SwiperSlide key={ele.id}><img width={'300px'} src={ele.url} alt="ERROR"  />
          <div style={{display:'flex', gap:'30px'}}>
          <p style={{fontWeight:'bold', fontSize:'18px'}}>{`₹${ele.price}`}</p>
          <p style={{textDecoration: 'line-through', color:'#979797 ', fontSize:''}}>{ele.dPrice}</p>
          </div>
          
          </SwiperSlide>
        ))}
      </div>
      
      
    </Swiper>
   
  );
};
export {Swiperr,Swiperr2,Swiperr3,Swiperr4};