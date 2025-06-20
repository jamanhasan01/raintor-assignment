import React from 'react'
import Link from 'next/link'
import { FiChevronDown, FiPhone, FiSend } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import contantBannter from '../../public/contactBanner.png'
import Image from 'next/image'

const ContactSection = () => {
  return (
    <div className='relative'>
      <Image
        className='absolute z-0 botton-0 left-0 w-full h-full object-cover'
        width={1400}
        height={1000}
        src={contantBannter}
      ></Image>
      <div className='wrapper'>
        <div className='relative grid md:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <div className='flex items-center space-x-2'>
              <Link
                href='#'
                className='border border-black px-4 py-1.5 rounded-full text-sm font-medium'
              >
                Contact
              </Link>
            </div>
            <h1 className='h1'>
              Interested in <br />
              <span className='bg-black text-white px-2 rounded-2xl'>work</span> together?
            </h1>
            <p className='text-lg text-gray-700 max-w-md'>
              We start every new client interaction with an in-depth discovery call where we get to
              know each other.
            </p>
            <button className='flex items-center space-x-3 bg-white border border-gray-300 rounded-full px-6 py-3 text-lg font-medium shadow-sm hover:bg-gray-50 transition-colors'>
              <FiPhone className='h-6 w-6' />
              <span>Schedule a Call</span>
            </button>
          </div>
          <div className='bg-black text-white p-8 rounded-3xl shadow-2xl'>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='sr-only'>
                  Enter your name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  className='w-full bg-transparent border-b border-gray-600 focus:border-white focus:ring-0 outline-none py-2 transition-colors'
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Your email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Your email address'
                  className='w-full bg-transparent border-b border-gray-600 focus:border-white focus:ring-0 outline-none py-2 transition-colors'
                />
              </div>
              <div>
                <label htmlFor='project' className='sr-only'>
                  Describe your project
                </label>
                <input
                  type='text'
                  name='project'
                  id='project'
                  placeholder='Describe your project'
                  className='w-full bg-transparent border-b-2 border-[#9EFF00] focus:border-white focus:ring-0 outline-none py-2 transition-colors'
                />
              </div>
              <div className='flex items-center justify-between pt-6 flex-wrap gap-4'>
                <div className='flex items-center space-x-4'>
                  <button
                    type='submit'
                    className='flex items-center space-x-2 border border-gray-600 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors'
                  >
                    <FiSend className='h-5 w-5' />
                    <span>Send</span>
                  </button>
                  <span className='text-gray-500'>or</span>
                  <button
                    type='button'
                    className='flex items-center space-x-2 border border-gray-600 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors'
                  >
                    <FiPhone className='h-5 w-5' />
                    <span>Contact me</span>
                  </button>
                </div>
                <div className='flex items-center space-x-4 text-gray-500'>
                  <span className='text-sm'>@williamrey</span>
                  <Link href='#' className='hover:text-white transition-colors'>
                    <FaFacebookF className='h-5 w-5' />
                  </Link>
                  <Link href='#' className='hover:text-white transition-colors'>
                    <FaInstagram className='h-6 w-6' />
                  </Link>
                  <Link href='#' className='hover:text-white transition-colors'>
                    <FaTwitter className='h-6 w-6' />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
