import React, { Component } from 'react';

const RoomContext = React.createContext();
/**Typical setup
 * <RoomContecxt.Provider value={ // } >
 *  <App />
 * <RoomContecxt.Provider />
 */

class RoomProvider extends Component {
  state = { name: 'kate'};
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
