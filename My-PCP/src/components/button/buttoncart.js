import React from "react";
import Addtocart from "../../img-icon/addtocart.png"
import './buttoncart.css';
function buttoncart(){
    return(
        <div class="container-button-cart">
            <div class="button-cart-text">ADD TO CART 
            </div>
            <div>
                <img src={Addtocart} class="img-addtocart"></img>
            </div>
        </div>

    )
}

export default buttoncart;