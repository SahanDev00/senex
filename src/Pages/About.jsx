import React from 'react'
import ComputerPic1 from "../Assets/Images/Computer1.png"
import ComputerPic2 from "../Assets/Images/Computer2.png"
import KeyboardPic from "../Assets/Images/keyboard.png"
import HeadsetPic from "../Assets/Images/headset.png"
import background from "../Assets/Images/background.jpg"


const About = () => {
  return (
    <div className='w-full h-[80vh] relative mx-auto mt-4'>
      <div className='w-full h-full absolute z-10'>
        <div className='absolute mt-[120px] mx-10'>
          <img className='w-[350px]' src={ComputerPic1} alt="" />
          <img className='w-[350px] mt-12' src={KeyboardPic} alt="" />
        </div>
        <div className='absolute mt-[120px] mx-10 right-0'>
          <img className='w-[350px]' src={ComputerPic2} alt="" />
          <img className='w-[200px] mt-12 ml-10' src={HeadsetPic} alt="" />
        </div>
      <div className='w-full h-full flex mx-auto mt-32'>
        <div className='mx-auto'>
          <h1 className='text-5xl font-semibold mt-10 text-white drop-shadow-xl uppercase'>About Us</h1>
          <p className='mt-10 text-white drop-shadow-xl'>Welcome to our online store, where we provide high quality merchandise at unbeatable prices.<br/>Our customer service is unmatched, and that we stock all the newest and greatest items on store.</p>
          <p className='mt-10 text-white drop-shadow-xl'>We are a well renowned store in providing wholesale & retail products that has continually featured <br/> a variety of high quality and affordable products since day one.</p>
          <p className='mt-10 text-white drop-shadow-xl'>Our passion for excellence has driven us from the beginning, and continues to drive us in the future creating<br/> a line perfect for individuals. The team at Microsis knows that every product counts, and strives to make the entire<br/> shopping experience as rewarding and fun as possible.</p>
        </div>
      </div>
      </div>
      <div className='bg-black'>
          <img src={background} alt="" className='w-full h-[80vh] opacity-70' />
      </div>
    </div>
  )
}

export default About