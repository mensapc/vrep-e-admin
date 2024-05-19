import React,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { classesANCClose } from '../../redux/Slices/AddClassPopupSlice';

const CreateClassPopup = () => {

  const dispatch = useDispatch();

  const [isDone , setIsDone] = useState(false)

  return (
    <div className=' h-full'>
        {!isDone?
        <div className='h-full'>
                
            <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(classesANCClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>

            <div className=' w-full h-[17vh] flex justify-center items-center'>

                <p className=' text-[20px] text-[#082567] font-semibold'>Create Class</p>

            </div>
            <div className=' flex  w-full justify-center items-center '>
              <div className=' flex flex-col  mx-auto  ' >
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Class Name</label>
                <input className=' px-3 w-[544px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
              </div>
            </div>
            <div className=' w-full flex justify-center items-center my-5'>

              <button className=' mr-5 border-2 border-[#364786] w-[240px] h-[48px] rounded bg-[#FFFBEC] font-[16px] text-[#364786]' onClick={() => dispatch(classesANCClose())} >Cancel</button>
              <button className=' ml-5 w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[#FFFBEC]'  onClick={() => setIsDone(true)} >Register</button>

            </div>
        </div>
        
        :

        <div className='h-full'>
                
                <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(classesANCClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>
    
                <div className=' w-full h-[17vh] flex justify-center items-center mt-4'>
    
                    <p className=' text-[20px] text-[#082567] font-semibold'>New Class has been added.</p>
    
                </div>
                <div className=' w-full flex justify-center items-center my-5'>
    
                  <button className='w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[#FFFBEC]'  onClick={() => dispatch(classesANCClose())} >Go back to Classes Page</button>
    
                </div>
            </div>
        }
        
    </div>
  )
}

export default CreateClassPopup