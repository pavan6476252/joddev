
import { useState } from 'react';
import IntrestedFiledsSelect from './components/IntrestedFiledsSelect';
import ProfileInfo from './components/ProfileInfo';

function IntroPage() {

  const [stepper, setStepper] = useState(0);

  const steps = ['Profile Information', 'Select Intrests'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const next = () => {
    if (stepper != steps.length - 1) {
      setStepper(s => s + 1);
    }
  }
  const previous = () => {
    if (stepper > 0) {
      setStepper(s => s - 1);
    }
  }

  return (
    <div className="container mx-auto mb-20">
      <Stepper steps={steps} activeStep={stepper} setActiveStep={setStepper} />
      {stepper === 0 && <ProfileInfo />}
      {stepper === 1 && <IntrestedFiledsSelect selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />}
      {/* {stepper === 2 && <IntrestedFiledsSelect />} */}

      <div className=" container fixed bottom-10   h-2  flex justify-between items-center">
        <button
          onClick={previous}
          type="button" className={` px-6 py-2   ${stepper == steps.length - 1 ? 'bg-blue-700 text-white ' : 'border border-black border-1'}`}>Previous</button>
        <button onClick={next} type="button" className={
          ` px-6 py-2 ${stepper != steps.length - 1 ? 'bg-blue-700 text-white' : 'border border-black border-1 '}`
        }>Next</button>

      </div>

    </div >

  );
}


export default IntroPage

const Stepper = ({ steps, activeStep, setActiveStep }: { steps: String[], activeStep: Number, setActiveStep: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div className="flex items-center  space-x-4 my-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`cursor-pointer py-2 px-4 rounded-md ${index === activeStep ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'
            }
          }
            `}
          onClick={() => setActiveStep(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};
