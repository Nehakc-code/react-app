//Success.js
import React from 'react';
import { Form, Formik } from "formik";
import image from '../assets/done.jpg';
function Success() {

  return (
    <Formik>
    <Form className="flex flex-col justify-center ">
    <img className="mx-auto pb-5 flex justify-center" src={image}  />
      <div className="text-3xl font-medium self-center mb-2">Congratulations,Eren</div>
      <div className="font-small self-center text-gray-600 mb-2">You have completed onboarding,you can start using the Eden! </div>
      <button
          className="rounded-md bg-indigo-500 font-medium text-white my-6 p-2"
          type="submit"
        >
         Launch Eden
        </button>
    </Form>
    </Formik>
  );
}

export default Success;
