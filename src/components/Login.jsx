import React, { useEffect, useState } from "react";
import loginImg from "../assets/images/loginImg.jpg";
import { BsEye } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";
import jwt_decode from "jwt-decode";

const Login = () => {

  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) => {
    var userObject = jwt_decode(response.credential);
    setUser({
      email: userObject.email,
      password: userObject.sub,
    });

    ;
  };

  useEffect(() => {
    if (user) {
        login(dispatch, user);
    }
  }, [user]);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"362412423652-mrm0rffq32j08k7q4ag3sugrtor8e0r5.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(5).required("Please enter your Password"),
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values, action) => {
      login(dispatch, values);
      action.resetForm();
    },

    onClick: (values, action) => {
      action.resetForm();
    },
  });
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      {/* <Toaster/> */}
      <section className=" min-h-screen flex items-center justify-center">
        <div className="bg-gray-200 flex rounded-2xl shadow-lg max-w-2xl p-5 items-center">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-2xl">Login</h2>
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                className=" p-2 border rounded-xl mt-8"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <span className="form-error text-red-500">{errors.email}</span>
              ) : null}

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="p-2 border rounded-xl w-full "
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <BsEye className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer" />
              </div>
              {errors.password && touched.password ? (
                <span className="form-error text-red-500">
                  {errors.password}
                </span>
              ) : null}
              <button
                className="bg-gray-800 rounded-xl text-white py-2 "
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="mt-3 ">
              <hr />
            </div>
            <div className="mt-1text-xs border-b py-4">
              <p>Forgot password?</p>
            </div>

            <div className="text-sm flex items-center justify-around mt-3">
              <p className="text-sm">Don't have an account????</p>
              <button
                className="py-2 px-5 bg-gray-200 border rounded-xl text-blue-500"
                onClick={handleSignup}
              >
                {" "}
                Sign Up
              </button>
            </div>
            <div id="signInDiv"></div>
          </div>

          <div className="w-1/2 md:block hidden  ">
            <img src={loginImg} alt="" className="rounded-2xl " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
