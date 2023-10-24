<<<<<<< HEAD
import React, { useState, useContext} from "react";
import { useParams } from "react-router-dom";
import "./SingleTour.css";
import { AuthContext } from "../../context/AppProvider";


const SingleTour = () => {

  const { myTours } = useContext(AuthContext);
 
  const { id } = useParams();
  const tour = myTours.find((invo) => invo._id == id  )
=======
import React from "react";
import { useParams } from "react-router-dom";
import "./SingleTour.css";

import { tourlists } from "./Tourlist";

const SingleTour = () => {
 
  const { id } = useParams();
  const tour = tourlists.find((invo) => invo.id == id  )
>>>>>>> e194052 (initial commit)
  console.log(tour)

  const { country } = tour;



  return (
    <>
      <section className="section-tourdetails">
        <div className="background-image">
          <h1 className="name-indian"> {country}</h1>
        </div>

        <div className="detail-information">
          <div className="info-button">Tour Plan</div>
          <div className="vertical-line"></div>
          <div className="info-button">Location</div>
          <div className="vertical-line"></div>
          <div className="info-button">Gallery</div>
          <div className="vertical-line"></div>
          <div className="info-button">Review</div>
        </div>
        <div className="tour-area1">
          <div className="side-form1">
            <h6 className="title-2">BOOK THIS TOUR</h6>
            <div className="search-tour1">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="search-tour1">
              <input type="email" placeholder="Email" />
            </div>
            <div className="search-tour1">
              <input type="email" placeholder="Confirm Email" />
            </div>

            <div className="search-tour1">
              <input type="number" placeholder="phone" />
            </div>

            <div className="search-tour1">
              <input type="date" placeholder="mm/dd/yyy" />
            </div>

            <div className="search-tour1">
              <input type="number" placeholder="Number Of Tickets" />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="cultural" />
              <label htmlFor="cultural">Check Availability</label>
            </div>
           
            <button>FIND NOW</button>
            
          </div>
          <div className="tour-mission2">
            <div className="mission-details">
              <h1>Why Book with us ?</h1>
              <p>Customer care available 24/7</p>
              <p>Free Travel Insurance </p>
              <p>Hand-picked Tours & Activitie</p>
            </div>
          </div>

          <div className="tour-mission3">
            <div className="">
              <h1>Get A Question ?</h1>
              <p>
                Do not hesitage to give us a call. We are an expert team and we
                are happy to talk to you
              </p>
              <p>holidayplanners@gmail.com </p>
              <p>+123 456 7890</p>
            </div>
          </div>

          <div className="tour-detailed">
            <div className="para23">
              <h1>
                {" "}
                A wonderful serenity has taken possession of my entire soul
              </h1>

              <div className="circle">
                <p>$12000</p>
                <p>Per person</p>
              </div>
            </div>
            <div className="planned-trip">
              <p className="trip-duration">2 days</p>
              <p className="trip-duration">6 People</p>
              <p className="trip-participants">18 </p>
              <p className="trip-destination">Greece</p>
              <p className="trip-destination"> Discovery</p>
            </div>
            <div className="trip-description">
              <p>
                {" "}
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now. When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams.{" "}
              </p>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Greece</th>
                  <th>LoremIpsum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Destination</td>
                  <td>Greece</td>
                </tr>
                <tr>
                  <td>Departure</td>
                  <td>LoremIpsum</td>
                </tr>
                <tr>
                  <td>Departure Time</td>
                  <td>9:00am</td>
                </tr>
                <tr>
                  <td>Return Time</td>
                  <td>10:12pm</td>
                </tr>
                <tr>
                  <td>Dress Code</td>
                  <td>Light Jacket</td>
                </tr>
                <tr>
                  <td>Price Included</td>
                  <td>Well-styled columns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleTour;
