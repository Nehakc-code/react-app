import{createContext,useState} from "react";
import Stepper from "./components/Stepper";
import Step from "./components/Step";
import Logos from "./components/Logos";
export const FormContext = createContext();
function App() {
  const[activeStep,setActiveStep]=useState(0);
  const [formData, setFormData] = useState({});

  return (

    <FormContext.Provider value={{activeStep,setActiveStep,formData, setFormData}}>
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <Logos/>
      <Stepper />
      <Step />
    </div>
    </FormContext.Provider>
  );
}

export default App;