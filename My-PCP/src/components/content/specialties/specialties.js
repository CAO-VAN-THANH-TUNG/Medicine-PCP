import React from "react";
import "../content.css";
import data from "../../../database/data";

function Specialties() {
  return (
    <>
      {data.specialties.map((specialty) => {
        return (
          <div className="container-specialties">
            <img src={specialty.icon} className="specialties-image"/>
            <div className="specialties-text">{specialty.text}</div>
            <div className="specialties-slogan">{specialty.slogan}</div>
          </div>
        )
      })}
    </>
  );
}

export default Specialties;