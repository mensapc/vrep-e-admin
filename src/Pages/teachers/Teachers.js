import React from 'react';
import Sidebar from '../../components/sidebar';
import { useState, useEffect } from 'react';
import { useWindowResize } from '../../util/windowResize';
import { CiSearch } from "react-icons/ci";
import teacherpic from '../../assets/teacher/art.png'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { teachersNames } from '../../util/TeachersPageData';
import { teachersDetails } from '../../util/TeachersPageData';
import { listSubject } from '../../util/TeachersPageData';
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux';
import { teacherAddOpen } from '../../redux/Slices/TeacherAddPopupSlice';
import { teacherDeleteOpen } from '../../redux/Slices/TeacherDeletePopupSlice';
import { teacherEditOpen } from '../../redux/Slices/TeacherEditPopupSlice';
import TeachersPopupAdd from './TeachersPopupAdd';
import TeachersPopupEdit from './TeachersPopupEdit';
import TeachersPopupDelete from './TeachersPopupDelte';

function Teachers() {
  const isMobile = useWindowResize();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const dispatch = useDispatch();

  const TeacherAdd=useSelector((state) => state.teacherAdd.value)
  const TeacherDelete=useSelector((state) => state.teacherDelete.value)
  const TeacherEdit=useSelector((state) => state.teacherEdit.value)


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

  return (
    <div className=" bg-[#f3f3ff]">
  
    {/* pop up */}


    <div className={`w-screen flex justify-center items-center h-screen bg-[rgba(133,153,221,0.5)] ${(TeacherEdit||TeacherDelete||TeacherAdd)?'translate-y-[0vh]':'translate-y-[-100vh]'}   fixed top-0 z-50 bgfi`} style={{backdropFilter: `blur(10px)`}} >

     <div className={` w-full h-full flex justify-center items-center ${(TeacherEdit||TeacherDelete||TeacherAdd)?'translate-y-[0vh]':'translate-y-[-100vh]'} transition-all ease-in-out duration-500 delay-100`}>
     {TeacherEdit&&
        <div className={`w-[50%] h-[90%] rounded bg-white p-3  `}>

          <TeachersPopupEdit/>

        </div>
     }
     
    {TeacherDelete&&
     <div className='w-[50%] h-[50%] rounded bg-white p-3  '>

          <TeachersPopupDelete/>

     </div>
    }
    {TeacherAdd&&
     <div className='w-[50%] h-[60%] rounded bg-white p-3  '>

          <TeachersPopupAdd/>

     </div>
    }      </div>

    </div>

    <div className=" flex max-lg:block">

     <div className="  max-lg:hidden  w-[400px]  h-screen ">
         
      <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

     </div>
         

      <div className=" py-5 pr-4 pl-2 w-full flex justify-between ">
      
       <div className=' w-[32%] h-auto  rounded-10 bg-white p-4  '>

          <div className=' flex  justify-between items-center'>

              <h1 className=' text-[20px] font-semibold text-[#0A112C]'>Teachers</h1>
                               
          </div>

          <div className=' flex justify-center items-center w-full mt-4 relative '>

                  <input type='search' className=' w-[287px] h-[40px] text-[13px] rounded-10 border pl-[16px] py-[8px] pr-[40px]' placeholder='Search' />

                  <span className=' absolute right-[30px] text-[23px] text-[#8599DD]'><CiSearch/></span>

          </div>

          <div className=' mt-5 h-[70vh] overflow-auto pr-3' >

                {teachersNames.map((pupil ,id) => (
                
                <div className={` flex justify-around ${id%2===0&&'bg-[#E9ECF8]'} my-2 `}>

                    <img className=' w-[48px] h-[48px] object-cover rounded-360 my-0.5'  src={pupil.pic} alt=''/>

                    <p className=' my-auto text-[13px] font-medium font-poppins'>{pupil.name}</p>
                </div>

                ))}

          </div>

          <div className=' flex justify-center items-center w-full mt-5'>

                <button className=' w-[240px] h-[48px] rounded bg-[#364786] text-white  ' onClick={() => dispatch(teacherAddOpen())}>Add New Teacher</button>

          </div>

       </div>

       <div className=' w-[32%] h-auto  rounded-10 bg-white p-4  '>

          <div className=' flex  justify-between items-center'>

              <h1 className=' text-[20px] font-semibold text-[#0A112C] w-[40%]'>Personal Information</h1>

              <div className=' flex justify-between items-center cursor-pointer text-[23px] text-[#364786]'>

                <p className=' mr-2' onClick={() => dispatch(teacherEditOpen())}><span className=' flex justify-center items-center w-full -mb-1.5'><FaRegEdit/></span> <span className=' text-[12px] font-medium font-poppins'>Edit</span></p>
                <p className=' ml-2' onClick={() => dispatch(teacherDeleteOpen())}><span className=' flex justify-center items-center w-full -mb-1.5'><MdDeleteOutline/></span><span className=' text-[12px] font-medium font-poppins'>Delete</span></p>

              </div>

          </div>

          <div className='  mb-4 mt-4 mx-auto flex justify-around w-[296px] h-[80px] border-2 border-[#8599DD] bg-[#E9ECF8] rounded-10'>

            <div className=' my-auto text-[#435596]'>
               <p>Sarah James</p>
               <p>Johnson Smith</p>
            </div>
              <img className=' my-auto w-[64px] h-[64px] object-cover rounded-360 '  src={teacherpic} alt=''/>

          </div>
          <div className=' mt-5 h-[70vh] overflow-auto pr-3' >

          {teachersDetails.map((pupild)=>(
          
          <div className=' mt-3'>

              <div>

                <p className=' text-[14px] font-medium font-poppins text-[#8599DD] '>{pupild.title} </p>
                <p className=' text-[15px] font-medium font-poppins text-[#435596] '>{pupild.detail}</p>

              </div>

              <div className=' w-full h-0.5 bg-[#E9ECF8] mt-2' />

          </div>

          ))}
          </div>

       </div>

       <div className=' w-[32%] h-auto  rounded-10 bg-white p-4  '>
      
          <div className=' flex  justify-between items-center'>

              <h1 className=' text-[20px] font-semibold text-[#0A112C]'>List of the Subject</h1>
                               
          </div>


          <div className=' mt-5 h-[90vh] overflow-auto pr-3' >
            {listSubject.map((Subject)=>(

            <div className=' w-full flex justify-center my-3'>
              
              <button className=' w-[75%] h-[48px] rounded-[5px] border-2 border-[#364786] text-[#364786] font-semibold'>{Subject}</button>
            
            </div>
            
            ))}

          </div>

       
       </div>

      </div>
    
    </div>

  </div>
);
}

export default Teachers;
