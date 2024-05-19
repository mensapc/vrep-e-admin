import { Link } from "react-router-dom";

import authImg from "../../../assets/images/login.png";
import logo from '../../../assets/images/logo-vrep.png';
import LoginLogics from "./loginLogics";

function Login() {
  const [
    email,
    setEmail,
    password,
    setPassword,
    visible,
    setVisible,
    handleLogin,
  ] = LoginLogics();

  return (
    <>
    <main className="bg-white px-4 py-4">
    <div className="h-screen flex flex-row items-center justify-center flex-1 px-4 py-4 bg-background rounded-10">
    <div className="w-1/2 h-645 bg-gray-100 flex flex-col items-center justify-between">
        <div className="w-96 flex flex-row justify-between items-center bg-belll rounded-10 px-4 py-3 font-poppins">


        <h1 className="text-black text-16 font-poppins px-2 py-2 bg-background rounded-10">Admin </h1>
      <h1 className="font-poppins text-white text-16">Head Teacher </h1>
      <h1 className="font-poppins text-white text-16">Teacher </h1>
    </div>

    <div className="w-63">
            <img src={logo} alt="RPMS Logo" />
         
          </div>

          <form className="w-83 h-80 flex flex-col items-center justify-between" onSubmit={handleLogin}>
          <div className="">
          <h2 className="text-20 font-poppins text-black font-semibold">Login to your account with your email and password</h2>
          </div>
          <div className="flex flex-col w-full">
              <label className="text-register text-14 font-inter" htmlFor="email">Email</label>
           
              <input className="px-2 py-2 border border-login rounded-6 bg-email focus:outline-none"
                id="email"
                name="email"
                value={email}
                type="email"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password">Password</label>
          
              <input className="px-2 py-2 border border-login rounded-6 bg-email focus:outline-none"
                id="password"
                name="password"
                value={password}
                type={visible ? "password" : "text"}
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                required
              />
         
            </div>


            <button className="w-full bg-belll px-2 py-2 rounded-6 font-poppins text-white font-semibold" type="submit">
              Login
            </button>
            <Link to="/register" className="w-full px-2 py-2 rounded-6 border-2 border-belll text-belll font-poppins font-semibold flex items-center justify-center">
         
              Register
         
            </Link>

          
     

        <div className="w-full flex justify-between items-center">
              <div className="flex flex-row items-center justify-center">
                <input className="h-4 w-4 mr-2 text-belll" type="checkbox" id="remember" />
                <label className="text-belll font-inter" htmlFor="remember">Remember me</label>
              </div>
              <Link
                to="/forgotpassword"
                className="text-belll text-16 font-inter underline"
              >
                Forgot password?
              </Link>
            </div>
            </form>
        </div>
 
      <div className=" w-1/2 h-645 flex items-center justify-center">
      <img className="object-fit max-h-full max-w-full" src={authImg} alt="" />
    </div>
    </div>
      </main>
    </>
  );
}

export default Login;
