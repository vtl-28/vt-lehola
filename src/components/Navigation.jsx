import React, { useState } from 'react'
import { Link } from 'react-scroll'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
   <nav className='sm:px-16 px-12 w-full flex items-center py-6 fixed top-0 z-20 bg-[#1f2235]'>
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link
          to='heroSection' smooth={true} offset={50} duration={1000}
    spy={true}
          className='flex items-center gap-2'
        >
          <p className='text-white text-[30px] font-bold cursor-pointer flex '>
            vt<span className='text-[#fe4a57]'>.</span>lehola
          </p>
        </Link>
        <ul className='flex-row hidden list-none md:flex gap-14'>
         
            <Link className='text-white' to='about' smooth={true} offset={50} duration={1000}
    spy={true}>
              <a href="#" className='text-lg font-semibold hover:text-[#fe4a57]'>About</a>
            </Link>
            <Link className='text-white'>
              <a href="#" className='text-lg font-semibold hover:text-[#fe4a57]'>Skills</a>
            </Link>
            <Link className='text-white' to='projects' smooth={true} offset={50} duration={1000}
    spy={true}>
              <a href="#" className='text-lg font-semibold hover:text-[#fe4a57]'>Projects</a>
            </Link>
            <Link className='text-white' to='contact' smooth={true} offset={50} duration={1000}
    spy={true}>
              <a href="#" className='text-lg font-semibold hover:text-[#fe4a57]'>Contact</a>
            </Link>
        </ul>
        <div className='flex items-center justify-end flex-1 md:hidden'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className=' w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='flex flex-col items-start justify-end flex-1 gap-4 list-none'>
             
                <Link
                  className='text-white' to='about' smooth={true} offset={50} duration={1000}
    spy={true}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href='#'>About</a>
                </Link>
                <Link
                  className='text-white'
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href='#'>Skills</a>
                </Link>
                <Link
                  className='text-white' to='projects' smooth={true} offset={50} duration={1000}
    spy={true}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href='#'>Projects</a>
                </Link>
                <Link
                 className='text-white' to='contact' smooth={true} offset={50} duration={1000}
    spy={true}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href='#'>Contact</a>
                </Link>
             
            </ul>
          </div>
        </div>
      </div>

   </nav>
   
  )
}

export default Navigation
{/* <div>  
<ul className='flex justify-between w-2/3 list-none'>
    <Link to='about' smooth={true} offset={50} duration={1000}
    spy={true}>About</Link>
    <Link to='projects' smooth={true} offset={50} duration={1000}
    spy={true}>Projects</Link>
    <Link to='contact' smooth={true} offset={50} duration={1000}
    spy={true}>Contact</Link>
</ul>
</div> */}