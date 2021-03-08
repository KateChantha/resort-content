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
  const { handleChange, capacity, handleDateRange, dateRange } = contextFilter;
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
    <section className="filter-container">
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMMM d, yyyy"
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="MMMM d, yyyy"
      /> 
      
      <form className="filter-form">
        {/* guests capacity  */}
        <div className="form-group check-avalibility-group">
          <label htmlFor="capacity">How Many Guests?</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
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

