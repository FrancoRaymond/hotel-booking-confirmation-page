import React from 'react'
import key from '../assets/images/icon-key.svg'
import breakfast from '../assets/images/icon-breakfast.svg'
import wifi from '../assets/images/icon-wifi.svg'

const Benefits = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-5 mt-10'>
        <div className='bg-white rounded-2xl p-3 border border-gray-200'>
            <div className='flex items-center gap-3'>
                <div className='bg-[#9e3e1d] rounded-sm p-1 w-fit'>
                    <img src={key} alt="" />
                </div>
                <span className='text-[#9e3e1d] font-semibold text-sm flex-1'>ARRIVAL</span>
                <span className='text-[#9e3e1d] font-["Fraunces"] text-2xl font-semibold'>01</span>
            </div>
            <h1 className='font-["Fraunces"] text-gray-800 text-2xl font-semibold mt-6'>Check-in from 15:00</h1>
            <span className='text-xs text-gray-400 mt-3'>Sat, 25 April</span>
            <p className='text-gray-600 mt-3'>Ring the brass bell by the blue door. If were at the market, the key is in the terracotta pot by the olive tree.</p>
        </div>
        <div className='bg-white rounded-2xl p-3 border border-gray-200'>
            <div className='flex items-center gap-3'>
                <div className='bg-[#5568c7] rounded-sm p-1 w-fit'>
                    <img src={wifi} alt="" />
                </div>
                <span className='text-[#5568c7] font-semibold text-sm flex-1'>WIFI</span>
                <span className='text-[#5568c7] font-["Fraunces"] text-2xl font-semibold'>02</span>
            </div>
            <h1 className='font-["Fraunces"] text-gray-800 text-2xl font-semibold mt-6'>Le Soleil - Guest</h1>
            <span className='text-xs text-gray-400 mt-3'>Password below</span>
            <div className='bg-gray-100 rounded-lg p-2 flex items-cente justify-between text-sm mt-5'>
                <span className='text-gray-500'>NETWORK</span>
                <span className='text-gray-800'>Le soleil - Guest</span>
            </div>
            <div className='bg-gray-100 rounded-lg p-2 flex items-cente justify-between text-sm gap-2 mt-2'>
                <span className='text-gray-500 flex-1'>PASSWORD</span>
                <span className='text-gray-800'>soleil-2026</span>
                <button className='text-xs text-gray-500 py-0.5 px-2 border border-[#9e3e1d] rounded-3xl cursor-pointer'>COPY</button>
            </div>
        </div>
        <div className='bg-white rounded-2xl p-3 border border-gray-200'>
            <div className='flex items-center gap-3'>
                <div className='bg-[#c34c74] rounded-sm p-1 w-fit'>
                    <img src={breakfast} alt="" />
                </div>
                <span className='text-[#c34c74] font-semibold text-sm flex-1'>BREAKFAST</span>
                <span className='text-[#c34c74] font-["Fraunces"] text-2xl font-semibold'>03</span>
            </div>
            <h1 className='font-["Fraunces"] text-gray-800 text-2xl font-semibold mt-6'>Served 8 - 10:30</h1>
            <span className='text-xs text-gray-400 mt-3'>On the terrance</span>
            <p className='text-gray-600 mt-3'>Fresh figs, Marseille honey, pain au levain, and espresso, Gluten-free option? Leave a note the night before.</p>
        </div>
    </div>
  )
}

export default Benefits
