import React from "react";
import Buttoncart from "../button/buttoncart";
import './content.css';
import data from "../../database/data.json";



function content(){
    return(

        
        <div className="container-item">
            {data.product.map((product) => {
                return (
                    <div className="product-item">
                        <div className="product-item-image">
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className="product-item-name">{product.name}</div>
                        <div className="product-item-price">{product.price}</div>
                        <Buttoncart />
                    </div>
                );
            })}
        </div>
    );
}

export default content;