import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImg from '../images/room-1.jpeg';
import { RoomContext } from "../context";

const Room = ({ room, keepRoomButton }) => {
  const {name, slug, images, price} = room;

  const context = useContext(RoomContext);
  const {handlePickedRoom} = context;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <Link to={`/rooms/${slug}`} className="btn-primary ">
      <p className="room-info">{name}</p>
      </Link>
      {/* <p className="room-info">{name}</p> */}
      { keepRoomButton && 
        <button 
          className="booknow"
          onClick={()=> handlePickedRoom( { roomName: name, price: price} )}
        >Keep Room</button>
      }
      
    </article>
  )
}

Room.prototype = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  })
}

export default Room
