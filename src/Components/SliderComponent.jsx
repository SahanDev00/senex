import React, { useState } from 'react'
import banner from "../Assets/Images/banner.jpg"
import banner2 from "../Assets/Images/banner2.jpg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComponent = () => {
  const details = [
    {
      text: 'Save up to 20%',
      heading: 'CATCH BIG',
      headingSpan: 'DEALS',
      Pic: banner,
      btnText: 'CLAIM',
      btnColour: "#22c55e",
      textColour: "#22c55e"
    },
    {
      text: 'Save up to 50%',
      heading: 'SUPPER',
      headingSpan: 'SALE',
      Pic: banner2,
      btnText: 'BUY NOW',
      btnColour: "#1d4ed8",
      textColour: "#1d4ed8"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2790,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next)
  };

  return (
    <div className='mt-5 w-[1330px] h-[400px] rounded-lg cursor-grab active:cursor-grabbing'>
      <Slider {...settings} className='w-full h-[400px]'>
          {details.map((detail, index) => (
            <div key={index}>
              <div className='absolute z-10 mt-24 ml-14 w-[350px]'>
                <p className={`font-semibold text-[19px] ${currentSlide === index ? 'float-up' : ''}`} style={{ color: detail.textColour }}>{detail.text}</p>
                <h1 className={`text-6xl font-bold text-white drop-shadow-lg ${currentSlide === index ? 'float-to-right' : ''}`}>
                  {detail.heading} <span style={{ color: detail.textColour }}>{detail.headingSpan}</span>
                </h1>
                <button className={`px-11 py-3 rounded-xl mt-4 text-lg font-semibold text-white hover:scale-105 duration-300 active:scale-95 ${currentSlide === index ? 'float-up' : ''}`} style={{ backgroundColor: detail.btnColour }}>
                  {detail.btnText}
                </button>
              </div>
              <div className='w-full h-[400px] rounded-lg'>
                  <img src={detail.Pic} alt="Banner" className='w-full h-full object-cover rounded-lg' />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;