import React from "react";
import { Link, useNavigate } from "react-router-dom";
import login from '../../services/LoginService'
import { useState } from "react";

function Login() {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [error, seterror] = useState();

const navigate = useNavigate();

const handlelogin = async(e)=>{
  e.preventDefault();
  try{
    await login(email, password, navigate);
  }catch(err){
    seterror("Invalid email or password");
  }
}

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex h-screen w-screen items-center overflow-hidden px-2">
          <div className="relative flex w-96 flex-col space-y-5 rounded-lg border border-gray-300 bg-white px-5 py-10 shadow-xl sm:mx-auto">
            <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-cyan-500 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>

            <div className="mx-auto mb-2 space-y-3">
              <h1 className="text-center text-3xl font-bold text-gray-700">
                Login
              </h1>
              <p className="text-gray-500">Login to access your account</p>
            </div>

            <form className="space-y-5" onSubmit={handlelogin}>
              <div className="relative mt-2 w-full">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
                >
                  Enter Your Email
                </label>
              </div>

              <div className="relative mt-2 w-full">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                  minLength="6"
                />
                <label
                  htmlFor="password"
                  className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
                >
                  Enter Your Password
                </label>
              </div>

              <div className="flex w-full items-center">
                <button
                  type="submit"
                  className="shrink-0 inline-block w-36 rounded-lg bg-cyan-500 hover:bg-cyan-700 py-3 font-bold text-white"
                >
                  Login
                </button>
                <a
                  href="#"
                  className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </form>

            <div className="flex items-center justify-center my-5 space-x-4">
              <div className="h-px bg-gray-300 w-36"></div>
              <p className="text-md text-gray-80000">or</p>
              <div className="h-px bg-gray-300 w-36"></div>
            </div>

            <div className="flex items-center justify-center bg-white">
              <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg
                  className="h-6 w-8 mr-2"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >
                          {" "}
                        </path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >
                          {" "}
                        </path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>

            <p className="text-center text-gray-600">
              Don't have an account?
              <Link to="/SignUp"
                className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
