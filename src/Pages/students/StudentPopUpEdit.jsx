import React from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { studentEPUClose } from '../../redux/Slices/StudentEditPopupSlice';

const StudentPopUpEdit = () => {

  const dispatch = useDispatch();
  
  return (
    <div className=''>
    
        <div className=''>
                <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(studentEPUClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>

            <div className=' w-full  h-[65vh] grid grid-cols-1  overflow-auto '>

                <div className=' flex flex-col  my-1 mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Class*  :</label>
                <select className=' px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]'>

                      <option key="1" selected disabled>
                        Class
                      </option>
                      <option key="2" value="Grade 1">
                        Grade 1
                      </option>
                      <option key="3" value="Grade 2">
                        Grade 2
                      </option>
                      <option key="4" value="Grade 3">
                        Grade 3
                      </option>

                </select>
                </div>

                <div className=' flex flex-col my-1 mx-auto '>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Age* :</label>
                <input className=' px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='number'/>
                
                </div>

                <div className=' flex flex-col my-1 mx-auto'>
                
                <div className=' flex flex-col my-1 mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>State of Origin* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Gender* :</label>
                <select className=' px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]'>
                      <option key="1" value="male">
                        Male
                      </option>
                      <option key="2" value="female">
                        Female
                      </option>
                </select>                
                </div>
                <div className=' flex flex-col my-1 mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Mother / Phone  :</label>
                <input className=' px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                <div className=' flex justify-between w-[484px] mt-1'>

                <select className=' px-1 w-[170px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]'>
                      <option key="1" value="us">
                        United States (+1)
                      </option>
                      <option key="2" value="uk">
                        United Kingdom (+44)
                      </option>
                </select>  

                <input className='px-3 w-[300px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='tel'/>


                </div>
                
                </div>

                <div className=' flex flex-col my-1  mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Father Full Name* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='tel'/>
                
                <div className=' flex justify-between w-[484px] mt-1'>

                <select className=' px-1 w-[170px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]'>
                      <option key="1" value="us">
                        United States (+1)
                      </option>
                      <option key="2" value="uk">
                        United Kingdom (+44)
                      </option>
                </select>  

                <input className='px-3 w-[300px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='tel'/>


                </div>                
                </div>
                
                <div className=' flex flex-col my-1  mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Address* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>
          

          </div>

            <div className=' w-full flex justify-center items-center my-5'>

              <button className=' mr-5 border-2 border-[#364786] w-[240px] h-[48px] rounded bg-[#FFFBEC] font-[16px] text-[#364786]' onClick={() => dispatch(studentEPUClose())} >Cancel</button>
              <button className=' ml-5 w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[#FFFBEC]'  onClick={() => dispatch(studentEPUClose())} >Add</button>

            </div>
        </div>
    </div>
  )
}

export default StudentPopUpEdit