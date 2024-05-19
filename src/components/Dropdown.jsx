import React, { useState, useEffect, useRef } from "react";

const Dropdown = () => {
  // State to manage the open/close of the dropdown
  const [isOpen, setIsOpen] = useState(false);
  // State to manage the selected grades
  const [selectedGrades, setSelectedGrades] = useState([]);
  const dropdownRef = useRef(null);

  // Grades data
  const grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"];

  // Function to toggle the open/close state of the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle checkbox state changes
  const handleCheckboxChange = (grade) => {
    if (selectedGrades.includes(grade)) {
      setSelectedGrades(selectedGrades.filter((g) => g !== grade));
    } else {
      setSelectedGrades([...selectedGrades, grade]);
    }
  };

  // Effect hook to handle clicks outside the dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the dropdown container ref exists and if the clicked element is outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Close the dropdown
        setIsOpen(false);
      }
    };

    // Add event listener for click events
    document.addEventListener("click", handleOutsideClick);

    // Cleanup: Remove event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <input
        type="text"
        value={selectedGrades.join(", ")}
        onClick={toggleDropdown}
        readOnly
        placeholder="Select Grades"
        className="border border-[#99A1DA] bg-[#F6F6F6] text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
      />
      <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-7-7 1.5-1.5L10 9.8l5.5-5.5L17 5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-[#F6F6F6]">
          <div
            className="py-1 flex flex-wrap"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Iterate over grades array to display checkboxes */}
            {grades.map((grade, index) => (
              <label
                key={index}
                className="flex items-center py-2 px-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedGrades.includes(grade)}
                  onChange={() => handleCheckboxChange(grade)}
                  className="mr-2 form-checkbox h-5 w-5 text-black border-gray-300 rounded"
                />
                {grade}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
