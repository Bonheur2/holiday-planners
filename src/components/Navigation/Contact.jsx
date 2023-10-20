import React from "react";
import { ImLocation } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import contactimage from "/images/travel7.jpg";
function Contact() {
  return (
    <>
        <img src={contactimage} alt="" className="contact-image" />

        <div className="contact-container">
          <div className="contact-form-content">
            <aside className="contact-form1">
              <article className="contact-in-text">
                <nav className="contact-input">
                  <input type="text" placeholder="Full Name *" />
                  <input type="text" placeholder="Email *" />
                  <input type="text" placeholder="Phone*" />
                  <input type="text" placeholder="Services*" />
                </nav>
                <nav>
                  <textarea
                    name=""
                    id=""
                    cols="89"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </nav>
              </article>
              <button type="submit" className="contact-button">
                Submit
              </button>
            </aside>
            <div className="contact-content">
              <div className="contact-book-list">
                <h1>WHY BOOK WITH US?</h1>
                <ul>
                  <li>Best Price Guarantee</li>
                  <li>Customer care available 24/7</li>
                  <li>Free Travel Insureance</li>
                  <li>Hand-picked Tours & Activities</li>
                </ul>
              </div>
              <div className="contact-question">
                <h1>GET A QUESTION?</h1>
                <p>
                  Do not hesitage to give us a call. We are an expert team and
                  we are happy to talk to you.
                </p>
                <ul>
                  <li>Holiday plannners</li>
                  <li>+250787306047</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="location-map">
            <div className="contact-location">
              <nav className="contact-location1">
                <h1>INDIAN OFFICE</h1>
                <ul>
                  <li>
                    <ImLocation className="icon3" />
                    54, Beside Shoping Mall, Gujarat.
                  </li>
                  <li>
                    <IoCall className="icon3" />
                    +123 456 7890
                  </li>
                  <li>
                    <MdOutlineAlternateEmail className="icon3" />
                    holidayplanners@gmail.com
                  </li>
                </ul>
              </nav>
              <nav className="contact-location2">
                <h1>USA OFFICE</h1>
                <ul>
                  <li>
                    <ImLocation className="icon3" />
                    888 S Greenville, TX 75081, United States.
                  </li>
                  <li>
                    <IoCall className="icon3" />
                    +123 456 7890
                  </li>
                  <li>
                    <MdOutlineAlternateEmail className="icon3" />
                    holidayplannersusa@gmail.com
                  </li>
                </ul>
              </nav>
              <nav className="contact-location3">
                <h1>VICTORIA OFFICE</h1>
                <ul>
                  <li>
                    <ImLocation className="icon3" />
                    Main Street, Victoria 8007.
                  </li>
                  <li>
                    <IoCall className="icon3" />
                    +123 456 7890
                  </li>
                  <li>
                    <MdOutlineAlternateEmail className="icon3" />
                    holidayplannersvic@gmail.com
                  </li>
                </ul>
              </nav>
            </div>
            <div className="contact-map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    width="100%"
                    src="https://maps.google.com/maps?width=800&amp;
                  height=400&amp;
                  hl=en&amp;
                  q=Nyanza Rwanda&amp;
                  t=k&amp;z=14&amp;
                  ie=UTF8&amp;
                  iwloc=B&amp;
                  output=embed"
                  ></iframe>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
