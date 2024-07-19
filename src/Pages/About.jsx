import React from 'react'
import ComputerPic1 from "../Assets/Images/Computer1.png"
import ComputerPic2 from "../Assets/Images/Computer2.png"
import KeyboardPic from "../Assets/Images/keyboard.png"
import HeadsetPic from "../Assets/Images/headset.png"


const About = () => {
  return (
    <div className='w-full h-[87vh] relative mx-auto '>
      <div className='w-full h-full absolute z-10'>
        <div className='absolute mt-[120px] mx-10'>
          <img className='w-[380px]  float-to-left' src={ComputerPic1} alt="" />
          <img className='w-[380px] mt-12 float-to-left' src={KeyboardPic} alt="" />
        </div>
        <div className='absolute mt-[120px] mx-10 right-20'>
          <img className='w-[380px] float-to-right' src={ComputerPic2} alt="" />
          <img className='w-[220px] float-to-right mt-12 ml-10' src={HeadsetPic} alt="" />
        </div>
      <div className='w-full h-full flex mx-auto mt-32'>
        <div className='mx-auto float-up'>
          <h1 className='text-5xl font-bold mt-10 text-white drop-shadow-xl uppercase text-center'>About Us</h1>
          <p className='mt-10 text-white font-semibold drop-shadow-xl leading-loose text-center'>Welcome to our online store, where we provide high quality merchandise at unbeatable prices.<br/>Our customer service is unmatched, and that we stock all the newest and greatest items on store.</p>
          <p className='mt-10 text-white font-semibold drop-shadow-xl leading-loose text-center'>We are a well renowned store in providing wholesale & retail products that has continually featured <br/> a variety of high quality and affordable products since day one.</p>
          <p className='mt-10 text-white font-semibold drop-shadow-xl leading-loose text-center'>Our passion for excellence has driven us from the beginning, and continues to drive us in the future creating<br/> a line perfect for individuals. The team at Microsis knows that every product counts, and strives to make the entire<br/> shopping experience as rewarding and fun as possible.</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default About