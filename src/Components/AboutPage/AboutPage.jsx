import React from "react";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <>
      <section className="about PageBody">
        <div className="aboutText">
          <h1>ABOUT</h1>
          <p>
            See User Experience and some
            <br /> more things about us
          </p>
        </div>
      </section>

      <section className="container experience my-5">
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
                src="https://727512.smushcdn.com/2595216/wp-content/uploads/2020/04/about-1-1.jpg?lossy=1&strip=1&webp=1"
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
                <img
                  src="https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/offer-1-1.jpg"
                  className="card-img-top"
                  alt="credit booking"
                />
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
                <img
                  src="https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/offer-1-2.jpg"
                  className="card-img-top"
                  alt="credit booking"
                />
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
                <img
                  src="https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/offer-1-3.jpg"
                  className="card-img-top"
                  alt="credit booking"
                />
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
