import React from 'react';
import { useContext } from 'react'; // works with FC
import { RoomContext } from "../context";
import Rooms from '../pages/Rooms';
import Title from "./Title";

const AboutYourStay = () => {
  const context = useContext(RoomContext);
  const { capacity, dateRange } = context;
  
  const formatDate = (date) => {
    const dateArray = date.split(" ");
    return dateArray[0]+","+dateArray[1]+" "+dateArray[2]+","+dateArray[3]
  }

  

  return (
    <div>
      <Title title="about your stay" />
      <div>
        <span>Check-In</span>
        <span>After 3:00 PM</span>
      </div>
      <div>
        <span>Check-Out</span>
        <span>Before 11:00 AM</span>
      </div>
      <p>{formatDate(dateRange.startDate)}</p>
      <p>{formatDate(dateRange.endDate)}</p>
      <p> {capacity}{capacity > 1 ? " Guests": " Guest" }</p>
      <p> {dateRange.nightStay}{dateRange.nightStay > 1 ? " Night": " Night" }</p>
      <div>
        <span>Total</span>
        <span>$0.00</span>
      </div>
    </div>
  )
}

export default AboutYourStay
