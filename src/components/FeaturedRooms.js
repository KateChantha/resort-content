import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from '../components/Loading';

export default class FeaturedRooms extends Component {
  // can be access by class component only
  static contextType = RoomContext;

  render() {
    // the state object that is the value passed from RoomContext in context.js
    // give an alias name as rooms
    const {featuredRooms : rooms} = this.context;

    console.log("featuredRooms", rooms)
    
    return (
      <div>
        this is FeaturedRooms 
        <Loading />
      </div>
    )
  }
}
