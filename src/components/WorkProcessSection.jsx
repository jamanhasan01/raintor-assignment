
import ProcessCard from './ProcessCard';

const processData = [
  {
    title: 'Discovery',
    description: 'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
    isHighlighted: false,
  },
  {
    title: 'Strategy',
    description: 'Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth coxie reviews we’re here to set the stage for success.',
    isHighlighted: true,
  },
  {
    title: 'Design',
    description: 'After we have a comprehensive understanding of your brand, we’ll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.',
    isHighlighted: false,
  },
  {
    title: 'Build',
    description: 'Whether we’ve just finished designing your new site or you’re handing off finished designs for us to develop in Webflow, we’re here to apply our trusted development process to your project.',
    isHighlighted: false,
  },
];

const WorkProcessSection = () => {
  return (
    <div className="bg-[#0d0d0d] text-white ">
      <div className="wrapper">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="h1 text-white">My Work Process</h2>
          <div className="flex shrink-0 items-center gap-3 rounded-full border border-gray-700 px-4 py-2">
            
            <span className="font-medium">Work Process</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {processData.map((item) => (
            <ProcessCard
              key={item.title}
              title={item.title}
              description={item.description}
              isHighlighted={item.isHighlighted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcessSection;