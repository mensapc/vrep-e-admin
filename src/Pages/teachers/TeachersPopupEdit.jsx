import React from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { teacherEditClose } from '../../redux/Slices/TeacherEditPopupSlice';
import Frame from '../../assets/Frame.png'

const TeachersPopupEdit = () => {

  const dispatch = useDispatch();
  
  return (
    <div className=''>
    
        <div className=''>
                <div className=' w-full flex justify-end  cursor-pointer ' onClick={() => dispatch(teacherEditClose())}><p className='mr-10 mt-3 text-2xl'><IoClose/></p></div>

            <div className=' w-full  h-[65vh] grid grid-cols-1  overflow-auto '>
            
            <div className=' flex  w-full justify-center' >
                <h1 className='  my-2 w-[484px] text-[16px] font-medium text-[#0A112C] font-poppins '>Personal Details</h1>
            </div>
            
            <div className=' flex  w-full justify-center'>
             <div className=' w-[484px] flex justify-between mx-auto'>
              <div className="relative">
                
                <label htmlFor="file-input">
                
                 <img className="w-[153px] h-[190px] mt-2 cursor-pointer" src={Frame} alt="" />
                
                </label>
                
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }} 
                 />
              
              </div>

              <div>

               <div className=' flex flex-col my-1  mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Address* :</label>
                <input className='px-3 w-[274px] h-[88px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>

                <div className=' flex flex-col my-2  mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Date of Birth* :</label>
                <input className='px-3 w-[274px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='date'/>
                
                </div>

              </div>

             </div>
            </div>

                <div className=' flex flex-col my-1 mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>State of Origin* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>


                <div className=' flex flex-col my-1  mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Phone* :</label>
                
                <div className=' flex justify-between w-[484px] '>

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

                <div className=' flex  w-full justify-center' >
                    <h1 className='  my-3 w-[484px] text-[16px] font-medium text-[#0A112C] font-poppins '>Education </h1>
                </div>


                <div className=' flex flex-col my-1 mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>University* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>   
                
                <div className=' flex flex-col  my-1 mx-auto'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Level Of Education* :</label>
                <select className=' px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]'>

                      <option key="1" selected disabled>
                        Education
                      </option>
                      <option key="2" value="Grade 1">
                        bachelor's
                      </option>
                      <option key="3" value="Grade 2">
                        master's
                      </option>
                      <option key="4" value="Grade 3">
                        phd's
                      </option>

                </select>
                </div>
          

          </div>

            <div className=' w-full flex justify-center items-center my-5'>

              <button className=' mr-5 w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[white]'  onClick={() => dispatch(teacherEditClose())} >Save</button>

              <button className=' ml-5 border-2 border-[#364786] w-[240px] h-[48px] rounded bg-[white] font-[16px] text-[#364786]' onClick={() => dispatch(teacherEditClose())} >Cancel</button>

            </div>
        </div>
    </div>
  )
}

export default TeachersPopupEdit