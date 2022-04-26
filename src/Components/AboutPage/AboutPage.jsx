import React from "react";
import "./aboutPage.css";
import IMAGES from '../../Assets/Images/ImageIndex';


const AboutPage = () => {
  document.title=`Conexi About-Page`;
  return (
    <>
      <section className="about PageBody">
        <div className="aboutText">
          <h1>ABOUT</h1>
          <p>
            See User Experience and some
            <br /> more things about us
          </p>
          <button>
              <a href="#experience">Learn More</a>
            </button>
        </div>
      </section>

      <section className="container experience my-5" id="experience">
        <div className="row">
          <div className="col-lg-6 expColumn">
            <div className="experienceText">
              <p>Few words about conexi</p>
              <h1>
                Learn about our
                <br />
                taxi company
              </h1>
              <p>
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humour or random words which don't look even slightly
                believable. If you are going to use a passage of lorem ipsum you
                need to be sure there isn't anything embarrassing.
              </p>
            </div>
            <button>
              <a href="#offers">Discover More</a>
            </button>
          </div>
          <div className="col-lg-6 d-lg-inline d-none">
            <div className="experienceImage">
              <img
                src={IMAGES.aboutSideImage}
                alt="side "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="offers" id="offers">
        <div className="offersText">
          <p>Check out our benefits</p>
          <h1>What we’re offering</h1>
        </div>
        <div className="offerCards">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
              <div className="card cardClass">
                <div className="cardImage">
                <img
                  src={IMAGES.creditBooking}
                  className="card-img-top"
                  alt="credit booking"
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Credit booking</h5>
                  <p className="card-text">
                    There are many van of pasage of suffer alteration lipsum is
                    simply free text.
                  </p>
                  <button className="btn">
                    <b>READ MORE</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
              <div className="card cardClass">
              <div className="cardImage">
                <img
                  src={IMAGES.homePickups}
                  className="card-img-top"
                  alt="credit booking"
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Home pickups</h5>
                  <p className="card-text">
                    There are many van of pasage of suffer alteration lipsum is
                    simply free text.
                  </p>
                  <button className="btn">
                    <b>READ MORE</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 overflow-hidden">
              <div className="card cardClass">
              <div className="cardImage">
                <img
                  src={IMAGES.longTravels}
                  className="card-img-top"
                  alt="credit booking"
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Long travels</h5>
                  <p className="card-text">
                    There are many van of pasage of suffer alteration lipsum is
                    simply free text.
                  </p>
                  <button className="btn">
                    <b>READ MORE</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
