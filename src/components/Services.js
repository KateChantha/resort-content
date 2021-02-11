import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
  state={
    services: [
      {
        icon: <FaCocktail/>,
        title: "free cocktails",
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quis!'
      },
      {
        icon: <FaHiking/>,
        title: "Endless Hiking",
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quis!'
      },
      {
        icon: <FaShuttleVan/>,
        title: "Free Shuttle",
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quis!'
      },
      {
        icon: <FaBeer/>,
        title: "Strongest Beer",
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quis!'
      }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    )
  }
}
