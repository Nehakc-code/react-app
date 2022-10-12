
import React, { useContext } from "react";
import { Field, Form, Formik } from "formik";
import { FormContext } from "../App";
import guest from '../assets/guest.jpg';
import team from '../assets/team.jpg';
function Plan() {
  const { activeStep, setActiveStep } = useContext(FormContext);
  return (
    <Formik
    initialValues={{
      
    }}
      onSubmit={() => {
        setActiveStep(activeStep + 1);
      }}
      validator={() => ({})}>
    <Form className="flex flex-col justify-center ">
        <div className="text-2xl font-medium self-center mb-2">How are you planning to use Eden?</div>
        <div className="font-small self-center text-gray-900 mb-2">We'll streamline your setup experience accordingly. </div>
        <div className="flex flex-col-2 p-5 gap-2 " >
          <div >
            <input class="hidden" id="radio_1" type="radio" name="radio" checked />
            <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for="radio_1">
            <img className="mx-auto pb-5 flex justify-center" src={guest}  />
              <span class="text-l font-bold mt-2">For myself</span>
              <p>Write better think </p>
              <p>more, clearly stay </p>
              <p>organized</p>
            </label>
          </div>

          <div >
            <input class="hidden" id="radio_1" type="radio" name="radio" checked />
            <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for="radio_1">
            <img className="mx-auto pb-5 flex justify-center" src={team}  />
              <span class="text-l font-bold mt-2">With my team</span>
              <p>Wikis,Docs,Tasks </p>
              <p> and Projects all in</p>
              <p> one place</p>
            </label>
          </div>
        </div>
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="submit"
        >
          Create Workspace
        </button>
      </Form>
</Formik>
);
}
export default Plan;