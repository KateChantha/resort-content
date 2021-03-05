import { useState, useEffect } from 'react';
import { withRoomConsumer } from '../context';
import { useContext } from 'react'; 
import { RoomContext } from "../context";
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

/** Helper Function **/ 
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const CheckAvailibility = ({context}) => {
  const {rooms} = context;
  const contextFilter = useContext(RoomContext);
  const { handleChange, capacity, handleDateRange } = contextFilter;

  const [dateRange, setDateRange] = useState({
    selection1: {
      startDate: addDays(new Date(), 0),
      endDate: addDays(new Date(), 1),
      key: 'selection1'
    }
  });

  /** get unique capacity & map to JSX **/ 
  let roomCapacity = 
        getUnique(rooms, "capacity")
        .map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ));

  function days_passed(start, end) {
    return Math.ceil((end - start) / 86400000);
  }

  useEffect(() => {
    const nights = days_passed(dateRange.selection1.startDate, dateRange.selection1.endDate);
    // handleDateRange(nights)
    handleDateRange({...dateRange.selection1}, nights)
  }, [dateRange])

  return (
    <section className="filter-container">
      <DateRange
        onChange={item => setDateRange({ ...dateRange, ...item })}
        ranges={[dateRange.selection1]}
      />
      <form className="filter-form">
        {/* guests capacity  */}
        <div className="form-group">
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

