import authImg from "../../../assets/images/login.png";
import logo from '../../../assets/images/logo-vrep.png';
import RegisterLogics from "./RegisterLogics";
import { IoIosArrowDown } from "react-icons/io";
import { RiEyeCloseLine } from "react-icons/ri";

function Register() {

  const [
        name,
        email,
        number,
        code,
        password,
        confirmPassword,
        visible

  ] = RegisterLogics()
    return (
        <>
        <main className="bg-white px-4 py-4">
          <div className="flex flex-row items-center justify-center h-screen flex-1 px-4 py-4 bg-background rounded-10">
        
            <div className="w-1/2 h-645 bg-gray-100 flex flex-col items-center">
        
    
              <div className="w-63 py-4">
                <img src={logo} alt="logo" />
             
              </div>
             
             
           
              <form className="w-83 h-80 flex flex-col items-start" >
              <div className="py-4">
              <h2 className="text-20 font-poppins text-black font-semibold">Register </h2>
         
              </div>
              <div className="flex flex-col w-full">
              <label className="text-register text-14 font-inter" htmlFor="email">Name Surname</label>
           
              <input className="px-2 py-2 border border-login rounded-6 bg-email"
                id="email"
                name="email"
      value={name}
                type="email"
                placeholder=""
       
                required
              />
            </div>
                <div className="flex flex-col w-full py-4">
                  <label className="text-register text-14 font-inter"  htmlFor="email">Email</label>
               
                  <input className="px-2 py-2 border border-login rounded-6 bg-email focus:outline-none"
                    id="email"
                    name="email"
                    value={email}
                    type="email"
                    placeholder=""
             
                    required
                  />
                </div>


                <div className="flex flex-col w-full">


              <label className="text-register text-14 font-inter"  htmlFor="email">Phone Number</label>

<div className="flex justify-between">
              <div className="relative">
                
              <input type="text"
              className="pl-10 w-18 px-2 py-2 border border-login rounded-6 text-14 text-belll bg-email focus:outline-none"
              id="prefix"
              name="prefix"
            placeholder="+238"
          
    
              />
                <div className="absolute top-0 right-0 flex items-center h-full px-2"> 
      <IoIosArrowDown className="text-gray-400" />
    </div>
              </div>
        <div>
        <input className="w-76 px-2 py-2 border border-login rounded-6 bg-email focus:outline-none"
                id="email"
                name="email"
                value={number}
                type="tel"
                placeholder=""
              
                required
              />
        </div>
        </div>
            </div>
            <div className="flex flex-col w-full py-4">
              <label className="text-register text-14 font-inter"  htmlFor="email">Admin Code</label>
           
              <input className="px-2 py-2 border border-login rounded-6 bg-email focus:outline-none"
                id="email"
                name="email"
                value={code}
                type="email"
                placeholder=""
            
                required
              />
            </div>
            <div className="relative flex flex-col w-full">
              <label className="text-register text-14 font-inter"  htmlFor="email">Password</label>
           
              <input className="px-2 py-2 border border-login rounded-6 bg-email focus:outline-none"
                id="email"
                name="email"
                value={password}
                type="email"
                placeholder=""
         
                required
              />
<div className="absolute top-0 right-0 flex items-center h-full px-3 ">
<RiEyeCloseLine />
</div>


                 <div className=" flex justify-between">
              <span className="text-12 text-pass text-amiko">must contain min 6 char.</span>
                <span className="text-12 text-pass text-amiko px-3">6/20</span>
              </div>
            </div>
            <div className="relative flex flex-col w-full pt-4">
              <label className="text-register text-14 font-inter"  htmlFor="email">Confirm Password</label>
           
              <input className="px-2 py-2 border border-login rounded-6 bg-email focus:outline-none"
                id="email"
                name="email"
                value={confirmPassword}
                type="email"
                placeholder=""
     
                required
              />

<div className="absolute top-0 right-0 flex items-center h-full px-3">
<RiEyeCloseLine />
</div>
              <div className="flex justify-between">
              <span className="text-12 text-pass text-amiko">must contain min 6 char.</span>
                <span className="text-12 text-pass text-amiko px-3">6/20</span>
              </div>
               
            </div>
                <div className="w-full h-auto py-4 flex flex-col justify-center items-center">
                <span className="text-12 text-center text-pass w-4/5 pb-4">
    By continuing you agree to our
    <a href="#" className="text-belll underline ml-1">Terms of Service </a>
    and
    <a href="#" className="text-belll underline ml-1">Privacy Policy</a>
  </span>
                <button className="w-full bg-belll px-2 py-2 rounded-6 font-poppins text-white font-semibold" type="submit">
                Create Account
                </button>
                </div>
            
              </form>
            </div>
            <div className=" w-1/2 h-645 flex items-center justify-center">
              <img className="object-fit max-h-full" src={authImg} alt="" />
            </div>
          </div>
          </main>
        </>
      );
    }
    
    

export default Register;