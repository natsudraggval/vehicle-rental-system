import React from 'react'

function AdminLogin() {
    return (
        <div className="bg-gray-100">
            <div className="flex h-screen w-screen items-center justify-center px-2">

                <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl">
                    <button
                        className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 text-3xl font-extrabold focus:outline-none"
                    >
                        &times;
                    </button>

                    <div className="mx-auto mb-2 space-y-3">
                        <h1 className="text-center text-3xl font-bold text-gray-700">Admin Login</h1>
                        <p className="text-gray-500 text-center">Login to access the Admin Dashboard</p>
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
                                for="email"
                                className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
                            >Enter Your Email</label
                            >
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
                                for="password"
                                className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
                            >Enter Your Password</label
                            >
                        </div>


                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-cyan-500 hover:bg-cyan-700 py-3 font-bold text-white"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AdminLogin
