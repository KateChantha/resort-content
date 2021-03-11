import { useState, useEffect } from 'react';
import { withRoomConsumer } from '../context';
import { useContext } from 'react'; 
import { RoomContext } from "../context";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CheckAvailibility.css'

/** Helper Function **/ 
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const CheckAvailibility = ({context}) => {
  const {rooms} = context;
  const contextFilter = useContext(RoomContext);
  const { handleChange, capacity, handleDateRange } = contextFilter;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  /** get unique capacity & map to JSX **/ 
  let roomCapacity = 
        getUnique(rooms, "capacity")
        .map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ));
  /** Helper Function */
  function days_passed(start, end) {
    return Math.ceil((end - start) / 86400000);
  }

  useEffect(() => {
    const nightStay = days_passed(startDate, endDate) || 1;
    console.log("use effect in Checkavai- nightStaty",nightStay )

    handleDateRange({
      startDate: startDate,
      endDate: endDate,
      nightStay: nightStay})
  }, [endDate])
  

  return (
    <section className="check-avail-wraper">
      <div className="datepicker-wrapper">
        <label htmlFor="check in">Check In</label>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MMMM d, yyyy"
        />
      </div>
      
      <div className="datepicker-wrapper">
        <label htmlFor="check put">Check Out</label>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="MMMM d, yyyy"
        /> 
      </div>
      
      <form className="">
        {/* guests capacity  */}
        <div className="capacity-wrapper">
          <label htmlFor="capacity">How Many Guests?</label>
          <select
            name="capacity"
            id="capacity-check-avail"
            onChange={handleChange}
            className="form-control check-avail"
            value={capacity}
          >
            {roomCapacity}
          </select>
        </div>
        {/* end of guests capacity */}
      </form>
    </section>
  )
}

export default withRoomConsumer(CheckAvailibility);

