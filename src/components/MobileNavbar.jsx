import React,{useState} from 'react'
import logo from '../assets/images/logo.svg'
import yourstay from '../assets/images/icon-bed.svg'
import house from '../assets/images/icon-house.svg'
import pin from '../assets/images/icon-pin.svg'
import breakfast from '../assets/images/icon-breakfast-outline.svg'
import messages from '../assets/images/icon-mail.svg'
import hamburgermenu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-close.svg'

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='relative flex items-center justify-between bg-[#fbf6f0] py-2 md:hidden'>
        <img src={logo} alt="maison soleil logo" />
        <nav className={`absolute border-t py-3 border-gray-300 top-14 left-0 w-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out origin-top ${menuOpen ? 'h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'}`}>
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
        </nav>  
        <button onClick={() => setMenuOpen(!menuOpen)} className='cursor-pointer'>
            <img src={menuOpen ? close : hamburgermenu} alt="" />
        </button>        
    </div>
  )
}

export default MobileNavbar
