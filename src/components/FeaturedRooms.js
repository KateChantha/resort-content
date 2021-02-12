import React, { Component } from 'react';
import {RoomContext} from '../context';

export default class FeaturedRooms extends Component {
  // can be access by class component only
  static contextType = RoomContext;

  render() {
    // destructring object properties of the state object that is the value passed from RoomContext
    // const {name} = this.context;
    
    return (
      <div>
        this is FeaturedRooms 
      </div>
    )
  }
}
