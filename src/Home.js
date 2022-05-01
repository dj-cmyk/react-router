import React from "react";
import { Link } from "react-router-dom";
// import "./Chips.css";



const Home = () => {

    return (
        <>
            <h1>VENDING MACHINE</h1>
            <ul className="VendingMachine-list">
                <li><Link to="/soda">Soda</Link></li>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/chocolate">Chocolate</Link></li>
            </ul>
        </>
      )
}



export default Home;