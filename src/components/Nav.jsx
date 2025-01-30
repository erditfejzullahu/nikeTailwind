import React, { useState } from 'react'
import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from '../constants'

const Nav = () => {
    const [showHamburgerItems, setShowHamburgerItems] = useState(false)
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/" >
                <img src={headerLogo} alt="Logo" width={130} height={29}/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={`mainmenu-${item.label}`}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block cursor-pointer" onClick={() => setShowHamburgerItems(!showHamburgerItems)}>
                <img src={hamburger} alt="Hamburger" width={25} height={25}/>
            </div>
            {showHamburgerItems && <div className="absolute fade-in self-start items-center right-8 mt-10 z-50">
                <ul className=" flex-col bg-white shadow-2xl  gap-14 p-4 rounded-[10px] border border-slate-100  animate-pulse">
                    {navLinks.map((item) => (
                        <li key={`hamburger-${item.label}`} className="p-1">
                            <a href={item.href} className="text-lg leading-normal font-montserrat text-slate-gray animate border-b border-coral-red hover:text-coral-red">{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>}
        </nav>
    </header>
  )
}

export default Nav