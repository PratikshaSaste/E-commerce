import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
        <div className="my-10 flex flex-col md:flex-row gap-16">
           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
           <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-60">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero ratione, voluptas illum iste incidunt dicta suscipit? Laborum, incidunt possimus! Nihil illo placeat aperiam quos esse, eaque maxime nulla ullam.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur magni qui corrupti fuga fugiat quisquam illum, nemo voluptatem esse ipsam. Possimus aut hic incidunt modi. Aspernatur esse debitis unde voluptatem.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sit! Assumenda, tenetur cupiditate omnis ea at voluptatibus, labore aliquam nihil, sit ex ullam quaerat. Illum fugit accusantium ullam nam dolorem.</p>
           </div>
         </div>
         <div className='text-xl py-4'>
           <Title text1={"WHy"} text2={"CHOOSE US"}/>
         </div>

         <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-20 flex flex-col gap-5">
            <b>Qality Assrance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium illum doloribus repellendus reiciendis quo nostrum adipisci assumenda porro accusamus ad sed, inventore voluptates libero nihil autem delectus a earum. Veniam.</p>
          </div>

          <div className="border px-10 md:px-16 py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium illum doloribus repellendus reiciendis quo nostrum adipisci assumenda porro accusamus ad sed, inventore voluptates libero nihil autem delectus a earum. Veniam.</p>
          </div>

          <div className="border px-10 md:px-16 py-20 flex flex-col gap-5">
            <b>Exceptional Cstomer Service </b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium illum doloribus repellendus reiciendis quo nostrum adipisci assumenda porro accusamus ad sed, inventore voluptates libero nihil autem delectus a earum. Veniam.</p>
          </div>
         </div>
         <NewsletterBox/>
    </div>
  )
}

export default About