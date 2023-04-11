import React from 'react'
import letsgo1 from "../Images/letsgo1.png"
import letsgo2 from "../Images/letsgo2.png"

function LetsGo() {
  return (
    <div className="mt-16">
        <p>
            <span className='pl-8 my-4 text-xl text-black'>Let's Go</span>
        </p>
        <div className="mx-8 my-4  md:flex-row flex-col flex justify-center gap-2">
            <div className=" relative">
                <img src={letsgo1} alt="letsgo"/>
                <div className="absolute flex-col flex bottom-24 md:bottom-32 font-bold h-24 left-8 md:left-12 text-white  text-xs md:text-2xl">
                <div className="py-2">Nike Trails</div>
                <div className="px-2">Styles for trail running</div>
                <div className="px-2">Featuring the wild house 8</div>
                <p className="py-2 bg-white text-black w-[250px] px-4  text-center rounded-3xl">
                Shop Nike Trail
                </p>
            </div>
            </div>
            <div className="relative">
                <img src={letsgo2} alt="letsgo" />
                <div className="absolute bottom-8 md:bottom-32 left-8 md:left-12 text-white text-2xl flex flex-col h-24 font-bold text-md  ">
                  <div className="py-4">Tourney Fan Gear</div>
                  <p className="mt-4 w-[100px] rounded-3xl text-center px-2 py-2 text-black bg-white">Shop</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default LetsGo