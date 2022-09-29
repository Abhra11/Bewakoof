// Import Swiper React components
import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, } from "swiper";

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
      modules={[Autoplay, Pagination ]}
    >
      {data2.map(ele=>(
        <SwiperSlide key={ele.id}><img width={'500px'} src={ele.url} alt="" /></SwiperSlide>
      ))}
      
    </Swiper>
  );
};
export {Swiperr,Swiperr2};