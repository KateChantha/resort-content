
import React from 'react';
import { useContext } from 'react'; // works with FC
import { RoomContext } from "../context";
import Title from "./Title";
import './AboutYourStay.css';

const AboutYourStay = () => {
  const context = useContext(RoomContext);
  const { capacity, dateRange, pickedRoom } = context;
  
  const formatDate = (date) => {
    const dateArray = date.split(" ");
    if (!dateArray) return;
    else return dateArray[0]+","+dateArray[1]+" "+dateArray[2]+","+dateArray[3]
  }

  const priceTimeNights = pickedRoom.price * dateRange.nightStay;

  return (
    <div className="about-your-stay">
      <Title title="about your stay" />
      <section className="check-inout-section">
        <div className="check-inout-wrapper">
          <span>Check-In</span>
          <span>After 3:00 PM</span>
        </div>
        <div className="check-inout-wrapper">
          <span>Check-Out</span>
          <span>Before 11:00 AM</span>
        </div>
      </section>
      <span>{formatDate(dateRange.startDate)}</span>
      <span> - {formatDate(dateRange.endDate)}</span>
      <p> {capacity}{capacity > 1 ? " Guests": " Guest" }</p>
      <p> {dateRange.nightStay}{dateRange.nightStay > 1 ? " Nights": " Night" }</p>
      <div>
        { pickedRoom.roomName && <span>{pickedRoom.roomName}</span>}
        { pickedRoom.price && <span> ${priceTimeNights}.00</span>}
      </div>

        { pickedRoom.price && (
          <div>
            <span>Taxes and Fees</span>
            <span> ${ priceTimeNights*0.125 }</span>
          </div>
        )}
      
      <div>
        <span>Total</span>
        { pickedRoom.price 
          ? <span> ${ priceTimeNights + (priceTimeNights*0.125) }</span>
          : <span>$0.00</span>
        }
      </div>
    </div>
  )
}

export default AboutYourStay