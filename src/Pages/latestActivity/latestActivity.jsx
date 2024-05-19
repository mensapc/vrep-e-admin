import React from "react";
import Sidebar from "../../components/sidebar";
import { useState, useEffect } from "react";
import { useWindowResize } from "../../util/windowResize";

import { CiSearch } from "react-icons/ci";

import pp_1 from "../../assets/temporary_images_activity/pp_1.png";

function LatestActivity() {
  // Create hr tag for children of activities based on day
  //I will use it in the Api integ.

  // const renderChildren = () => {
  //     return children.map((child, index) => {
  //       return (
  //         <div key={child.id}>
  //           {index !== 0 && (index % 2 === 0 || index === children.length - 1) && (
  //             <hr className="line" />
  //           )}
  //           <div className="box">{child.content}</div>
  //         </div>
  //       );
  //     });
  //   };

  const isMobile = useWindowResize();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  function handleToggle() {
    setSidebarOpen((prevState) => !prevState);
    console.log("open");
  }

  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <div className=" bg-[#f3f3ff]">
      <div className=" flex max-lg:block">
        <div className="  max-lg:hidden  w-[365px]  h-screen ">
          <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />
        </div>

        <div className="w-full flex flex-col pr-4 py-4 h-screen gap-y-[19px]">
          <div className="w-full h-screen flex flex-col gap-y-[32px] pl-[24px] pt-[24px] pr-[6px] pb-[24px] bg-white overflow-hidden">
            <div className="flex items-center">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Name"
                className="w-[455px] h-[40px] text-[13px] rounded-[10px] outline-none indent-[10px] pr-[40px]"
                style={{ border: "1px solid #BFBFEA" }}
              />
              <CiSearch className=" relative left-[-40px] text-[28px] hover:cursor-pointer " />
            </div>

            <div className="w-full flex flex-col overflow-y-scroll no-scrollbar gap-y-[32px]">
              <div className="flex flex-col">
                <div className="flex flex-col w-full justify-center items-center">
                  <span className="text-[14px] font-[600] mb-[16px]">
                    Today
                  </span>
                </div>

                <div className="flex flex-col [&>*:first-child]:bg-[#FAFAFA] hover:[&>*>div]:bg-[#FAFAFA]">
                  <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                    <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                      <img
                        src={pp_1}
                        alt=""
                        className="w-[48px] h-[48px] rounded-[50%]"
                      />
                      <div className="flex flex-col items-start gap-y-[5px]">
                        <span className="text-[13px] font-[600] text-[#141522]">
                          Angelie Crison
                        </span>
                        <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                          wants to edit{" "}
                          <span className="empty:hidden font-[600] text-[#141522] text-[13px]">
                            English Project E4
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-self-center col-start-4 col-end-5">
                      <span className="text-[#8E92BC] text-[12px] font-[400]">
                        2m Ago
                      </span>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center">
                    <hr className="w-[25%] border-2 rounded-[5px] my-[16px] border-[#d5d5dd]" />
                    <div className="item w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                      <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                        <img
                          src={pp_1}
                          alt=""
                          className="w-[48px] h-[48px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-y-[5px]">
                          <span className="text-[13px] font-[600] text-[#141522]">
                            Angelie Crison
                          </span>
                          <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                            Sent you a message
                            <span className="empty:hidden font-[600] text-[#141522] text-[13px]"></span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-self-center col-start-4 col-end-5">
                        <span className="text-[#8E92BC] text-[12px] font-[400]">
                          3m Ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center">
                    <hr className="w-[25%] border-2 rounded-[5px] my-[16px] border-[#d5d5dd]" />
                    <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                      <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                        <img
                          src={pp_1}
                          alt=""
                          className="w-[48px] h-[48px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-y-[5px]">
                          <span className="text-[13px] font-[600] text-[#141522]">
                            Emery Korsgard
                          </span>
                          <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                            Created a new exam for{" "}
                            <span className="empty:hidden font-[600] text-[#141522] text-[13px]">
                              Mathematics
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-self-center col-start-4 col-end-5">
                        <span className="text-[#8E92BC] text-[12px] font-[400]">
                          4m Ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center">
                    <hr className="w-[25%] border-2 rounded-[5px] my-[16px] border-[#d5d5dd]" />
                    <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                      <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                        <img
                          src={pp_1}
                          alt=""
                          className="w-[48px] h-[48px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-y-[5px]">
                          <span className="text-[13px] font-[600] text-[#141522]">
                            Jason Statham
                          </span>
                          <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                            Has been added as a new{" "}
                            <span className="empty:hidden font-[600] text-[#141522] text-[13px]">
                              Pupil
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-self-center col-start-4 col-end-5">
                        <span className="text-[#8E92BC] text-[12px] font-[400]">
                          6 m Ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col w-full justify-center items-center">
                  <span className="text-[14px] font-[600] mb-[16px]">
                    Yesterday
                  </span>
                </div>

                <div className="flex flex-col hover:[&>*>div]:bg-[#FAFAFA] hover:[&>*:first-child]:bg-[#FAFAFA]">
                  <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                    <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                      <img
                        src={pp_1}
                        alt=""
                        className="w-[48px] h-[48px] rounded-[50%]"
                      />
                      <div className="flex flex-col items-start gap-y-[5px]">
                        <span className="text-[13px] font-[600] text-[#141522]">
                          Angel Kimberly
                        </span>
                        <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                          Has submitted monthly summary{" "}
                          <span className="empty:hidden font-[600] text-[#141522] text-[13px]"></span>
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-self-center col-start-4 col-end-5">
                      <span className="text-[#8E92BC] text-[12px] font-[400]">
                        1 day Ago
                      </span>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center">
                    <hr className="w-[25%] border-2 rounded-[5px] my-[16px] border-[#d5d5dd]" />
                    <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                      <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                        <img
                          src={pp_1}
                          alt=""
                          className="w-[48px] h-[48px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-y-[5px]">
                          <span className="text-[13px] font-[600] text-[#141522]">
                            Jason Momoa
                          </span>
                          <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                            Sent you a message
                            <span className="empty:hidden font-[600] text-[#141522] text-[13px]"></span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-self-center col-start-4 col-end-5">
                        <span className="text-[#8E92BC] text-[12px] font-[400]">
                          3m Ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center">
                    <hr className="w-[25%] border-2 rounded-[5px] my-[16px] border-[#d5d5dd]" />
                    <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                      <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                        <img
                          src={pp_1}
                          alt=""
                          className="w-[48px] h-[48px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-y-[5px]">
                          <span className="text-[13px] font-[600] text-[#141522]">
                            Angel Kimberly
                          </span>
                          <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                            Has submitted monthly summary{" "}
                            <span className="empty:hidden font-[600] text-[#141522] text-[13px]"></span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-self-center col-start-4 col-end-5">
                        <span className="text-[#8E92BC] text-[12px] font-[400]">
                          1 day Ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center">
                    <hr className="w-[25%] border-2 rounded-[5px] my-[16px] border-[#d5d5dd]" />
                    <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                      <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                        <img
                          src={pp_1}
                          alt=""
                          className="w-[48px] h-[48px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-y-[5px]">
                          <span className="text-[13px] font-[600] text-[#141522]">
                            Jason Momoa
                          </span>
                          <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                            Sent you a message
                            <span className="empty:hidden font-[600] text-[#141522] text-[13px]"></span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-self-center col-start-4 col-end-5">
                        <span className="text-[#8E92BC] text-[12px] font-[400]">
                          3m Ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center">
                    <hr className="w-[25%] border-2 rounded-[5px] my-[16px] border-[#d5d5dd]" />
                    <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                      <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                        <img
                          src={pp_1}
                          alt=""
                          className="w-[48px] h-[48px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-y-[5px]">
                          <span className="text-[13px] font-[600] text-[#141522]">
                            Angel Kimberly
                          </span>
                          <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                            Has submitted monthly summary{" "}
                            <span className="empty:hidden font-[600] text-[#141522] text-[13px]"></span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-self-center col-start-4 col-end-5">
                        <span className="text-[#8E92BC] text-[12px] font-[400]">
                          1 day Ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col items-center">
                    <hr className="w-[25%] border-2 rounded-[5px] my-[16px] border-[#d5d5dd]" />
                    <div className="w-full h-[70px] py-[10px] px-[20px]  grid grid-cols-7 items-center rounded-[10px] hover:cursor-pointer">
                      <div className="flex flex-row items-center h-auto col-start-1 col-span-3 gap-x-[12px] ">
                        <img
                          src={pp_1}
                          alt=""
                          className="w-[48px] h-[48px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-y-[5px]">
                          <span className="text-[13px] font-[600] text-[#141522]">
                            Jason Momoa
                          </span>
                          <span className="font-[400] text-[rgba(20,21,34,0.7)] text-[12px]">
                            Sent you a message
                            <span className="empty:hidden font-[600] text-[#141522] text-[13px]"></span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-self-center col-start-4 col-end-5">
                        <span className="text-[#8E92BC] text-[12px] font-[400]">
                          3m Ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestActivity;
