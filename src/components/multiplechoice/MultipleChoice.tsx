import { Option } from "@/interfaces/quiz";
import { useEffect, useState } from "react";

interface Props {
    options: Option[],
    setSelectedOption : (arg0: number | null) => void
}
export default function MultipleChoice({options, setSelectedOption} : Props) {
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (checkbox:any, i:number) => {
    setSelectedCheckbox(checkbox === selectedCheckbox ? null : checkbox);
    setSelectedOption(checkbox === selectedCheckbox ? null : i);
  };

  useEffect(() => {
    console.log('useEffect multiple choice');
    setSelectedCheckbox(null);
    setSelectedOption(null);

  }, [options])

  return (
    <>
      {options?.map(({option}, i) => (
        <div key={i} className='grid grid-cols-2 w-36 sm:w-80 mx-auto mb-4 text-2xl'>
          <input
            type="checkbox"
            id={`customCheckbox${i}`}
            checked={selectedCheckbox === `checkbox${i}`}
            onChange={() => handleCheckboxChange(`checkbox${i}`, i)}
            className="hidden"
          />
          <label
            htmlFor={`customCheckbox${i}`}
            className="cursor-pointer select-none flex items-center justify-center w-6 h-6 border border-gray-300 rounded-md transition-all duration-300 focus:outline-none"
          >
            <svg
              className={`w-4 h-4 ${selectedCheckbox === `checkbox${i}` ? 'text-white bg-green-600' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </label>
          <span className=" sm:w-max">{option}</span>
        </div>
      ))}
    </>
  );
}