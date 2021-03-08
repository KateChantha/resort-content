import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

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
              <div>
                <RoomFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
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
