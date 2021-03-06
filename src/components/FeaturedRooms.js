import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from '../components/Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
  // can be access by class component only
  static contextType = RoomContext;

  render() {
    // the state object that is the value passed from RoomContext in context.js
    // give an alias name as rooms
    let { loading, featuredRooms : rooms} = this.context;

    rooms = rooms.map(room => {
      return <Room 
                key={room.id} 
                room={room} 
                keepRoomButton={false}
              />
    })
    
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms }
        </div>
      </section>
    )
  }
}
