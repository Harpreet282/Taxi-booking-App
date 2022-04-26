import React from "react";
import "./bookingPage.css";

const BookingPage = () => {
  document.title=`Conexi Booking-Page`;
  return (
    <>
      <section className="booking PageBody ">
        <form className="bookingForm mx-auto">
          <div className="bookingFormText">
            <h1>Booking</h1>
            <p>Make your booking here</p>
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="car">Car</label>
            <input type="text" className="form-control" id="car" />
          </div>
          <div className="form-group">
            <label htmlFor="pickupAddress">Pick-up Address</label>
            <input type="text" className="form-control" id="pickupAddress" />
          </div>
          <div className="form-group">
            <label htmlFor="DropOffAddress">Drop-off Address</label>
            <input type="text" className="form-control" id="DropOffAddress" />
          </div>
          <div className="form-group">
            <label htmlFor="bookingDate">Booking-Date</label>
            <input type="date" className="form-control" id="bookingDate" />
          </div>
          <div className="form-group">
            <label htmlFor="bookingTime">Booking-Time</label>
            <input type="time" className="form-control" id="bookingTime" />
          </div>
          <button type="submit" className="btn booking-button">
            Book Now
          </button>
        </form>
      </section>
    </>
  );
};

export default BookingPage;
