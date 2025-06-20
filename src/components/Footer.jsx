import Link from 'next/link'
import React from 'react'

// Data for the links to keep the JSX clean
const menuLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'BLOG', href: '/blog' },
]

const socialLinks = [
  { name: 'TWITTER', href: '#' },
  { name: 'INSTAGRAM', href: '#' },
  { name: 'FACEBOOK', href: '#' },
  { name: 'BEHANCE', href: '#' },
  { name: 'DRIBBBLE', href: '#' },
]

const Footer = () => {
  return (
    <footer className='bg-black text-white font-sans rounded-t-3xl'>
      <div className='wrapper'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-16'>
          <Link href='/' className='text-2xl font-bold text-[#D4FF00] mb-8 md:mb-0'>
            DEVLOP.ME
          </Link>
          <h2 className='h1'>As you can</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          <div className='space-y-8'>
            <div>
              <h3 className='text-sm text-gray-400 uppercase tracking-wider mb-3'>Say hello</h3>
              <a
                href='mailto:HELLO@DEVLOP.ME'
                className='block hover:text-gray-300 transition-colors'
              >
                HELLO@DEVLOP.ME
              </a>
              <a
                href='mailto:MAHBUBUL@ME.COM'
                className='block hover:text-gray-300 transition-colors'
              >
                MAHBUBUL@ME.COM
              </a>
            </div>
            <div>
              <h3 className='text-sm text-gray-400 uppercase tracking-wider mb-3'>Call</h3>
              <p className='hover:text-gray-300 transition-colors'>+784549 4861 00</p>
              <p className='hover:text-gray-300 transition-colors'>+8845 0100 211</p>
            </div>
          </div>

          <div className='hidden lg:block'></div>

          <div className='space-y-4'>
            <h3 className='text-sm text-gray-400 uppercase tracking-wider mb-3'>Menu</h3>
            <ul className='space-y-2'>
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='hover:text-gray-300 transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className='space-y-4'>
            <h3 className='text-sm text-gray-400 uppercase tracking-wider mb-3'>Social</h3>
            <ul className='space-y-2'>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-gray-300 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
          <p className='font-bold text-lg text-white mb-4 md:mb-0'>BESNIK</p>
          <p className='mb-4 md:mb-0'>&copy; devlop.me 2022</p>
          <div className='flex space-x-4'>
            <Link href='/privacy' className='hover:text-white transition-colors'>
              PRIVACY
            </Link>
            <span>-</span>
            <Link href='/terms' className='hover:text-white transition-colors'>
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
