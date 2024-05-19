import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import { useWindowResize } from "../../util/windowResize";

function CreateSubject({ onCancel }) {
  const isMobile = useWindowResize();

  const handleCancel = () => {
    // Call the onCancel function passed as a prop
    onCancel();
  };

  const [showSubjectAdded, setShowSubjectAdded] = useState(false);

  const openSubjectAdded = () => {
    setShowSubjectAdded(!showSubjectAdded);
  };

  return (
    <main
      className={`${
        isMobile
          ? "h-auto flex flex-col justify-between items-center bg-background py-4"
          : "px-8 flex justify-between"
      } mt-34`}
    >
      <section
        className={` ${
          isMobile ? "h-80 w-78 py-4" : "lg:w-full h-751 flex justify-between"
        } bg-background `}
      >
        <div className="w-full h-740 rounded-10 bg-white px-4 py-4 flex flex-col justify-center items-center">
          <div className="h-auto w-645 flex flex-col justify-between items-center">
            <div className="font-poppins">
              <h1 className="text-22 text-black font-poppins font-semibold">
                Create Subject:
              </h1>
            </div>
            <div className="flex  mt-2 mb-4 w-full">
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-[#8599DD]">Subject name:</p>
                <input
                  type="text"
                  placeholder="English"
                  className="border border-solid border-[#99A1DA] bg-[#F6F6F6] rounded-md py-2 px-4 w-full"
                />
                <div className="py-6 w-full mb-6">
                  <p className="text-[#8599DD]">Classes:</p>
                  <Dropdown />
                </div>
              </div>
            </div>
            <div className="w-80 h-9 flex justify-between px-4">
              <button
                onClick={handleCancel}
                className="rounded-md border-2 border-belll px-12 py-8 bg-white text-belll text-lg hover:bg-gray-100 text-16 font-poppins font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={openSubjectAdded}
                className="rounded-md  border-belll bg-belll px-12 py-8 text-white text-16 font-poppins font-semibold"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CreateSubject;
