import{createContext,useState} from "react";
import Stepper from "./components/Stepper";
import Step from "./components/Step";
export const FormContext = createContext();
function App() {
  const[activeStep,setActiveStep]=useState(0);
  const [formData, setFormData] = useState({});

  return (

    <FormContext.Provider value={{activeStep,setActiveStep,formData, setFormData}}>
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <Stepper />
      <Step />
    </div>
    </FormContext.Provider>
  );
}

export default App;