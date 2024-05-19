import React from "react";
import vector from '../assets/images/Vector dashboard.png'


export default function PupilProfit() {
    return(
        <section className="w-66">
        <div className="w-full h-65 bg-white rounded-20  py-4 flex flex-col justify-between items-center ">
<div className="w-58 flex justify-between items-center">
    <div className="w-16 bg-bord rounded-10 flex flex-col items-center p-4">
        <span className="text-14 font-poppins text-days">Pupils</span>
        <h1 className="text-24 font-inter text-heading text-semibold">1.2K</h1>
    </div>
    <div className="w-35 bg-bord rounded-10 flex flex-col items-center p-4">
        <span className="text-14 font-poppins text-days">Profit</span>
        <h1 className="text-24 font-inter text-heading text-semibold">$135.020</h1>
    </div>
</div>
<div className="bg-bord flex flex-col justify-center items-center rounded-10 h-33 w-58 ">
    <div className="flex flex-col items-center ">
    <h1 className="text-24 font-inter text-heading text-semibold flex items-center">324.200 <span className="text-10 font-inter text-green rounded-4 bg-greenlight pl-2">+3.4%</span></h1>
    <span className="text-12 text-days">21 Apr, 19:56</span>
    </div>
  <div>
  <img src={vector} alt="" />
  </div>
   
</div>
        </div>
        </section>
    )
} 

