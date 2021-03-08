import { useState, useEffect } from 'react';
import { withRoomConsumer } from '../context';
import { useContext } from 'react'; 
import { RoomContext } from "../context";
import './CheckAvailibility.css'

// ====== Old ======
// import { DateRange } from 'react-date-range';
// import { addDays } from 'date-fns';
// import 'react-date-range/dist/styles.css'; 
// import 'react-date-range/dist/theme/default.css';
//====== End of Old=======
// ====== New======
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/** Helper Function **/ 
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const CheckAvailibility = ({context}) => {
  const {rooms} = context;
  const contextFilter = useContext(RoomContext);
  const { handleChange, capacity, handleDateRange } = contextFilter;

  /** get unique capacity & map to JSX **/ 
  let roomCapacity = 
        getUnique(rooms, "capacity")
        .map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ));

  //===== OLD =======
  // const [dateRange, setDateRange] = useState({
  //   selection1: {
  //     startDate: addDays(new Date(), 0),
  //     endDate: addDays(new Date(), 1),
  //     key: 'selection1'
  //   }
  // });

  // function days_passed(start, end) {
  //   return Math.ceil((end - start) / 86400000);
  // }

  // useEffect(() => {
  //   const nights = days_passed(dateRange.selection1.startDate, dateRange.selection1.endDate);
  //   // handleDateRange(nights)
  //   handleDateRange({...dateRange.selection1}, nights)
  // }, [dateRange])
  //===== END OF OLD =======
  
  //===== NEW =======
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateRange, setDateRange] = useState(1);

  console.log("startDate", startDate)
  console.log("endDate", endDate)
  console.log("dateRange", dateRange)

  function days_passed(start, end) {
    return Math.ceil((end - start) / 86400000);
  }

  useEffect(() => {
    const nights = days_passed(startDate, endDate);

    setDateRange(nights)
    // handleDateRange(nights)
  }, [endDate])
  //===== END OF NEW =======


  return (
    <section className="filter-container">
      {/* <DateRange
        onChange={item => setDateRange({ ...dateRange, ...item })}
        ranges={[dateRange.selection1]}
      /> */}

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

