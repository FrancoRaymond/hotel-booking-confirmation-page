import React from 'react'
import barcode from '../assets/images/icon-barcode.svg'
import sun from '../assets/images/icon-sun.svg'
import illustrationSun from '../assets/images/illustration-sun.svg'
import sparkle from '../assets/images/icon-sparkle.svg'

const ReceiptAndWelcomeCards = () => {
  return (
    <div className='mt-5 lg:flex items-center gap-4'>
        <div className='bg-white rounded-2xl p-3 w-full'>
            <div className='flex justify-between items-center p-3'>
                <div className='flex flex-col'>
                    <span className='text-gray-500 text-xs'>RECEIPT</span>
                    <span className='font-["Fraunces"] text-xl'>Your stay</span>
                </div>
                <div className=' text-gray-500 flex flex-col text-xs'>
                    <p>No MS-2026</p>
                    <p>0421 - AH</p>
                </div>
            </div>
            <div className='p-4 border-y border-dashed border-gray-300 flex items-center justify-around'>
                <div className="flex flex-col gap-2.5 text-gray-600 text-sm ">
                    <p>CHECK IN</p>
                    <span className='text-3xl font-semibold text-black font-["Fraunces"]'>25 Apr</span>
                    <p>Saturday - 15:00</p>
                </div>
                <div className="flex flex-col gap-2.5 text-gray-600 text-sm ">
                    <p>CHECK OUT</p>
                    <span className='text-3xl font-semibold text-black font-["Fraunces"]'>29 Apr</span>
                    <p>Wednesday - 11:00</p>
                </div>
            </div>
            <div className='py-4 text-sm flex flex-col gap-1.5'>
                <div className='flex justify-between'>
                    <span>Room - La Garrigue * 4 nights</span>
                    <span className='text-gray-700'>R 620.00</span>
                </div>
                <div className='flex justify-between'>
                    <span>Breakfast *  2 guests</span>
                    <span className='text-gray-700'>R 96.00</span>
                </div>
                <div className='flex justify-between text-gray-600'>
                    <span>Tourist tax</span>
                    <span className='text-gray-700'>R 14.40</span>
                </div>
            </div>
            <div className='flex flex-col gap-3 py-3 border-t-2 border-gray-400'>
                <div className='flex items-center justify-between'>
                    <span className='flex justify-between text-gray-600 text-sm'>TOTAL PAID</span>
                    <span className='text-2xl font-semibold text-black font-["Fraunces"]'>R 730.40</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='flex justify-between text-gray-600 text-xs'>PAID . WISE . GBP</span>
                    <img src={barcode} alt="barcode" className='flex items-center justify-between'/>
                </div>
            </div>
        </div>
        <div className='rounded-2xl p-3 bg-[#9e3e1d] flex flex-col w-full'>
            <div className='flex justify-between border-t border-dashed border-gray-300 py-3 mb-5'>
                <span className='text-gray-300 text-sm'>WELCOME CARD</span>
                <img src={sun} alt="" className=''/>
            </div>
            <span className='font-["Fraunces"] text-[#f2b23a] text-2xl font-semibold'>A note from your host,</span>
            <h1 className='font-["Fraunces"] font-semibold text-3xl text-gray-50 mt-2'>Margaux.</h1>
            <p className='text-gray-300 mt-6'>We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.</p>
            <span className='text-gray-300 mt-20 text-sm'>ROOM</span>
            <span className='font-["Fraunces"] text-2xl text-gray-50'>La Garrigue</span>
        </div>
    </div>
  )
}

export default ReceiptAndWelcomeCards
