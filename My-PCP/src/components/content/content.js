import React from "react";
import "./content.css";
import Informationsection from "./informationsection";
// import Footer from "../footer/footer";
import Ouremployees from "./ouremployees";
import Aboutus from "./aboutus";
function Content() {
  return (
    <>
      <Informationsection />
      <Aboutus />
      <Ouremployees />
      {/* <Footer /> */}
    </>
  );
}

export default Content;
