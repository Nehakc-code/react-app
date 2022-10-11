import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../App";
import * as yup from "yup";

function Basic() {
    const { activeStep, setActiveStep, formData, setFormData } = useContext(FormContext);

    const renderError = (message) => (
        <p className="italic text-red-600">{message}</p>
    );

    const ValidationSchema = yup.object().shape({
        name: yup.string().required(),
        displayName: yup.string().required(),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
                const data = { ...formData, ...values };
                setFormData(data);
                setActiveStep(activeStep + 1);
            }}>
            <Form className="flex flex-col justify-center items-center">
                <div className="text-2xl font-medium self-center mb-2">Welcome!First things first... </div>
                <div className="flex flex-col items-start mb-2">
                    <label className="font-medium text-gray-900">Full Name</label>
                    <Field
                        name="name"
                        className="rounded-md border-2 p-2"
                        placeholder="Steve Jobs"
                    />
                </div>
                <ErrorMessage name="name" render={renderError} />
                <div className="flex flex-col items-start mb-2">
                    <label className="font-medium text-gray-900">Display Name</label>
                    <Field
                        name="displayName"
                        className="rounded-md border-2 p-2"
                        placeholder="Steve"
                    />
                </div>
                <ErrorMessage name="displayName" render={renderError} />
                <button
                    className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
                    type="submit">
                    Create Workspace
        </button>
            </Form>
        </Formik>
    );
}
export default Basic;