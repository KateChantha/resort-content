import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Servives from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import CheckAvailibility from '../components/CheckAvailibility';

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <CheckAvailibility />
          <Link to="/rooms" className="btn-primary">
            check availitbility
          </Link>
        </Banner>
      </Hero>
      <Servives />   
      <FeaturedRooms />
    </React.Fragment>
  )
}

export default Home;