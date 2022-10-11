import React, { useContext } from "react";
import { FormContext } from "../App";
import Basic from "./Basic";
import Workspace from "./Workspace";
import Plan from "./Plan";
import Success from "./Success";

function Step() {
  const { activeStep } = useContext(FormContext);
  let stepContent;
  switch (activeStep) {
    case 0:
      stepContent = <Basic />;
        break;
    case 1:
       stepContent = <Workspace />;
        break;
    case 2:
       stepContent = <Plan />;
        break;
    case 3:
        stepContent = <Success />;
        break;
        default:
        break;
  }

  return stepContent;
}

export default Step;