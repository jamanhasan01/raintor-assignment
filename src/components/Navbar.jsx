'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setscrolled] = useState(false)
  console.log(scrolled)

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true)
      } else {
        setscrolled(false)
      }
    }
    window.addEventListener('scroll', handleOnScroll)
    return ()=> {window.removeEventListener('scroll', handleOnScroll)}
  }, [])

  return (
    <header
      className={` ${
        scrolled ? 'bg-white/50 backdrop-blur-xl text-white' : ' bg-transparent'
      } fixed w-full  top-0 left-0 z-50`}
    >
      <div className='wrapper px-0 py-3 flex justify-between items-center'>
        <div className='text-xl font-bold uppercase'>
          <Link href='/'>devlop.me</Link>
        </div>
        <nav className='flex gap-10'>
          <ul className='flex items-center text-lg space-x-6'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
          </ul>
          {/* Assuming '/contact' is the page for starting a project */}
          <Link href='/contact' className='button border rounded-full '>
            Start Project
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
