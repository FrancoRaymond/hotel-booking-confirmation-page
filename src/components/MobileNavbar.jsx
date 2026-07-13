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
    <div className='flex items-center justify-between'>
        <img src={logo} alt="maison soleil logo" />
        <nav className={menuOpen ? '' : 'hidden'}>
            <ul>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm p-2 rounded-sm'>
                        <img src={yourstay} alt="" />
                        <p >Your stay</p>
                    </a>
                </li>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm p-2 rounded-sm'>
                        <img src={house} alt="" />
                        <p >The house</p>
                    </a>
                </li>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm p-2 rounded-sm'>
                        <img src={pin} alt="" />
                        <p >Around town</p>
                    </a>
                </li>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm p-2 rounded-sm'>
                        <img src={breakfast} alt="" />
                        <p >Breakfast</p>
                    </a>
                </li>
                <li>
                    <a href="" className='flex items-center gap-2 text-sm p-2 rounded-sm'>
                        <img src={messages} alt="" />
                        <p >Messages</p>
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
