import Link from 'next/link'

const ProcessCard = ({ title, description, isHighlighted = false }) => {
  const cardClasses = isHighlighted ? 'bg-lime-300 text-black rotate-[-3deg] transform' : 'bg-black'

  const titlePillClasses = isHighlighted ? 'bg-black text-white' : 'bg-white text-black'

  const readMoreClasses = isHighlighted ? 'text-black' : 'text-white'
  const descriptionClasses = isHighlighted ? 'text-neutral-800' : 'text-gray-400'

  return (
    <div className={`rounded-3xl p-8 transition-all duration-300 ${cardClasses}`}>
      <div className='mb-6 flex items-center justify-between'>
        <div className={`rounded-full px-4 py-1 text-sm font-semibold ${titlePillClasses}`}>
          {title}
        </div>
        <Link href='#' className={`flex items-center gap-2 text-sm font-medium ${readMoreClasses}`}>
          <span>Read More</span>
        </Link>
      </div>
      <p className={`text-base leading-relaxed ${descriptionClasses}`}>{description}</p>
    </div>
  )
}

export default ProcessCard
