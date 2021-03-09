import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import AboutYourStay from './AboutYourStay';
import './RoomsContainer.css';


/** ---------------------------------
 * Option with HOC withRoomConsumer()
 * ----------------------------------
 */
const RoomsContainer = ({context}) => {
  const {loading, sortedRooms, rooms} = context;
  console.log("in room container-CONTEXT", context)

  return loading
          ? <Loading />
          : (
              <div className="rooms-container">
                <div className="rooms-container--yourstay">
                  <AboutYourStay rooms={sortedRooms}/>
                </div>
                <div className="rooms-container--list-filter">
                  <RoomFilter rooms={rooms}/>        
                  <RoomList rooms={sortedRooms}/>
                </div>
              </div>
            );
}

export default withRoomConsumer(RoomsContainer);

/** --------------------------------
 * Option with imporing RoomConsumer
 * ---------------------------------
 */
// import {RoomConsumer} from '../context';


// const RoomsContainer = () => {
//   return (
//     <RoomConsumer >
//       {
//         (value) => {
//           const {loading, sortedRooms, rooms} = value;
          
//           return loading
//                   ? <Loading />
//                   : (
//                       <div>
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>
//                       </div>
//                     );
//         }
//       }
//     </RoomConsumer>
//   );
// }

// export default RoomsContainer
