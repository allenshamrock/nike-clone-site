import React from 'react'
import after1 from "../Images/after1.png"
import after2 from "../Images/after2.png"
import after3 from "../Images/after3.png"

function AfterMembership() {
  return (
    <div className='mt-16'>
        <div className="flex flex-col md:flex-row justify-center md:mx-8 my-4 md:my-8 mx-4 mx-auto gap-2">
            <div className='relative'>
                <img src={after1} alt="after pic" />
                <div className=" absolute flex flex-col h-24  md:bottom-16 bottom-8 left-0 left-12 text-black">
                  <div className="py-2 text-xs">Member shop</div>
                  <div className="py-2 text-2xl">Shop Exclusive member</div>  
                  <div className="py text-2xl">Styles</div>
                  </div>
            </div>
            <div className='relative'>
                <img src={after2} alt="after 2" />
                <div className="absolute flex flex-col md:bottom-16 bottom-8 left-0 left-12 text-black">
                    <div className="py-2 text-xs">Shopping it as it should be</div>
                    <div className="py-2 text-2xl">Free standard shipping for all</div>
                    <div className="py-2 text-2xl">orders</div>
                </div>
            </div>
            <div className='relative'>
                <img src={after3} alt="after3" />
                <div className="absolute flex flex-col md:bottom-16 bottom-8 left-0 left-12 text-black">
                    <div className="py-2 text-xs">Nike By You</div>
                    <div className="py-2 text-2xl">Customize your so-you shoe</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AfterMembership