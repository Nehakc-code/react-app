import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../App";
import * as yup from "yup";

function Workspace() {
  const { activeStep, setActiveStep, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    workspaceName: yup.string().required(),
    workspaceURL: yup.string().url().required(),
  });

  return (
    <Formik
      initialValues={{
        workspaceName: "",
        workspaceURL: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStep(activeStep + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center">
      <div className="text-2xl font-medium self-center mb-2">Lets Set up a home for all your work</div>
      <div className="font-small self-center text-gray">You can always create another workspace later </div>
        <div className="flex  mb-5">
          <label className="font-medium text-gray-900">Workspace Name</label>
          <Field
            name="workspaceName"
            className="rounded-md border-2 p-2 mb-5 w-full  "
            placeholder="My Workspace"
          />
        </div>
        <ErrorMessage name="workspaceName" render={renderError} />
        <div className="flex flex-col items-center mb-2"></div>
        <div class="grid grid-cols-0 gap-0">
               <label for="company_website" class="block font-medium text-gray-900">
                Workspace Url
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class=" border-2 p-2 mb-5">
                    http://
                  </span>
                  <input type="text" name="company_website" id="company_website" class="border-2 w-full p-2 mb-5 border-gray-300" placeholder="www.example.com"/>
                </div>
              </div>
        <ErrorMessage name="workspaceURL" render={renderError} />
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

export default Workspace;