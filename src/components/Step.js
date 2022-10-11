import React, { useContext } from "react";
import { FormContext } from "../App";
import Basic from "./Basic";

function Step() {
  const { activeStep } = useContext(FormContext);
  let stepContent;
  switch (activeStep) {
    case 0:
      stepContent = <Basic />;
        break;
   
        default:
        break;
  }

  return stepContent;
}

export default Step;