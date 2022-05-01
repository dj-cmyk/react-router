import React from "react";
import { Link } from "react-router-dom";
// import "./Soda.css";



const Soda = () => {

    return (
        <div>
            <h1>Soda</h1>
            <img src="https://media.giphy.com/media/3ofT5Lrb6V2vvGym9a/giphy.gif" alt="" />
            <Link to="/" className="VendingMachine-link">Go Back To Vending Machine</Link>
        </div>
      )
}



export default Soda;