import Stepper from "./components/Stepper";
import{createContext,useState} from "react";
export const FormContext = createContext();
function App() {
  const[activeStep,setActiveStep]=useState(0);
  return (

    <FormContext.Provider value={{activeStep,setActiveStep}}>
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <Stepper />
    </div>
    </FormContext.Provider>
  );
}

export default App;