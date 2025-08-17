import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-slate-700 text-gray-100">
        <div className="max-w-screen-lg px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-2xl text-cyan-500">RentARide</h3>
          </div>
          <div className="p-5">
            <div className="text-lg uppercase text-cyan-500 font-bold">
              Resources
            </div>
            <a className="my-3 block hover:text-cyan-500" href="#">
              Documentation
            </a>
            <a className="my-3 block hover:text-cyan-500" href="#">
              Availability
            </a>
            <a className="my-3 block hover:text-cyan-500" href="#">
              Support <span className="text-teal-400 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-lg uppercase text-cyan-500 font-bold">Support</div>
            <a className="my-3 block hover:text-cyan-500" href="#">
              Help Center
            </a>
            <a className="my-3 block hover:text-cyan-500" href="#">
              Privacy Policy
            </a>
            <a className="my-3 block hover:text-cyan-500" href="#">
              Conditions
            </a>
          </div>
          <div className="p-5">
            <div className="text-lg uppercase text-cyan-500 font-bold">
              Contact us
            </div>
            <a className="my-3 block hover:text-cyan-500" href="#">
              01-7773456, Kathmandu, Nepal
            </a>
            <a className="my-3 block hover:text-cyan-500" href="#">
              rentaride@info.com
            </a>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1 text-cyan-500 hover:text-gray-100">
              <FaTwitter />
            </a>
            <a href="#" className="w-6 mx-1 text-cyan-500 hover:text-gray-100">
              <FaFacebookF />
            </a>
            <a href="#" className="w-6 mx-1 text-cyan-500 hover:text-slate-700">
              <FaYoutube />
            </a>
            <a href="#" className="w-6 mx-1 text-cyan-500 hover:text-gray-100">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-6 mx-1 text-cyan-500 hover:text-gray-100">
              <FaInstagram />
            </a>
          </div>
          <div className="my-5 text-base text-gray-100">
            © Copyright 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
