import React from "react";
import Sidebar from "../../components/sidebar";
import { useState, useEffect } from "react";
import { useWindowResize } from "../../util/windowResize";
import { CiSearch } from "react-icons/ci";
import { classesData } from "../../util/ClassesPageClassesData";
import { gradeSubjects } from "../../util/ClassesPageClassesData";
import { classesTableData } from "../../util/ClassesPageClassesData";
import { topicsLinks } from "../../util/ClassesPageClassesData";
import { classeResourcesData } from "../../util/ClassesPageClassesData";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import CreateClassPopup from "./CreateClassPopup";
import { useDispatch, useSelector } from "react-redux";
import { classesANCOpen } from "../../redux/Slices/AddClassPopupSlice";
import { classesEECOpen } from "../../redux/Slices/EditClassPopupSlice";
import { classesDECOpen } from "../../redux/Slices/DeleteClassPopupSlice";
import EditClassPopup from "./EditClassPopup";
import ClassesPopUpDelete from "./ClassesPopUpDelete";

function Classes() {
  const isMobile = useWindowResize();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const [whichThirdPart, setWhichThirdPart] = useState(false);

  const dispatch = useDispatch();

  const ClassesANC = useSelector((state) => state.classesANC.value);
  const ClassesEEC = useSelector((state) => state.classesEEC.value);
  const ClassesDEC = useSelector((state) => state.classesDEC.value);

  function handleToggle() {
    setSidebarOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <div className=" bg-[#f3f3ff]">
      {/* pop up */}

      <div
        className={`w-screen flex justify-center items-center h-screen bg-[rgba(133,153,221,0.5)] ${
          ClassesANC || ClassesEEC || ClassesDEC
            ? "translate-y-[0vh]"
            : "translate-y-[-100vh]"
        }   fixed top-0 z-50 bgfi`}
        style={{ backdropFilter: `blur(10px)` }}>
        <div
          className={` w-full h-full flex justify-center items-center ${
            ClassesANC || ClassesEEC || ClassesDEC
              ? "translate-y-[0vh]"
              : "translate-y-[-100vh]"
          } transition-all ease-in-out duration-500 delay-100`}>
          {ClassesANC && (
            <div className={`w-[50%] h-[60%] rounded bg-white p-3  `}>
              <CreateClassPopup />
            </div>
          )}

          {ClassesEEC && (
            <div className={`w-[50%] h-[60%] rounded bg-white p-3  `}>
              <EditClassPopup />
            </div>
          )}

          {ClassesDEC && (
            <div className="w-[50%] h-[50%] rounded bg-white p-3  ">
              <ClassesPopUpDelete />
            </div>
          )}
        </div>
      </div>

      <div className=" flex max-lg:block">
        <div className="  max-lg:hidden  w-[400px]  h-screen ">
          <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />
        </div>

        <div className=" py-5 pr-4 pl-2 w-full flex justify-between ">
          <div className=" w-[30%] h-auto  rounded-10 bg-white py-3 pl-4 pr-3 ">
            <div className=" flex justify-center items-center w-full mt-3 relative">
              <input
                type="search"
                className=" w-[287px] h-[40px] rounded-10 border pl-[16px] py-[8px] pr-[40px]"
                placeholder="Search Class"
              />

              <span className=" absolute right-[37px] text-[28px]">
                <CiSearch />
              </span>
            </div>

            <div className=" p-3  ">
              <div className=" flex justify-between items-center text-[12px] font-medium">
                <p className=" ml-3">Class</p>
                <p className=" mr-4">Subjects</p>
              </div>

              <div className="h-[75vh] pr-3 overflow-auto">
                {classesData.map((cdata) => (
                  <>
                    <div
                      className=" flex justify-between items-center text-[14px] mt-3 cursor-pointer "
                      onClick={() => setWhichThirdPart(false)}>
                      <p>Grade {cdata.class}</p>
                      <p className=" mr-4">{cdata.subjects}</p>
                    </div>

                    <div className=" w-full h-[2px] bg-[rgba(0,0,0,0.2)] mt-2" />
                  </>
                ))}
              </div>

              <div className=" flex justify-center items-center w-full mt-5">
                <button
                  className=" w-[253px] h-[40px] rounded bg-[#082567] text-white  "
                  onClick={() => dispatch(classesANCOpen())}>
                  Add Class
                </button>
              </div>
            </div>
          </div>

          <div className=" w-[27%] h-auto  rounded-10 bg-white p-4 overflow-auto">
            <div className=" flex justify-between">
              <h1 className=" text-[24px] font-semibold mt-3">Grade 1</h1>

              <div className=" flex justify-between items-center cursor-pointer text-[23px] text-[#364786] mr-2">
                <p className=" mr-2" onClick={() => dispatch(classesEECOpen())}>
                  <span className=" flex justify-center items-center w-full -mb-1.5">
                    <FaRegEdit />
                  </span>
                </p>
                <p className=" ml-2" onClick={() => dispatch(classesDECOpen())}>
                  <span className=" flex justify-center items-center w-full -mb-1.5">
                    <MdDeleteOutline />
                  </span>
                </p>
              </div>
            </div>

            <p className=" text-[13px] font-semibold mt-3">Subjects</p>
            <div className="h-[85vh] pr-3 overflow-auto mt-3">
              {gradeSubjects[0].map((gSubj) => (
                <div className=" mt-3">
                  <div
                    className=" bg-[#EAEFFF] rounded-10 w-full h-[80px] p-3 cursor-pointer "
                    onClick={() => setWhichThirdPart(true)}>
                    <p className=" text-[18px] font-medium ml-2 font-poppins">
                      {gSubj.subject}
                    </p>
                    <p className=" text-[10px] font-medium ml-2 font-poppins">
                      {gSubj.subjectDisc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" w-[40%] h-auto  rounded-10 bg-white p-7 overflow-auto">
            {!whichThirdPart ? (
              <>
                <h1 className=" text-[24px] font-semibold ">Schedule</h1>

                <p className=" text-[15px]  font-medium font-poppins mt-3 leading-[24px]">
                  Lorem ipsum dolor sit amet consectetur. Dignissim libero
                  mauris.
                </p>

                <div className=" w-full h-[462px] mt-5">
                  <table className=" w-full h-[75vh]">
                    <thead>
                      <tr className=" [&>th]:w-[16.6%] [&>th]:text-[12px] [&>th]:text-[#5E72B9] [&>th]:h-[50px] text-center  [&>th]:border [&>th]:border-[#AEBBE7] [&>th]:font-normal border-b border-[#AEBBE7]">
                        <th style={{ borderRight: " 1px solid #AEBBE7" }}></th>
                        <th style={{ borderRight: " 1px solid #AEBBE7" }}>
                          Mon
                        </th>
                        <th style={{ borderRight: " 1px solid #AEBBE7" }}>
                          Tue
                        </th>
                        <th style={{ borderRight: " 1px solid #AEBBE7" }}>
                          Wed
                        </th>
                        <th style={{ borderRight: " 1px solid #AEBBE7" }}>
                          Thu
                        </th>
                        <th>Fri</th>
                      </tr>
                    </thead>

                    <tbody>
                      {classesTableData[0].map((ctd) => (
                        <tr className=" [&>th]:w-[16.6%] [&>th]:text-[12px] [&>th]:text-[#5E72B9] [&>th]:h-[50px] text-center  [&>th]:border [&>th]:border-[#AEBBE7] [&>th]:font-normal  ">
                          {ctd.map((ctd, id) => (
                            <>
                              {id === 0 && (
                                <th
                                  style={{ borderRight: " 1px solid #AEBBE7" }}>
                                  {ctd[0]}
                                </th>
                              )}

                              {id !== 0 && id !== 5 && (
                                <th
                                  style={{ borderRight: " 1px solid #AEBBE7" }}>
                                  <p>
                                    <span className=" font-semibold text-[#212F5F]">
                                      {ctd[0]}
                                    </span>{" "}
                                    <span className=" text-[#435596] text-[10px] font-normal">
                                      {ctd[1]}
                                    </span>
                                  </p>
                                </th>
                              )}

                              {id === 5 && (
                                <th>
                                  <p>
                                    <span className=" font-semibold text-[#212F5F]">
                                      {ctd[0]}
                                    </span>{" "}
                                    <span className=" text-[#435596] text-[10px] font-normal">
                                      {ctd[1]}
                                    </span>
                                  </p>
                                </th>
                              )}
                            </>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <>
                {/*  */}

                <h1 className=" text-[24px] font-semibold [&>p]:underline [&>p]:text-[#364786] ">
                  English Topics
                </h1>

                <div className="[&>p]:underline [&>p]:text-[#364786] [&>p]:mb-4  mt-4 h-[30vh] overflow-auto">
                  {topicsLinks[0].map((tlink) => (
                    <p>{tlink}</p>
                  ))}
                </div>

                <h1 className=" mt-[23px] text-[24px] font-semibold [&>p]:underline [&>p]:text-[#364786]  w-full text-center">
                  Resources
                </h1>
                <div className=" h-[50vh] overflow-auto w-full mt-2">
                  {classeResourcesData[0].map((Resource) => (
                    <div className=" mt-4">
                      <div
                        className=" w-[90%] h-[224px] rounded  p-3"
                        style={{ backgroundColor: Resource.bg }}>
                        <div className=" flex justify-between">
                          <div>
                            <h1 className=" font-semibold text-[14px] text-[#212F5F] mt-2 ml-2">
                              {Resource.title}
                            </h1>

                            <ul className=" list-disc pl-6 mt-2 text-[12px] text-[#5E72B9]">
                              {Resource.list.map((title) => (
                                <li>{title}</li>
                              ))}
                            </ul>
                          </div>

                          <div className=" w-[154px]  h-[116px]">
                            <img
                              className=" w-full h-full object-scale-down"
                              src={Resource.pic}
                              alt=""
                            />
                          </div>
                        </div>

                        <div className=" flex justify-center items-center w-full mt-4">
                          <button className=" w-[160px] h-[32px] rounded bg-[#082567] text-white  text-[14px] mb-3 ">
                            View Resources
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
