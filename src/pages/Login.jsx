import React from "react";
import loginImage from "../assets/login.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Fixing import
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../constant/AxiosInstance";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import { tr } from "framer-motion/client";
// Component Start
// fix 
const LoginScreen = () => {
  // Yup Validation Schema
  const navigation  =  useNavigate();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Please provide a valid username"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  // Api Calling
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (data) => {
      try {
        const { data: response } = await axiosInstance.post("/login", data);
        return response;
      } catch (error) {
        console.error(error);
        throw new Error("Invalid login credentials");
      }
    },
    onSuccess: (response) => {
      console.log(response);
      toast.success(response?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigation("/home");
      localStorage.setItem("is_login" , true)
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message || "An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
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
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</h1>
        <p className="text-gray-600 mb-8">
          Log in to your account and continue exploring the platform!
        </p>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess: () => resetForm(),
            });
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
              <motion.div className="w-full">
                <input
                  type="text"
                  onChange={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  placeholder="Enter your username..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${errors.username && touched.username
                      ? "border-red-500"
                      : "border-gray-300"
                    }`}
                />
                {errors.username && touched.username && (
                  <p className="text-red-500 text-sm mt-2 text-start">
                    {errors.username}
                  </p>
                )}
              </motion.div>

              {/* Password Field */}
              <motion.div className="w-full">
                <input
                  type="password"
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Enter your password..."
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                    }`}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-sm mt-2 text-start">
                    {errors.password}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isPending} // Disable button while pending
                className="w-1/2 px-6 py-3 bg-[#f56565] text-white font-semibold rounded-lg shadow-md hover:bg-[#f56565] hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex justify-center items-center"
              >
                {isPending ? (
                  <TailSpin
                    height="22"
                    width="22"
                    color="#fff"
                    ariaLabel="loading"
                  />
                ) : (
                  "Login"
                )}
              </motion.button>
            </form>
          )}
        </Formik>

        <p className="mt-2 text-sm">
          Don't have an account?{" "}
          <Link className="text-[#f56565] font-semibold" to="/register">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoginScreen;
