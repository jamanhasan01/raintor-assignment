'use client'

import { FaLongArrowAltDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BiAtom } from 'react-icons/bi'
import { useState, useRef } from 'react'


// this is the single card style for use as a component for multiple time
const SkillCard = ({ icon, title, description, className = '' }) => (
  <div className={`border border-gray-800 rounded-2xl p-5 ${className}`}>
    <div className='text-green-400'>{icon}</div>
    <h3 className='text-3xl font-bold text-white mb-3'>{title}</h3>
    <p className='text-base text-gray-400'>{description}</p>
  </div>
)

const SkillsCards = () => {
  // here is the card of array
  const skillData = [
    {
      icon: <BiAtom size={64} />,
      title: 'HTML & CSS',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.',
    },
    {
      icon: <BiAtom size={64} />,
      title: 'Javascript',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate in voluptate. Ut enim ad minim veniam, quis.',
    },
    {
      icon: <BiAtom size={64} />,
      title: 'Webflow',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.',
    },
    {
      icon: <BiAtom size={64} />,
      title: 'React.js',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate in voluptate. Ut enim ad minim veniam, quis.',
    },
    {
      icon: <BiAtom size={64} />,
      title: 'Node.js',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate in voluptate. Ut enim ad minim veniam, quis.',
    },
    {
      icon: <BiAtom size={64} />,
      title: 'MongoDB',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate in voluptate. Ut enim ad minim veniam, quis.',
    },
    {
      icon: <BiAtom size={64} />,
      title: 'UI/UX Design',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate in voluptate. Ut enim ad minim veniam, quis.',
    },
  ]

  const cardsPerPage = 3
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      console.log(prevIndex);
      
      const maxStartIndex = Math.max(0, skillData.length - cardsPerPage)
      return Math.min(prevIndex + 1, maxStartIndex)
    })
  }

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      return Math.max(0, prevIndex - 1)
    })
  }

  const sliderRef = useRef(null)

  const transformStyle = {
    transform: `translateX(-${startIndex * (100 / cardsPerPage)}%)`,
    transition: 'transform 0.5s ease-in-out',
  }

  return (
    <section className='bg-black  mx-5 rounded-2xl  overflow-hidden'>
      <div className='wrapper py-20 relative'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 px-4 sm:px-0'>
          <div className='lg:w-1/2 mb-8 lg:mb-0'>
            <button className='flex items-center px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-colors duration-200 mb-6 text-lg'>
              <FaLongArrowAltDown className='mr-2' />
              Why Choose me
            </button>
            <h2 className='h1 text-white leading-tight'>
              My Extensive
              <br />
              List of Skills
            </h2>
          </div>

          <div className='lg:w-1/2 flex flex-col items-start lg:items-end'>
            <p className='text-lg text-gray-400 max-w-md mb-8 text-left lg:text-right'>
              Building the world's best marketing. Your trusted partner for strategy, design, and
              dev.
            </p>
            <div className='flex space-x-4'>
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className='w-12 h-12 rounded-full border border-gray-600 text-white flex items-center justify-center hover:border-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= skillData.length - cardsPerPage}
                className='w-12 h-12 rounded-full border border-gray-600 text-white flex items-center justify-center hover:border-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className='overflow-hidden'>
          <div ref={sliderRef} className='flex gap-10 py-4' style={transformStyle}>
            {skillData.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                className='flex-shrink-0 w-[calc((100%-40px*2)/3)]'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsCards
