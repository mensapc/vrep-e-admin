import React from 'react';
import Sidebar from '../../components/sidebar';
import { useState, useEffect } from 'react';
import { useWindowResize } from '../../util/windowResize';
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import studentpic from '../../assets/student-profile.png'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { pupilsNames } from '../../util/PupilsPageData';
import { pupilsDetails } from '../../util/PupilsPageData';
import { pupilsResluts } from '../../util/PupilsPageData';
import { pupilsSubjects } from '../../util/PupilsPageData';
import { classesDropDown } from '../../util/PupilsPageData';
import { useNavigate } from "react-router-dom";
import StudentPopUpEdit from './StudentPopUpEdit';
import StudentPopUpDelete from './StudentPopUpDelete';
import { useDispatch , useSelector } from 'react-redux';
import { studentEPUOpen } from '../../redux/Slices/StudentEditPopupSlice';
import { studentDPUOpen } from '../../redux/Slices/StudentDeletePopupSlice';

function Dashboard() {
  const isMobile = useWindowResize();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [classDrop, setclassDrop] = useState(false);
  const [whichClassDrop, setWhichClassDrop] = useState(classesDropDown[0]);

  const dispatch = useDispatch();

  const StudentEPU=useSelector((state) => state.studentEPU.value)
  const StudentDPU=useSelector((state) => state.studentDPU.value)


  const navigate = useNavigate();

  function handleToggle() {
    setSidebarOpen(prevState => !prevState);
    console.log('open')
  }

  useEffect(() => {
    if (!isMobile) {
      
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const handleCreate=()=>{
        
    navigate("/pupils/new");

}

  const handleDrop=(name)=>{
        
    setclassDrop(false);
    setWhichClassDrop(name);
  }
  return (
    <div className=" bg-[#f3f3ff]">
  
      {/* pop up */}


      <div className={`w-screen flex justify-center items-center h-screen bg-[rgba(133,153,221,0.5)] ${(StudentEPU||StudentDPU)?'translate-y-[0vh]':'translate-y-[-100vh]'}   fixed top-0 z-50 bgfi`} style={{backdropFilter: `blur(10px)`}} >

       <div className={` w-full h-full flex justify-center items-center ${(StudentEPU||StudentDPU)?'translate-y-[0vh]':'translate-y-[-100vh]'} transition-all ease-in-out duration-500 delay-100`}>
       {StudentEPU&&
          <div className={`w-[50%] h-[90%] rounded bg-white p-3  `}>

            <StudentPopUpEdit/>

          </div>
       }
       
      {StudentDPU&&
       <div className='w-[50%] h-[50%] rounded bg-white p-3  '>

            <StudentPopUpDelete/>

       </div>
      }
      </div>

      </div>

      <div className=" flex max-lg:block">

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>
           

        <div className=" py-5 pr-4 pl-2 w-full flex justify-between ">
        
         <div className=' w-[32%] h-auto  rounded-10 bg-white p-4  '>

            <div className=' flex  justify-between items-center'>

                <h1 className=' text-[20px] font-semibold text-[#0A112C]'>Pupils</h1>
                
                <div className=' relative'>
                 
                 <div className=' w-[112px] h-[32px] rounded-10 border border-[#8599DD] flex justify-between items-center cursor-pointer' onClick={() => setclassDrop(!classDrop)}>

                    <p className=' flex justify-between w-full mx-2 text-[14px] font-semibold text-[#364786]'><span>{whichClassDrop}</span> <span className=' my-auto'><IoIosArrowDown/></span></p>

                 </div>
                
                    {classDrop&&
                    
                    <div className='w-[112px] h-[100px] rounded-10 border border-[#8599DD] flex flex-col justify-around absolute top-[32px] z-10 bg-white  overflow-auto'>
                      
                      {classesDropDown.map((CDD) => (

                        <p className=' flex justify-center w-full  text-[14px] font-semibold text-[#364786] cursor-pointer' onClick={() => handleDrop(CDD)}><span>{CDD}</span> </p>

                      ))}
   
                    
                       
                   
                   </div>
                  }

                </div>
            </div>

            <div className=' flex justify-center items-center w-full mt-4 relative '>

                    <input type='search' className=' w-[287px] h-[40px] text-[13px] rounded-10 border pl-[16px] py-[8px] pr-[40px]' placeholder='Search' />

                    <span className=' absolute right-[30px] text-[23px] text-[#8599DD]'><CiSearch/></span>

            </div>

            <div className=' mt-6 h-[75vh] overflow-auto pr-3' >

                  {pupilsNames.map((pupil ,id) => (
                  
                  <div className={` flex justify-around ${id%2===0&&'bg-[#E9ECF8]'} my-2 `}>

                      <img className=' w-[48px] h-[48px] object-cover rounded-360 my-0.5'  src={pupil.pic} alt=''/>

                      <p className=' my-auto text-[13px] font-medium font-poppins'>{pupil.name}</p>
                  </div>

                  ))}

            </div>

            <div className=' flex justify-center items-center w-full mt-[23px]'>

                  <button className=' w-[240px] h-[48px] rounded bg-[#364786] text-white  ' onClick={() => handleCreate()}>Create Pupils</button>

            </div>

         </div>

         <div className=' w-[32%] h-auto  rounded-10 bg-white p-4  '>

            <div className=' flex  justify-between items-center'>

                <h1 className=' text-[20px] font-semibold text-[#0A112C] w-[40%]'>Personal Information</h1>

                <div className=' flex justify-between items-center cursor-pointer text-[23px] text-[#364786]'>

                  <p className=' mr-2' onClick={() => dispatch(studentEPUOpen())}><span className=' flex justify-center items-center w-full -mb-1.5'><FaRegEdit/></span> <span className=' text-[12px] font-medium font-poppins'>Edit</span></p>
                  <p className=' ml-2' onClick={() => dispatch(studentDPUOpen())}><span className=' flex justify-center items-center w-full -mb-1.5'><MdDeleteOutline/></span><span className=' text-[12px] font-medium font-poppins'>Delete</span></p>

                </div>

            </div>

            <div className='  mb-4 mt-4 mx-auto flex justify-around w-[296px] h-[80px] border-2 border-[#8599DD] bg-[#E9ECF8] rounded-10'>

              <div className=' my-auto text-[#435596]'>
                 <p>Sarah James</p>
                 <p>Johnson Smith</p>
              </div>
                <img className=' my-auto w-[64px] h-[64px] object-cover rounded-360 '  src={studentpic} alt=''/>

            </div>
                    
            {pupilsDetails[0].map((pupild)=>(
            
            <div className=' mt-3'>

                <div>

                  <p className=' text-[14px] font-medium font-poppins text-[#8599DD] '>{pupild.title} </p>
                  <p className=' text-[15px] font-medium font-poppins text-[#435596] '>{pupild.detail}</p>

                </div>

                <div className=' w-full h-0.5 bg-[#E9ECF8] mt-2' />

            </div>

            ))}

         </div>

         <div className=' w-[32%] h-auto  rounded-10  flex flex-col justify-between '>
        
          <div className=' bg-white p-4  rounded-10 h-[45vh]  '>
          
           <h1 className=' text-[20px] font-semibold text-[#0A112C] w-[40%]'>Results</h1>
          
            <div className=' mt-4 h-[80%] overflow-auto pr-3'>

             {pupilsResluts[0].map((pupilsr)=>(
             
             <div className=' border-[1.5px] my-3 flex justify-around w-full h-[64px] rounded-10 border-[#8599DD]'>

              <div className=' text-center text-[13px] font-medium font-poppins text-[#212F5F] my-auto'>

                  <p>{pupilsr.grade}</p>
                  <div className=' w-[86px] h-0.5 bg-[#E9ECF8]' />
                  <p>{pupilsr.term}</p>

              </div>

              <div className=' my-auto'>

                <button className=' w-[160px] h-[32px] rounded bg-[#364786] text-white text-[14px] font-semibold'>See Details </button>

              </div>

             </div>
             ))}
            </div>

          </div>
 
            <div className=' h-[5vh]' />

          <div className=' bg-white p-4  rounded-10 h-[60vh] overflow-auto'>

            <h1 className=' text-[18px] font-semibold text-[#082567] w-[40%]'>Attendance</h1>

            <div className=' w-full h-[48px] text-[24px] [&>p]:my-auto text-[#435596] font-medium font-poppins rounded-10 drop-shadow-md shadow flex justify-around mt-3'>

                    <p>100</p>

                    <div className=' w-0.5 h-[30px] my-auto bg-[#8599DD]' />

                    <p>120</p>

            </div>

            <div>

             <h1 className=' text-[18px] font-semibold text-[#082567] mt-5'>Teacher’s Remark</h1>

              <div className=' w-full  min-h-[120px] h-auto  rounded-10 shadow p-3 mt-1.5 text-[13px] text-[#435596] leading-[18px] font-medium font-poppins'>
           
               <p>Run outside as soon as door open scream at teh bath yet roll on the floor purring your whiskers off find a way to fit in tiny box. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?.</p>
             
              </div>
           
            </div>

            <div>

             <h1 className=' text-[18px] font-semibold text-[#082567] mt-5'>Head Teacher’s Remark</h1>

              <div className=' w-full min-h-[120px] h-auto rounded-10 shadow p-3 mt-1.5 text-[13px] text-[#435596] leading-[18px] font-medium font-poppins'>
           
               <p>Run outside as soon as door open scream at teh bath yet roll on the floor purring your whiskers off find a way to fit in tiny box. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?.</p>
             
              </div>
           
            </div>

            <div className=' grid grid-cols-2 w-full mt-5 gap-3'>

              {pupilsSubjects[0].map((pupilsS)=>(
              
              <div className=' flex justify-between '>

                <p className=' text-[12px] font-medium font-poppins my-auto  text-[#212F5F]'>{pupilsS.name}</p>

                <span className=' w-[32px] h-[32px] ronded-[6px] border border-[#99A1DA] bg-[#F6F6F6] flex justify-center items-center text-[14px] text-[#435596]'>{pupilsS.grade}</span>

              </div>

              ))}

            </div>

          </div>
         
         </div>

        </div>
      
      </div>

    </div>
  );
}

export default Dashboard;

