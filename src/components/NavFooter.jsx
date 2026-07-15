import React from 'react'
import iconWeather from '../assets/images/icon-weather.svg'

const NavFooter = () => {
    return (
        <div className='mt-auto p-1.5'>
            <div className="relative bg-[#f4d98a] flex flex-col gap-2.5 rounded-2xl p-4 text-gray-600 text-sm overflow-hidden">
                <img src={iconWeather} alt="" className='absolute -top-3 -right-3' />
                <p>TODAY IN CASSIS</p>
                <span className='text-4xl font-semibold text-black font-["Fraunces"]'>27°</span>
                <p>Sunny . light breeze</p>
            </div>
            <div className='mt-5 pt-5 border-t border-dotted text-gray-500 flex flex-col gap-3 text-sm'>
                <p>EST. 1987</p>
                <p>MAISON SOLEIL . 12 RUE DES OLIVIERS . CASSIS</p>
                <p>© 2026 MAISON SOLEIL</p>
            </div>
        </div>
    )
}

export default NavFooter
