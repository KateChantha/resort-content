import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../context';
import Loading from './Loading';


const RoomsContainer = () => {
  return (
    <RoomConsumer >
      {
        (value) => {
          const {loading, sortedRooms, rooms} = value;
          
          return loading
                  ? <Loading />
                  : (
                      <div>
                        this is room container
                        <RoomFilter rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>
                      </div>
                    );
        }
      }
    </RoomConsumer>
  );
}

export default RoomsContainer
