import React from 'react'
import membership from "../Images/membership.png"

function Membership() {
  return (
    <div className='mt-16'>
        <p className='pl-8 text-black text-2xl'>New Membership</p>
        <div className="relative py-12 bg-black mx-4 md:mx-8 my-4 md:my-4 ">
            <img src={membership} alt="membership" />
            <div className="absolute flex flex-col top-0 md:top-2 text-sm left-2 md:left-12 text-white md:text-2xl">
              <div className="text-md md:text-4xl font-bold">BECOME A</div>
              <div className="text-md md:text-4xl font-bold">NIKE MEMBER</div>
              <p className='text-sm md:text-md  my-2 w-[70%]'>Sign up free to join the community </p>
              <div className="flex md:gap-4 gap-2 my-4">
                <p className="bg-white text-black text-md w-[100px] px-2 py-2 rounded-3xl text-center">Join Us</p>
                <p className="bg-white text-black text-md w-[100px] px-2 py-2 rounded-3xl text-center">Sign in</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Membership