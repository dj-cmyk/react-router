import React from "react";
import "./Chips.css";
import { Link } from 'react-router-dom';



const Chips = () => {

    return (
        <div>
            <h1>Chips</h1>
            <img src="https://media.giphy.com/media/877LFiP31DhPnmY46S/giphy.gif" alt="" />
            <Link to="/" className="VendingMachine-link">Go Back To Vending Machine</Link>
        </div>
            
      )
}



export default Chips;