import React from 'react'
import {Link} from "react-router-dom"
import "./styles/DashBoard.css"

import Background from './styles/images/DashBoard_Background.jpg';

export default function DashBoard() {
  return (
    <body style={{ backgroundImage:`url(${Background})`,backgroundRepeat:"no-repeat"}}>
        <br/>

    <div className="dashboard-header">
        <h1>Main DashBoard</h1>
    </div>
        
    <div className="main-dashboard">
        <Link to="/add-payment">
            <button className="dashboard-btn" id="paymentBtn"><b>Payment Management</b></button>
        </Link>
        <Link to="/appLogin">
            <button className="dashboard-btn" id="appointmentBtn"><b>Appointment Management</b></button>
        </Link>
        <Link to="/labLogin">
            <button className="dashboard-btn" id="labBtn"><b>Lab Management</b></button>
        </Link>
        <Link to="/phrLogin">
            <button className="dashboard-btn" id="pharmacyBtn"><b>Pharmacy Management</b></button>
        </Link>
        <Link to="/invLogin">
            <button className="dashboard-btn" id="inventoryBtn"><b>Inventory Management</b></button>
        </Link>
        <Link to="/petLogin">
            <button className="dashboard-btn" id="petBtn"><b>Pet Management</b></button>
        </Link>
        <Link to="/">
            <button className="dashboard-btn" id="prescriptionBtn"><b>Prescription Management</b></button>
        </Link>
        <Link to="/">
            <button className="dashboard-btn" id="staffBtn"><b>Staff Management</b></button>
        </Link>
    </div><br/>
    </body>
  )
}