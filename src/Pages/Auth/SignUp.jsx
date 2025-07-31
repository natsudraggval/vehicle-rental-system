import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignUpService from '../../services/SignUpService';

function SignUp() {
  const [fullname,setfullname] = useState("");
  const [email,setemail] = useState("");
  const [phonenumber,setphonenumber] = useState("");
  const [password,setpassword] = useState("");
  const [confirmPassword,setconfirmPassword] = useState("");
  const [error,seterror] = useState();

  const navigate = useNavigate();

  const handleSignUp = async(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
      seterror("Incorrect Password");
      return;
    }
    try{
      await SignUpService(fullname, email, phonenumber, password, confirmPassword, navigate);
    }catch(err){
      seterror("Failed to Signup", err.message);
    }
  }
  return (
    <>
      <body className="bg-gray-100">
        <div className="flex h-screen w-screen items-center overflow-hidden px-2">
          <div className="relative flex w-96 flex-col space-y-5 rounded-lg border border-gray-300 bg-white px-5 py-10 shadow-xl sm:mx-auto">
            <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-cyan-500 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>

            <div className="mx-auto mb-2 space-y-3">
              <h1 className="text-center text-3xl font-bold text-gray-700">
                Sign up
              </h1>
              <p className="text-gray-500">Create an account to enjoy rentals.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSignUp}>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="full-name"
                  value={fullname}
                  onChange={(e)=>setfullname(e.target.value)}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="full-name"
                  className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
                >
                  Full Name
                </label>
              </div>

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
                  Email
                </label>
              </div>

              <div className="relative mt-2 w-full">
                <input
                  type="tel"
                  id="phone-number"
                  value={phonenumber}
                  onChange={(e)=>setphonenumber(e.target.value)}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone-number"
                  className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
                >
                  Phone Number
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
                  minlength="6"
                />
                <label
                  htmlFor="password"
                  className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
                >
                  Password
                </label>
              </div>

              <div className="relative mt-2 w-full">
                <input
                  type="password"
                  id="confirm-password"
                  value={password}
                  onChange={(e)=>setconfirmPassword(e.target.value)}
                  className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                  minlength="6"
                />
                <label
                  htmlFor="confirm-password"
                  className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
                >
                  Confirm Password
                </label>
              </div>

              <div className="flex w-full items-center">
                <button
                  type="submit"
                  className="shrink-0 inline-block w-36 rounded-lg bg-cyan-500 hover:bg-cyan-700 py-3 font-bold text-white"
                >
                  Create Account

                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default SignUp;
