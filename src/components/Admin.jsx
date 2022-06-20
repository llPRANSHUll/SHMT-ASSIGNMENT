import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import "./Admin.css";

const Admin = () => {
  return (
    <>
      <div className="main-body">
        <div className="admin-panel-card">
          <div className="side-menu-wrapper">
            <ul className="side-menu">
              <li className="side-menu-items">
                <div className="icons">
                  <BiHomeAlt className="icon" />
                  <a href="/#">Dashboard</a>
                </div>
              </li>
              <li className="side-menu-items special">
                <div className="icons">
                  <h2>+</h2>
                  <a href="/#">Doctor</a>
                </div>
              </li>
              <li className="side-menu-items">
                <div className="icons">
                  <AiOutlineContacts className="icon" />
                  <a href="/#">Contact</a>
                </div>
              </li>
              <li className="side-menu-items">
                <div className="icons">
                  <AiOutlineMedicineBox className="icon" />
                  <a href="/#">Medicine</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="admin-panel-content-wrapper">
            <div className="treatment-wrapper">
              <div className="treatment-heading">
                <h2>Your Treatment</h2>
              </div>
              <div className="treatment-doc1">
                <div className="doc1-name-img">
                  <img src="./doc.jpg" alt="Doctor Profile" />
                  <div className="doc-name-designation">
                    <h3>Dr. Sam Marshell</h3>
                    <p>Specialist,London,England</p>
                  </div>
                </div>
                <div className="doc-designation">
                  <h2>Surgeon</h2>
                  <p>Heart Surgeon</p>
                </div>
                <div className="date-and-time">
                  <div className="date">
                    <p>Date</p>
                    <h2>20 Nov 2020</h2>
                  </div>
                  <div className="time">
                    <p>Time</p>
                    <h2>10:00 AM</h2>
                  </div>
                </div>
                <div className="appointment-doc1">
                  <div className="appointment-buttons-icons">
                    <p>Appointment</p>
                    <div className="appointment-icons">
                      <BiPhoneCall className="appointment-icon phone" />
                      <AiOutlineVideoCamera className="appointment-icon video" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="treatment-doc1 doc2">
                <div className="doc1-name-img">
                  <img src="./doc.jpg" alt="Doctor Profile" />
                  <div className="doc-name-designation">
                    <h3>Dr. Phnx Marshell</h3>
                    <p>Surgeon,London,England</p>
                  </div>
                </div>
                <div className="doc-designation">
                  <h2>Surgeon</h2>
                  <p>Heart Surgeon</p>
                </div>
                <div className="date-and-time">
                  <div className="date">
                    <p>Date</p>
                    <h2>21 Oct 2020</h2>
                  </div>
                  <div className="time">
                    <p>Time</p>
                    <h2>11:00 AM</h2>
                  </div>
                </div>
                <div className="appointment-doc1 doc2">
                  <div className="appointment-buttons-icons">
                    <p>Appointment</p>
                    <div className="appointment-icons">
                      <BiPhoneCall className="appointment-icon phone" />
                      <AiOutlineVideoCamera className="appointment-icon video" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardinfo-settings-wrapper">
                <div className="cardinfo-wrapper">
                  <div className="card-number">
                    <h3>5500 6677 00 99</h3>
                  </div>
                  <div className="name-cardname">
                    <h4>Harnold Mann</h4>
                    <h3>VISA</h3>
                  </div>
                </div>
                <div className="settings-icon">
                  <FiSettings className="s-icon" />
                  <h3>Settings</h3>
                </div>
              </div>
            </div>

            <div className="appointment-wrapper">
              <div className="appointment-heading">
                <h2>
                  Make An Appointment, That Will Help You! Choose A Doctor
                </h2>
              </div>
              <div className="consult-calendar">
                <h2>Consults For Today</h2>
                <div className="calendar-dates">
                  <div className="circle">
                    <div className="align">
                      <h4>1</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>2</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>3</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>4</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>5</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>6</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>7</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>8</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>9</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>10</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>11</h4>
                    </div>{" "}
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>12</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>13</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>14</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>15</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>
                        <s>16</s>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="calendar-dates-row2">
                  <div className="circle">
                    <div className="align">
                      <h4>17</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>
                        <s>18</s>
                      </h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>19</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>20</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>21</h4>
                    </div>
                  </div>
                  <div className="circle circle-color">
                    <div className="align">
                      <h4>22</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>23</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>24</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>25</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>
                        <s>26</s>
                      </h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>27</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>
                        <s>28</s>
                      </h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>29</h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>
                        <s>30</s>
                      </h4>
                    </div>
                  </div>
                  <div className="circle">
                    <div className="align">
                      <h4>
                        <s>31</s>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="examination-section">
                <div className="examination-heading">
                  <h2>Examinations</h2>
                  <a href="/#">See All</a>
                </div>
                <div className="examination-info">
                  <div className="examination-content">
                    <p>23 Dec 2020</p>
                    <h2>Heart Surgeon</h2>
                    <p>Ellen Bradley</p>
                  </div>
                  <div className="examination-content">
                    <p>24 Nov 2020</p>
                    <h2>Medicine Specialist</h2>
                    <p>Luke McKinney</p>
                  </div>
                  <div className="examination-content">
                    <p>15 May 2020</p>
                    <h2>Backpain Specialist</h2>
                    <p>Cameron Holland</p>
                  </div>
                </div>
              </div>

              <div className="treatment-section">
                <div className="treatment-heading">
                  <h2>Treatments</h2>
                  <p>November 2020</p>
                  <div className="treatment-dates">
                    <h4>&#60;</h4>
                    <h4>
                      <s>26</s>
                    </h4>
                    <div className="dots">
                      <h4>27</h4>
                    </div>
                    <div className="dots">
                      <h4>28</h4>
                    </div>
                    <h4>
                      <s>29</s>
                    </h4>
                    <h4>
                      <s>30</s>
                    </h4>
                    <h4>
                      <s>31</s>
                    </h4>
                    <h4>
                      <s>01</s>
                    </h4>
                    <h4>&#62;</h4>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="medicine-data">
                  <div className="medicine-date">
                    <h2>27</h2>
                    <p>November</p>
                  </div>
                  <div className="medicine-info">
                    <h3>Medicine</h3>
                    <p>11:30 am</p>
                    <div className="medicine-icons">
                      <BiPhoneCall className="medicine-icon phone" />
                      <AiOutlineVideoCamera className="medicine-icon video" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
