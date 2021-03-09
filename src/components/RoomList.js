import React from 'react';
import Room from './Room';


const RoomList = ({rooms}) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>
        We apologize for the inconvenience. There are no rooms available matching your search criteria.
        </h3>
        <h3>
        Please try selecting alternate dates, modifying your search or filter options, or contacting the hotel for assistance.
        </h3>
      </div>
    )
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          rooms.map(item => (
            <Room 
              key={item.id} 
              room={item} 
              keepRoomButton={true}
            />
          ))
        }
      </div>
    </section>
  )
}

export default RoomList
