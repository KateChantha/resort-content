import React from 'react';
import { useContext } from 'react'; // works with FC
import { types } from 'util';
import { RoomContext } from "../context";
import Title from "./Title";


/** Helper Function **/ 
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}


const RoomFilter = ({rooms}) => {
  // access RoomContext
  const context = useContext(RoomContext);
  // console.log("context in RoomFilter", context)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  /** get unique room types **/
  let types = getUnique(rooms, "type");
  // add option all
  types = ["all", ...types];
  // map types options to JSX
  types = types.map((item, idx) => (
    <option key={idx} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select 
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  )
}

export default RoomFilter
