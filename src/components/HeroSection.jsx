// components/HeroSection.jsx
import { FaPhoneAlt, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import heroImg from '../../public/636b9280b520dffc095f62ef_home-gradient-p-1600.png.png'

const HeroSection = () => {
  return (
    <section className='relative w-full min-h-screen flex items-center overflow-hidden'>
      <Image
        width={1600}
        height={900}
        className='absolute w-full h-full object-cover z-0'
        src={heroImg}
        alt='Hero Background Gradient'
        priority
      />

      <div className='wrapper  z-20 py-20 lg:py-0 w-full'>
        <div className=' flex flex-col'>
          <h1 className=' h1 mb-8'>
            Trusted <span className='bg-black text-white  rounded-md px-2 '>Partner</span> for
            <br />
            Your Website <span className='bg-black text-white  rounded-md px-2'>Develop.</span>
          </h1>
          <div className='mx-auto max-w-xl '>
            <p className='text-xl text-gray-700 mb-5 mx-auto'>
              Building the world's best marketing websites for over a decade. Your trusted partner
              for strategy, design, and dev.
            </p>

            <button className='flex button border rounded-full '>
              <FaPhoneAlt className='mr-3 text-2xl' />
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
