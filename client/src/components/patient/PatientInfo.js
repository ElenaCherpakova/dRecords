import React  from "react";
import axios from "axios";
import {useParams} from "react-router-dom";



function PatientInfo() {

  // const params = useParams()

  return (
    <section className="infoBar">
      <div className="patientInfo">
        <h3>Patient Contact Info:</h3>
        <label>Full Name:</label>
        <p>Clinton Schroeder</p>
        <label>Date Of Birthday:</label>
        <p>2003-01-17</p>
        <label>Gender:</label>
        <p>Male</p>
        <label>Email Address:</label>
        <p>phasellus.at@hotmail.ca</p>
        <label>Health Card</label>
        <p>DB354</p>
        <label>Phone Number:</label>
        <p>(714) 365-6546</p>
        <label>Emergency Contact Number:</label>
        <p>547-438-0720</p>
        <h3>Medical History:</h3>
        <p>DM2, HTN, CHF</p>
        <label>Diagnosis</label>
        <p>Asthma</p>
        <label>Medication</label>
        <p>Atrovastatin, Lasix, Metropolol</p>
        <label>Surgery</label>
        <p>N.A.</p>
      </div>
    </section>
  );
}

export default PatientInfo;
