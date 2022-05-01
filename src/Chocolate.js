import React from "react";
import { Link } from "react-router-dom";

const Chocolate = () => {

    return (
        <div className="VendingMachine-element">
            <h1>Chocolate</h1>
            <img src="https://media.giphy.com/media/XECiLxeHvwdD96Jc6Z/giphy.gif" alt=""/>
            <Link to="/" className="VendingMachine-link">Go Back To Vending Machine</Link>
        </div>
      )
}


export default Chocolate;