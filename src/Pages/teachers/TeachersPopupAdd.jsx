import React from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { teacherAddClose } from '../../redux/Slices/TeacherAddPopupSlice';
import { useState } from 'react';
const TeachersPopupAdd = () => {
const [popup, setPopup] = useState(false)
const [selectedType, setSelectedType] = useState(false);
const [setText, setSetText] = useState('Teacher');

  const dispatch = useDispatch();
  
const handleTeacherTypeSelection = (type) => {

  setSelectedType(true)

  setSetText(type)

}


  return (
    <div className=''>
    
        <div className=''>
                
          {!selectedType ? <>


           <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(teacherAddClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>

            <div className=' w-full h-[10vh] flex justify-center items-center mt-10'>

                <p className=' text-[20px] text-[#082567] font-semibold'>Add A Teacher</p>

            </div>

            <div className=' w-full flex justify-center items-center my-5'>

              <button className=' border-2 border-[#364786] w-[240px] h-[48px] rounded bg-[white] text-[16px] text-[#364786] font-semibold'  onClick={() => handleTeacherTypeSelection("Head Teacher")} >Head Teacher </button>
              <button className=' ml-5 w-[240px] h-[48px] rounded bg-[#364786] text-[16px] text-[white]'  onClick={() => handleTeacherTypeSelection("Teacher")} >Teacher</button>

            </div>



          </> : <>

            <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(teacherAddClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>

            <div className=' w-full h-[10vh] flex justify-center items-center mt-10'>

                <p className=' text-[20px] text-[#082567] font-semibold'>Add New {setText}</p>

            </div>
            <div className=' w-full flex justify-center'>
            <div className=' flex flex-col my-1 mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>E-mail :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='email'/>
                
            </div>   
            </div>

            <div className=' w-full flex justify-center items-center my-5'>

              <button className=' w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[white]'  onClick={() => dispatch(teacherAddClose())} >Send Link</button>

            </div>

            </> }

        </div>
    </div>
  )
}

export default TeachersPopupAdd;