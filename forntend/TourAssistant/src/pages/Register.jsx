import React from "react";
import loginImage from "../../public/onboard.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Register = () => {
  // Validation Schema
  const resgisterSchema = Yup.object().shape({
    username: Yup.string().required("Please provide a valid username"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please provide a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  return (
    <motion.div
      className="w-full h-screen bg-gray-50 flex flex-col md:flex-row justify-center items-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section: Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={loginImage}
          alt="Login"
          className="w-3/4 h-auto drop-shadow-lg"
        />
      </motion.div>

      {/* Right Section: Form */}
      <motion.div
        className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hello Travelars </h1>
        <p className="text-gray-600 mb-8">
          Log in to your account and continue exploring the platform!
        </p>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={resgisterSchema}
          onSubmit={(values) => {
            console.log("Login Data:", values);
            // Handle login logic here (e.g., send data to API)
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 items-center"
            >
              {/* Username Field */}
              <div className="w-full">
                <input
                  type="text"
                  onChange={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  placeholder="Enter your username..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                    errors.username && touched.username
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.username && touched.username && (
                  <p className="text-red-500 text-sm mt-2 text-start">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Eamil Feild */}
              <div className="w-full">
                <input
                  type="text"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Enter your email..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                    errors.username && touched.username
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm mt-2 text-start">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="w-full">
                <input
                  type="password"
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Enter your password..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-sm mt-2 text-start">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-1/2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Log In
              </motion.button>
            </form>
          )}
        </Formik>

        <p className="mt-2 text-sm">
         Already have an accoubt{" "}
          <Link className="text-blue-600 font-semibold" to="/">Sign In</Link>{" "}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Register;
