import React, { Component } from 'react';
import items from './data'; // naming to match Contentful

const RoomContext = React.createContext();
/**Typical setup context API
 * in index.js
 * <RoomContecxt.Provider value={ /state/ }>
 *  <App />
 * <RoomContecxt.Provider />
 */

 /** Another way to setup context API
  * to format data before passing in as a value
  * by creating a class component that formating data/state - NOTE: this way works only for a class component
  * then returns <RoomContecxt.Provider value={ /formated state/ }>
  * in index.js
  * <RoomProvider><App /></RoomProvider>
  */ 
class RoomProvider extends Component {
  state = { 
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  // method to format the data object
  formatData(items) {
    // return a list of all rooms
    return items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(img => img.fields.file.url);
      // format each room as an object
      return {...item.fields, id, images}
    })
  }

  getRoom = slug => {
    // find return an object while filter will return an array of object
    return [...this.state.rooms].find(room => room.slug === slug)
  }

  // get data
  componentDidMount() {
    // format the imported data/items
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(rm => rm.featured === true )
    
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    })
  }

  render() {
    return (
      // passing every thing in the state object
      <RoomContext.Provider 
        value={{
          ...this.state,
          getRoom: this.getRoom
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

// HOC that will be used in RoomContainer.js
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    )
  }
}

export { RoomProvider, RoomConsumer, RoomContext }
