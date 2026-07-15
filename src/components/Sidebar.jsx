import React from 'react'
import logo from '../assets/images/logo.svg'
import yourstay from '../assets/images/icon-bed.svg'
import house from '../assets/images/icon-house.svg'
import pin from '../assets/images/icon-pin.svg'
import breakfast from '../assets/images/icon-breakfast-outline.svg'
import messages from '../assets/images/icon-mail.svg'
import NavFooter from './NavFooter'

const Sidebar = () => {
  return (
    <div className='hidden md:flex flex-col justify-between h-screen w-80 py-5 px-4'>
        <img src={logo} alt="maison soleil logo" className='w-24' />
        <nav className='border-t py-4 border-gray-300 flex flex-col h-screen mt-4'>
            <ul>
                <li>
                    <a href="" className='flex bg-white items-center justify-between gap-2 text-sm py-2.5 px-4 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <img src={yourstay} alt="" />
                            <p >Your stay</p>
                        </div>
                        <p className='text-[8px] p-0.5 size-4 flex items-center justify-center rounded-full bg-[#ba3e19] text-white'>1</p>
                    </a>
                </li>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm py-2.5 px-4 rounded-sm'>
                        <img src={house} alt="" />
                        <p className='text-gray-600'>The house</p>
                    </a>
                </li>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm py-2.5 px-4 rounded-sm'>
                        <img src={pin} alt="" />
                        <p className='text-gray-600'>Around town</p>
                    </a>
                </li>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm py-2.5 px-4 rounded-sm'>
                        <img src={breakfast} alt="" />
                        <p className='text-gray-600'>Breakfast</p>
                    </a>
                </li>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm py-2.5 px-4 rounded-sm'>
                        <img src={messages} alt="" />
                        <p className='text-gray-600'>Messages</p>
                    </a>
                </li>
            </ul>
            <NavFooter />
        </nav>  
    </div>
  )
}

export default Sidebar
