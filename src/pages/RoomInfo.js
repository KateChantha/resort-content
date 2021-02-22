import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { RoomContext } from '../context';

export default class RoomInfo extends Component {
  constructor(props) {
    super(props);
    // log to see props from react-router-dom
    // eventho we didn't pass those props ourself
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }

  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug)
    // console.log(room)
    // we will first get room -> undefined when it's sill loading. shortly after that we'll get the room object.
    if(!room) {
      return (
        <div className="error">
          <h3>no such room could be found</h3>
          <Link to='/rooms' className='btn-primary' >
            back to rooms
          </Link>
        </div>
      )
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <StyledHero img={images[0] || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    )
  }
}