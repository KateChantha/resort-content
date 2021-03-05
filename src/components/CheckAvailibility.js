import React from 'react';
import { withRoomConsumer } from '../context';
import { useContext } from 'react'; 
import { RoomContext } from "../context";

/** Helper Function **/ 
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const CheckAvailibility = ({context}) => {
  const {rooms} = context;
  const contextFilter = useContext(RoomContext);
  const { handleChange, capacity } = contextFilter;

  /** get unique capacity & map to JSX **/ 
  let roomCapacity = 
        getUnique(rooms, "capacity")
        .map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ));

  return (
    <section className="filter-container">
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

