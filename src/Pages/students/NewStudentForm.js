import React from 'react';
import Sidebar from '../../components/sidebar';
import { useState, useEffect } from 'react';
import { useWindowResize } from '../../util/windowResize';
import Frame from '../../assets/Frame.png'
import threed from '../../assets/3d.png'
import { useNavigate } from "react-router-dom";


function NewStudentForm() {
  const isMobile = useWindowResize();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

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

  const handleButton=()=>{
        
    navigate("/pupils");

}

  return (
    <div className=" bg-[#f3f3ff]">
  
      <div className=" flex max-lg:block">

       <div className="  max-lg:hidden  w-[400px]  h-screen ">
           
        <Sidebar isOpen={sidebarOpen} handleToggle={handleToggle} />

       </div>
           

        <div className=" py-5 py-5 pr-4 pl-2 w-full flex justify-between ">
        
         <div className=' w-full h-auto  rounded-10 bg-white p-4 '>
         
         <h1 className=' text-[20px] font-semibold text-[#0A112C]'>Create Pupils</h1>

          <form>

          <div className=' w-full flex justify-between mt-10'>

            <div>

              <p className=' text-[14px] font-medium font-poppins text-[#0A112C]'>Personal Details</p>
              
              <div className="relative">
                
                <label htmlFor="file-input">
                
                 <img className="w-[153px] h-[190px] mt-3 cursor-pointer" src={Frame} alt="" />
                
                </label>
                
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }} 
                 />
              
              </div>

            
            </div>

            <div>

            <img className=' w-[413px] h-[310px] -mt-5' src={threed} alt=''/>


            </div>

          </div>

          <div className=' w-full  grid grid-cols-2 '>

                <div className=' flex flex-col my-3 '>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Full Name* :</label>
                <input className=' px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>

                <div className=' flex flex-col ml-auto my-3'>
                
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

                <div className=' flex flex-col my-3'>
                
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
                <div className='ml-auto flex flex-col my-3'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Mother Full Name* :</label>
                <input className=' px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>
                <div className=' flex flex-col my-3'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>State of Origin* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>
                <div className='ml-auto flex flex-col my-3'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Mother Phone* :</label>
                <div className=' flex justify-between w-[484px]'>

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
                <div className=' flex flex-col my-3'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Date of Birth* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type="date"/>
                
                </div>
                <div className='ml-auto flex flex-col my-3'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Father Full Name* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='tel'/>
                
                </div>
                <div className=' flex flex-col my-3'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Address* :</label>
                <input className='px-3 w-[484px] h-[44px] rounded border bg-[#F6F6F6]  border-[#99A1DA]' type='text'/>
                
                </div>
                <div className='ml-auto flex flex-col my-3'>
                
                <label className=' 14px font-medium font-poppins text-[#8599DD] mb-1'>Father Phone* :</label>
                <div className=' flex justify-between w-[484px]'>

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
          
          </div>


            <div className=' w-full flex justify-center items-center mt-10 mb-5'>

              <button className=' mr-5 border-2 border-[#364786] w-[240px] h-[48px] rounded bg-[#FFFBEC] font-[16px] text-[#364786]' onClick={() => handleButton()}>Cancel</button>
              <button className=' ml-5 w-[240px] h-[48px] rounded bg-[#364786] font-[16px] text-[#FFFBEC]'  onClick={() => handleButton()}>Add</button>

            </div>

          </form>
         </div>
        
        </div>
      
      </div>

    </div>

  );
}

export default NewStudentForm;
