import React, { useEffect, useState } from "react";
import authImg from "../../assets/images/login.png";
import logo from '../../assets/images/logo-vrep.png';


function ForgotPassword() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8080/reset/password/admin"
  //       );

  //       if (!response.ok) {
  //         // Handle non-successful responses (status codes other than 2xx)
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const result = await response.message;
  //       setData(result);
  //     } catch (error) {
  //       // Handle errors, including network errors and HTTP errors
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []); // Make the API call when the component mounts


  return (
    <>
    <main className="bg-white px-4 py-4">
      <div className="flex flex-row items-center justify-center h-screen flex-1 px-4 py-4 bg-background rounded-10">
    
        <div className="w-1/2 h-741 bg-gray-100 flex flex-col items-center">
    

          <div className="w-63 py-4">
            <img src={logo} alt="logo" />
         
          </div>
         
         
       
          <form className="w-83 h-80 flex flex-col items-center" >
          <div className="">
          <h2 className="text-20 font-poppins text-black font-semibold">Forgot Password? </h2>
          <p className="text-16 font-poppins text-belll py-4 font-medium">Please enter your email address here. The reset instructions will be sent to your email.</p>
          </div>
            <div className="flex flex-col w-full py-4">
              <label htmlFor="email">Email</label>
           
              <input className="px-2 py-2 border border-login rounded-6 bg-email"
                id="email"
                name="email"
            
                type="email"
                placeholder=""
             
                required
              />
            </div>
            <div className="w-full py-4">
            <button className="w-full bg-belll px-2 py-2 rounded-6 font-poppins text-white font-semibold" type="submit">
             Reset Password
            </button>
            </div>
        
          </form>
        </div>
        <div className=" w-1/2 h-auto bg-gray-200 flex items-center justify-center">
          <img className="object-fit max-w-full h-auto " src={authImg} alt="" />
        </div>
      </div>
      </main>
    </>
  );
}


export default ForgotPassword;
