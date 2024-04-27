import React, {useState, useEffect} from 'react'
import './home.scss'
import Hero_img  from '../../Components/Home/img/4.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation ,Autoplay} from 'swiper/modules';
import bn1 from '../Home/img/banner-1.png.svg'
import bn2 from '../Home/img/banner-2.png.svg'
import bn3 from '../Home/img/banner-3.png.svg'

import axios from '../../Api/Index'

const Home = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
      axios
        .get("/products")
        .then(res => setData(res.data.products))
        .catch(res => console.log(res))
    },[])
  
    let products = data?.slice(0,9).map((el)=> <div className='card' key={el.id}>
        <img src={el.images[0]} alt="" />
~      <h2>{el.title}</h2>
      <button>Learn more</button>
    </div>)

    
  return (
    <>
    <main className='Container'>
    <Swiper loop={true}
           navigation={true}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
            modules={[Navigation,Autoplay]} className="mySwiper">
        <SwiperSlide><img src= {Hero_img} alt="" /></SwiperSlide>
        <SwiperSlide><img src= "https://picsum.photos/1024/480/?image=54" alt="" /></SwiperSlide>
        <SwiperSlide><img src= 'https://picsum.photos/1024/480/?image=54' alt="" /></SwiperSlide>
        <SwiperSlide><img src= 'https://images.pexels.com/photos/16131605/pexels-photo-16131605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" /></SwiperSlide>
 
      </Swiper>

      <section>
          <div className="boxs">
            <div className="box" style={{background:`url(${bn1})` }}>
                <h3>Everyday Fresh &
Clean with Our
Products</h3>
<button>Shop Now</button>
            </div>
            <div className="box" style={{background:`url(${bn2})` }}>
                <h3>Make your Breakfast
Healthy and Easy</h3>
<button>Shop Now</button>
            </div>
            <div className="box" style={{background:`url(${bn3})` }}>
                <h3>Make your Breakfast
Healthy and Easy</h3>
<button>Shop Now</button>
            </div>
          </div>
           <div className="products">
                {products}
           </div>
      </section>
    </main>
    
    </>
  )
}

export default Home