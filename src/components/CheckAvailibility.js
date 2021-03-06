import { useState, useEffect } from 'react';
import { withRoomConsumer } from '../context';
import { useContext } from 'react'; 
import { RoomContext } from "../context";
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import './CheckAvilibility.css'

/** Helper Functions **/ 
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const days_passed = (start, end) => {
  return Math.ceil((end - start) / 86400000);
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

  // useEffect(() => {
  //   const nights = days_passed(dateRange.selection1.startDate, dateRange.selection1.endDate);
    
  //   console.log('in useEffect check avai',dateRange.selection1 , "nights", nights)

  //   handleDateRange({...dateRange.selection1}, nights)
  // }, [dateRange])

  console.log('Befre useEffect check avai: dateRange',dateRange )
  useEffect(() => {
  //  console.log('in useEffect check avai: dateRange',dateRange )
   console.log('in useEffect check avai: dateRange.selection1',{...dateRange.selection1} )

  }, [dateRange])

  return (
    <section className="filter-container">
      <DateRange
        onChange={item => setDateRange({ ...dateRange, ...item })}
        ranges={[dateRange.selection1]}
      />
        {/* guests capacity  */}
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="capacity">How Many Guests?</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control check-guest"
            value={capacity}
          >
            {roomCapacity}
          </select>
        </div>       
      </form>
      {/* end of guests capacity */}
    </section>
  )
}

export default withRoomConsumer(CheckAvailibility);

