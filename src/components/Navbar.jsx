'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleOnScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleOnScroll)
    return () => {
      window.removeEventListener('scroll', handleOnScroll)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled || isMenuOpen ? 'bg-black/50 backdrop-blur-xl text-white' : 'bg-transparent text-black'
      }`}
    >
      <div className='wrapper px-4 py-3 flex justify-between items-center'>
        <div className='text-xl font-bold uppercase'>
          <Link href='/' onClick={() => setIsMenuOpen(false)}>devlop.me</Link>
        </div>

        <nav className='hidden md:flex items-center gap-10'>
          <ul className='flex items-center text-lg space-x-6'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/portfolio'>Portfolio</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
          </ul>
          <Link href='/contact' className='button border rounded-full px-5 py-2'>
            Start Project
          </Link>
        </nav>

        <div className='md:hidden'>
          <button onClick={toggleMenu} aria-label="Open menu">
            <FiMenu size={28} />
          </button>
        </div>
        
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-full b bg-black/80  shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='p-5 flex flex-col h-full'>
            <div className='flex justify-end mb-8'>
              <button onClick={toggleMenu} aria-label="Close menu">
                <FiX size={30} />
              </button>
            </div>
            
            <nav className='flex flex-col items-center justify-center flex-grow'>
              <ul className='flex flex-col items-center text-2xl space-y-8'>
                <li><Link href='/' onClick={toggleMenu}>Home</Link></li>
                <li><Link href='/about' onClick={toggleMenu}>About</Link></li>
                <li><Link href='/portfolio' onClick={toggleMenu}>Portfolio</Link></li>
                <li><Link href='/blog' onClick={toggleMenu}>Blog</Link></li>
              </ul>
              <Link
                href='/contact'
                onClick={toggleMenu}
                className='mt-12 button border rounded-full px-6 py-3 text-lg'
              >
                Start Project
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar