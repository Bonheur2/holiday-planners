import React from "react";
import "./Dashboard.css";
import { FiSun } from "react-icons/fi";
import { MdDashboard, MdDarkMode } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaUsersCog, FaChartBar } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import bonheur from "/images/bonheur.jpg";

function Dashboard() {

  
 

  return (
    <>
      <div className="dashboard-container">
        <div className="sliderbar">
          <div className="log"></div>
          <ul className="main">
            <li className="myphoto">
              <div>
                <img src={bonheur} alt="Logo-image" />
                <nav>
                  <span>Bonheur</span>
                  <p>Traveller</p>
                </nav>
              </div>
            </li>
            <li className="active">
              <Link to="/dashboard/barchart">
                <i>
                  <MdDashboard />
                </i>
                <span> Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <i>
                  <FaUsersCog />
                </i>
                <span> Users</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/dashtour">
                <i>
                  {" "}
                  <PiAirplaneTiltFill />{" "}
                </i>
                <span>Tour</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/booking">
                <i>
                  <FaChartBar />
                </i>
                <span> Booking</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/setting">
                <i>
                  <AiFillSetting />
                </i>
                <span> Settings</span>
              </Link>
            </li>
            <li className="logout">
              <Link to="/login">
                <i></i>
                <span> Logout</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="maincontent">
          <div className="headerwrapper">
            <div className="headertitle">
              <span>Hello, </span>
              <h2>Hossein</h2>
            </div>
            <div className="toggle">
              <FiSun />
              <nav>Dark Mode</nav>
              <MdDarkMode />
            </div>
          </div>
          <div className="dashboard-contents">
            <Outlet />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Dashboard;
