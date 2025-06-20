import Image from 'next/image'
import Link from 'next/link'
import portfolioBanner from '../../public/Vector.png'

const PortfolioSection = () => {
  return (
    <section className='relative'>
      <Image
        className='absolute left-0 top-0 z-0 object-cover'
        src={portfolioBanner}
        width={1400}
        height={1000}
      ></Image>

      <div className='relative wrapper z-10 w-full max-w-6xl mx-auto text-center'>
        <Link
          href='#about'
          className='absolute right-0 top-[-40px] hidden items-center gap-2 rounded-full border border-black px-5 py-2 text-base font-medium text-black transition-colors hover:bg-black hover:text-white md:inline-flex'
        >
          <span>About</span>
        </Link>
        <h1 className='text-center h1 max-w-5xl mx-auto'>
          I've been{' '}
          <span className=' rounded-[20px] bg-black px-2 text-white lg:px-2'>Developing</span>{' '}
          <br /> Websites since{' '}
          <span className=' rounded-[20px] bg-black px-4 text-white lg:px-2'>2013</span>
        </h1>
        <p className='mx-auto mt-8 max-w-2xl text-left text-lg text-gray-600 md:text-center'>
          We start every new client interaction with an in-depth discovery call where we get to know
          each other and recommend the best course of action.
        </p>
        <div className='mt-24 flex flex-col items-start gap-5 text-left md:flex-row md:items-center'>
          <div className='w-[100px] flex-shrink-0 text-sm font-bold uppercase text-gray-500'>
            Previously
            <br />
            Worked on
          </div>
          <div className='flex flex-wrap items-center justify-start gap-4'>
            <div className='rounded-full border border-black bg-black px-6 py-3 font-bold text-white'>
              awwwards.
            </div>
            <div className='rounded-full border border-gray-300 px-6 py-3 font-bold'>
              CSS WINNER
            </div>
            <div className='rounded-full border border-gray-300 px-6 py-3 font-bold'>facebook</div>
            <div className='rounded-full border border-gray-300 px-6 py-3 font-bold'>
              thoughtworks
            </div>
            <div className='rounded-full border border-gray-300 px-6 py-3 font-bold'>
              CSSDesignAwards
            </div>
            <div className='rounded-full border border-gray-300 px-6 py-3 font-bold'>AUTODESK</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
