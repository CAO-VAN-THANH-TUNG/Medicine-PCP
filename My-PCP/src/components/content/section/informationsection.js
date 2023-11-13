import React from "react";
import "../../content/content.css";
import ButtonClick from "../../button/button";
import Triangle from "../../../img/Triangle.png";
import Specialties from "../specialties/specialties";
function Informationsection() {
  return (
    <>
      <div>
        <div className="rectangle-background">
          <div>
            <img
              src={Triangle}
              alt="Triangle Logo"
              className="rectangle-background-img"
            />
          </div>

          <div className="container-rectangle-background">
            <div className="rectangle-background-text">
              FOR A BETTER TOMORROW
            </div>

            <div>
              <ButtonClick text="Our Therapies" />
            </div>
          </div>
        </div>

        <div className="information-section">
          <div className="container-information-section-text">
            <div>
              <div>
                <div className="section-text-quantity">
                  With more than
                  <div className="section-text-quantity-number">1000+</div>
                </div>
              </div>

              <div>
                <div className="section-text-quantity">
                  products with
                  <div className="section-text-quantity-number">20000+</div>
                </div>
              </div>
              <div>
                <div className="section-text-quantity">employees</div>
              </div>
            </div>

            <div>
              <ButtonClick text="Explore" />
            </div>
          </div>

          <div className="information-section-specialties">
            <Specialties />
          </div>
        </div>
      </div>
    </>
  );
}

export default Informationsection;
