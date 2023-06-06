import React, { useEffect, useState } from "react";
import loginImg from "../assets/images/loginImg.jpg";
import { BsEye } from "react-icons/bs";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signup } from "../redux/apiCalls";
import jwt_decode from 'jwt-decode'

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oauth, setOauth] = useState({});


  const handleCallbackResponse = async(response)=> {
  
    var userObject = jwt_decode(response.credential);

    setOauth({
      firstName: userObject.given_name,
      lastName: userObject.family_name,
      email: userObject.email,
      password: userObject.sub,
      confirmpass: userObject.sub,
    });
   
  }
  useEffect(() => {
    if (oauth) {
         signup(dispatch, oauth);
    }
  }, [oauth]);

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

  const signUpSchema = Yup.object({
    firstName: Yup.string()
      .min(2)
      .max(25)
      .required("Please enter your First name"),
    lastName: Yup.string()
      .min(1)
      .max(25)
      .required("Please enter your Last name"),
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(5).required("Please enter your Password"),
    confirmpass: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password Must match"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpass: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        signup(dispatch, values);

        action.resetForm();
      },
      onClick: (action) => {
        action.resetForm();
      },
    });
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <section className=" min-h-screen flex items-center justify-center">
        <div className="bg-gray-200 flex rounded-2xl shadow-lg max-w-2xl p-5 items-center">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-2xl">Sign Up</h2>
            <form
              action=""
              className="flex flex-col gap-4 "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Firstname"
                name="firstName"
                className="p-2 border rounded-xl mt-8 errorText"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.firstName && touched.firstName ? (
                <span className="form-error text-red-500">
                  {errors.firstName}
                </span>
              ) : null}

              <input
                type="text"
                placeholder="Lastname"
                name="lastName"
                className="p-2 border rounded-xl errorText"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <span className="form-error text-red-500">
                  {errors.lastName}
                </span>
              ) : null}
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                className=" p-2 border rounded-xl errorText "
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
                  className="p-2 border rounded-xl w-full errorText "
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

              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm password"
                  id="confirmpass"
                  name="confirmpass"
                  className="p-2 border rounded-xl errorText w-full "
                  value={values.confirmpass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <BsEye className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer" />
              </div>
              {errors.confirmpass && touched.confirmpass ? (
                <span className="form-error text-red-500">
                  {errors.confirmpass}
                </span>
              ) : null}

              <button
                className="bg-gray-800 rounded-xl text-white py-2 "
                type="submit"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-3 ">
              <hr />
            </div>
            <div id="signInDiv"></div>
            <div className="mt-3 ">
              <hr />
            </div>
            <div className="text-sm flex items-center justify-around mt-3">
              <p className="text-sm">Already have an account?</p>
              <button
                className="py-2 px-5 bg-gray-200 border rounded-xl text-blue-400"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>

          <div className="w-1/2 md:block hidden  ">
            <img src={loginImg} alt="" className="rounded-2xl " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
