import React from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { teacherDeleteClose } from '../../redux/Slices/TeacherDeletePopupSlice';

const TeachersPopupDelete = () => {

  const dispatch = useDispatch();
  
  return (
    <div className=''>
    
        <div className=''>
                
            <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(teacherDeleteClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>

            <div className=' w-full h-[20vh] flex justify-center items-center'>

                <p className=' text-[17px] text-[#082567] font-semibold'>Are you sure to delete?</p>

            </div>

            <div className=' w-full flex justify-center items-center my-5'>

              <button className=' mr-5 border-2 border-[#364786] w-[240px] h-[48px] rounded bg-[white] font-[16px] text-[#364786]' onClick={() => dispatch(teacherDeleteClose())} >Yes</button>
              <button className=' ml-5 w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[white]'  onClick={() => dispatch(teacherDeleteClose())} >No</button>

            </div>
        </div>
    </div>
  )
}

export default TeachersPopupDelete