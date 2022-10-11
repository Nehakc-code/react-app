//Success.js
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";

function Success() {

  return (
    <Formik>
    <Form className="flex flex-col justify-center ">
      <div className="text-2xl font-medium self-center mb-2">Congratulations,Eren</div>
      <div className="font-small self-center text-gray-900 mb-2">You have completed onboarding,you can start using the Eden! </div>
    </Form>
    </Formik>
  );
}

export default Success;
