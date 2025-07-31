import React from "react";
import { Link } from "react-router-dom";
import Body from "../Components/Body";
import AllCategory from "../Components/AllCategory";
import Features from "../Components/Features";

function Home() {
  return (
    <>
      <Body />
      <AllCategory />
      <Features />
    </>
  );
}

export default Home;
