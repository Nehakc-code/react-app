import React, { useContext, useEffect } from "react";
import {FormContext} from "../App";
function Stepper() {
  const{activeStep} = useContext(FormContext);
  useEffect(() => {
    const stepperItems=document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step,i)=>{
      if(i<=activeStep) {
        step.classList.add("bg-indigo-500","text-white");
      }else{
        step.classList.remove("bg-indigo-500","text-white");
      }
    });
  },[activeStep]);
  return (
    <div>
    <div className="flex flex-col-2 w-80 justify-center items-center py-10">
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        1
      </div>
      <div className=" flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        2
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        3
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        4
      </div>
    </div>
    </div>
  );
}

export default Stepper;