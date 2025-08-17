import React from "react";

function ResetPassword() {
  return (
    <div>
      <body
        style="background-image: url('/image/res-img.jpg'); background-size: cover; background-position: center;"
        className="min-h-screen bg-no-repeat bg-center bg-cover"
      >
        <div className="flex h-screen w-screen items-center overflow-hidden px-2">
          <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
            <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-cyan-500 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>

            <div className="mx-auto mb-2 space-y-3">
              <h1 className="text-center text-3xl font-bold text-gray-700">
                Reset Password
              </h1>
            </div>

            <form className="space-y-5">
              <div className="relative mt-2 w-full">
                <input
                  type="email"
                  id="email"
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
                  type="password"
                  id="password"
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
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}

export default ResetPassword;
