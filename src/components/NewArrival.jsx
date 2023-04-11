import React from 'react'
import child from "../Images/child.png"
import man from "../Images/man.png"
import woman from "../Images/woman.png"

function NewArrival() {
  return (
    <div className='mt-16'>
        <p className=' pl-8 my-4 text-balck text-2xl'>New Arrivals</p>
        <div className="mx-8 my-4 flex-col flex jusify-center mx-auto  gap-2 md:flex-row">
          <div>
            <img src={woman} alt="woman " />
            <p className="my-4 px-4 text-black text-2xl font-semibold">New for Women</p>
         </div>
         <div>
            <img src={child} alt="child" />
            <p className='my-4 px-4 text-black text-2xl font-semibold'>
                New for Kids
            </p>
         </div>
         <div>
            <img src={man} alt="man" />
            <p className="my-4 px-4 text-black text-2xl font-semibold">
                New for Men
            </p>
         </div>
        </div>
    </div>
  )
}

export default NewArrival