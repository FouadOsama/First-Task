import React from "react";
import photo from "../../../assets/pics/library.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Input from "../../../components/Input/index.tsx";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './Login.scss';

const Login = (): JSX.Element => {

  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema
    = Yup.object().shape({
      email: Yup.string()
        .required('This field is required')
        .email('Please enter a valid email format'),
      password: Yup.string()
        .required('This field is required')
    });


  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted:', values);
    setSubmitting(true);
    const user = {email: values.email, password: values.password}
    localStorage.setItem('user', JSON.stringify(user));
    setSubmitting(false);
    navigate("/home");
  };

  return (
    <div className="bg-inputBg h-screen flex justify-center items-center p-10">
      <div className="grid grid-cols-3 w-9/12 bg-white  rounded-3xl">
        <div className="col-span-2 p-10">
          <h1 className="text-2xl font-bold">Please enter your Email address and Password</h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, errors, handleChange }) => (
              <Form className="w-full mt-10 mb-10 me-0 ms-0">
                <Input
                  placeholder="Enter your Email"
                  value={values.email}
                  type="text"
                  name="email"
                  wrapperClassName="my-5"
                  onChange={(e) => handleChange(e)}
                  error={errors.email}
                />

                <Input
                  placeholder="Enter your Password"
                  value={values.password}
                  type="password"
                  wrapperClassName="my-5"
                  name="password"
                  onChange={handleChange}
                  error={errors.password}
                />

                <div className="mt-4 mb-5">
                  <a href="#" className="font-sans">
                    Forgot password?
                  </a>
                </div>

                <div>
                  <Button type="submit" variant="contained" disabled={isSubmitting}>Sign In</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>


        <div className="text-center m-0 col-span-1 p-0 ">
          <img className="w-full p-0 m-0 h-full rounded-e-3xl" src={photo} alt="photo" />
        </div>
      </div>
    </div>


  )
}

export default Login;