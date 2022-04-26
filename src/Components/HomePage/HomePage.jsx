import React, { useState } from "react";
import "./homePage.css";
import { NavLink } from "react-router-dom";
import ChooseCarTabsOptions from "../ChooseCarTabOptions/ChooseCarTabsOptions";
import {SiBmw, SiMercedes,SiToyota,SiFord,SiLandrover,SiBentley,SiHyundai,SiHonda,SiSkoda } from "react-icons/si";
import IMAGES from "../../Assets/Images/ImageIndex";

const HomePage = () => {
  document.title=`Conexi Home-Page`;
  const [activeTab, setActiveTab] = useState("HYBRID TAXI");

  return (
    <>
      <section className="home PageBody">
        <div className="mainText">
          <h1>
            Affordable and Trusted
            <br />
            Taxi Company
          </h1>
          <p>
            Enjoy your comfortable trip with
            <br />
            Conexi Company taxi
          </p>
          <NavLink to="/about">
            {" "}
            <button>Learn More</button>
          </NavLink>
        </div>
      </section>

      <section className="chooseCar">
        <div className="chooseCarText">
          <p className="para">Choose your preffered car for booking here</p>
          <p className="heading">Choose Car</p>
        </div>
        <ChooseCarTabsOptions
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {getCorrectScreen(activeTab)}
      </section>
    </>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "HYBRID TAXI":
      return(
    <>
    <div className="container offerCards">
    <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
              <div className="card carCardClass">
                <div className="imgClass">
                <img
                  src={IMAGES.carBMW}
                  className="card-img-top"
                  alt="credit booking"
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><SiBmw/> BMW</h5>
                  <p className="card-text">
                  Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                  </p>
                  <button className="btn">
                    <b>Book Now</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
              <div className="card carCardClass">
              <div className="imgClass">
                <img
                  src={IMAGES.carMercedes}
                  className="card-img-top"
                  alt="credit booking"
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><SiMercedes/> Mercedes</h5>
                  <p className="card-text">
                  Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                  </p>
                  <button className="btn">
                    <b>Book Now</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
              <div className="card carCardClass">
              <div className="imgClass">
                <img
                  src={IMAGES.carToyota}
                  className="card-img-top"
                  alt="credit booking"
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title"><SiToyota/> Toyota</h5>
                  <p className="card-text">
                  Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                  </p>
                  <button className="btn">
                    <b>Book Now</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
    </>
      );
    case "TOWN TAXI":
      return(
        <>
        <div className="container offerCards">
        <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carFord}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiFord/> Ford</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carHongqi}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiLandrover/> Hongqi</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carLimousine}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiBentley/> Limousine</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </>
          );
    case "SUV TAXI":
      return(
        <>
        <div className="container offerCards">
        <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carHyundai}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiHyundai/> Hyundai</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carHonda}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiHonda/> Honda</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carSkoda}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiSkoda/> Skoda</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </>
          );
    default:
      return(
        <>
        <div className="container offerCards">
        <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carBMW}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiBmw/> BMW</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carMercedes}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiMercedes/> Mercedes</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
                  <div className="card carCardClass">
                  <div className="imgClass">
                    <img
                      src={IMAGES.carToyota}
                      className="card-img-top"
                      alt="credit booking"
                    />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><SiToyota/> Toyota</h5>
                      <p className="card-text">
                      Base Rate: $4.30<br/>Per Mile/KM: $2.00<br/>Passengers: 4
                      </p>
                      <button className="btn">
                        <b>Book Now</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </>
          );
  }
};

export default HomePage;
