import React from 'react'
import ReceiptAndWelcomeCards from './ReceiptAndWelcomeCards'

const MainPage = () => {
  return (
    <div className='w-full md:ml-2 md:border-l border-gray-300 md:pl-3 py-5'>
      <div className='flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center justify-between'>
        <div>
            <p className='text-gray-500 text-xs'>BOOKING . CONFIRMED</p>
            <h1 className='flex items-center text-2xl md:text-3xl font-["Fraunces"]'>
                <span className=''>Bienvanue,</span>
                <span className='text-[#9e3e1d]'>Lucia.</span>
            </h1>
        </div>
        <div className='flex items-center gap-2 text-sm'>
            <button className='py-1 px-3 rounded-3xl text-black border border-gray-300 cursor-pointer'>Print receipt</button>
            <button className='bg-black text-white py-1 px-3 rounded-3xl cursor-pointer'>Add to calender</button>
        </div>
      </div>
      <ReceiptAndWelcomeCards />
      <div></div>
    </div>
  )
}

export default MainPage
