import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Images from "../../assets/Image";

const Authentication2 = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  // Email validation with domain extension
  const emailValidation = Yup.string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must end with a valid domain extension"
    )
    .required("Email is required");

  // Password validation
  const passwordValidation = Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required");

  const ValidationSchema = Yup.object({
    email: emailValidation,
    password: passwordValidation,
  });

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/home");
  };

  return (
    <section className="relative text-gray-600 body-font">
      {/* Background video */}
      <div className="absolute inset-0 bg-gray-300">
        <video
          src={Images.landingVid}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Form container */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="container px-5 py-24 mx-auto flex justify-center items-center">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Formik {isLogged ? "Sign Up " : "Login"}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Please enter your email and password to{" "}
              {isLogged ? "sign up" : "log in"}.
            </p>

            {/* Email Field */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password Field */}
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {isLogged ? "Sign Up" : "Login"}
            </button>

            {/* Toggle between Login and Sign-Up */}
            <p
              onClick={() => setIsLogged(!isLogged)}
              className="text-xs text-gray-500 mt-3 cursor-pointer"
            >
              {isLogged ? (
                <span>
                  Have an account?{" "}
                  <span className="text-indigo-500">Log in</span>
                </span>
              ) : (
                <span>
                  Don't have an account?{" "}
                  <span className="text-indigo-500">Sign Up</span>
                </span>
              )}
            </p>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default Authentication2;
