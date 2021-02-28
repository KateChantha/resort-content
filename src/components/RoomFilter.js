import React from 'react';
import { useContext } from 'react'; // works with FC
import { RoomContext } from "../context";
import Title from "./Title";

const RoomFilter = () => {
  // access RoomContext
  const context = useContext(RoomContext);
  console.log("context in RoomFilter", context)

  return (
    <div>
      Room filter
    </div>
  )
}

export default RoomFilter
