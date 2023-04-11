import React from 'react'
import trendingpic from "../Images/trending.png"

function Trending() {
  return (
    <div className='mt-16 '>
        <p className="pl-8 my-4 text-2xl">Trending</p>
        <div className="flex-col flex items-center">
            <img src={trendingpic} alt="trendingpic"className='px-8'/>
            <div className=" text-center md:text-md text-gray-500 flex flex-col mt-4 ">
            <h1 className="font-bold text-5xl  text-black">NIKE STYLE</h1>
            <p> Shop Stylist Miyako Bellizi's look for a fit that works all day , everyday</p>
            <div className="gap-4 my-6 flex  justify-center">
          <div className="bg-black text-white px-4 py-2 rounded-3xl">
            Shop 
          </div>
        </div>
            
        </div>
        </div>
    </div>
  )
}

export default Trending