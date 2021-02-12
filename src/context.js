import React, { Component } from 'react';
import items from './data'; // naming to match Contentful

const RoomContext = React.createContext();
/**Typical setup
 * <RoomContecxt.Provider value={ // } >
 *  <App />
 * <RoomContecxt.Provider />
 */

class RoomProvider extends Component {
  state = { 
    rooms: [],
    sortedRooms: [],
    FeaturedRooms: [],
    loading: true
  };

  // method to format the data object
  formatData(items) {
    return items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(img => img.fields.file.url);

      return {...item.fields, id, images}
    })
  }

  // get data
  componentDidMount() {
    let rooms = this.formatData(items);
    console.log("----", rooms)
  }

  render() {
    return (
      // passing every thing in the state object
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }
