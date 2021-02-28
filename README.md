## Resort Booking App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Working Steps
1. Setup _redirects file to the root of our site [public folder of App] public/_redirects due to
Netlify “page not found” when sharing React-Router-Dom based links. https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa 

2. Nav.js we can refactor nav links instead of hard coding by create an array of object for the links and map over to return ```<li>``` for each links. This way if we have somewhere else to show links such as footer, sidetab then this approach will be more maintainable.

3. Hero.js takes a dynamicaly style as a props. And also set up with a default style fallback. 
SideNote: We can place Banner.js and button inside Hero.js as one unit(make it easy to import to each page) but in this project, we want to make it a little more customizable, so we make them a seperate component.

4. Set up Context API (see notes in context.js). In this project, we set up RoomProvider as a HOC to format the imported data before passing in as a value to the context Provider.

5. in context.js, we give a value to the provider as an object contains 
- a formating data of all rooms
- a mothod getRoom to find a room by slug that will be used in RoomInfo page. Reason we not define getRoom function in RoomInfo.js just to make RoomInfo code small.

6. The way RoomInfo page is set up without componentDidMount. Note: we can access props from react-router thru either constructor function or in componentDidMount
- Without componentDidMount, we have to catch 'undefined' room in the render. So we can only have choice to show error message or render the page.
- Usually we set up with componentDidMOunt when we want to make an API call. If we set with componentDidMount, we can have option to display loading status.

7. In RoomInfo.js, we will use style-component so that we can give a backgound image url to each room type dynamically since data (imageUrl) comes from backend.
- to do so, we will update Hero component to be dynamic. In this project, we will create a styled compornent for Hero called it StyledHero.js
- move/ omit .roomsHero style in App.css (line 160) and move those styles to StyledHero.js instead.
- in StyledHero.js, we now can dinamically render hero image through props that pass from parent component-> RoomInfo.js (which gets room data from context)
- NOTE: notice that, in StyledHero.js and RoomInfo.js, both set a fallback default image which is over-kill to do so. We can actually set the default image only one place. Here just to demostarte how to set the dafault image.

8. TODO: in each page, replaced Hero component by styledHero and then romove/ omit .roomsHero in App.css (line 160).

9. RoomsContainer.js recieve "value" object from context.
There are 2 ways to do it... 
-  9.1 It's wraped by RoomConsumer and write a callback function in the RoomsContainer
-  9.2 It's wraped by withRoomConsumer() which is a HOC written in context.js 

10. Rooms data managment. We pass "rooms" data from context.js to RoomFilter component, them RoomFilter will pass "sorted room" data to RoomList component.

11. Very Important note: in term of display each Room in the RoomList. See App.css 
```
.roomslist-center {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
}
```
we set repeat(auto-fill,...) with auto-fill instead of auto-fit, this way Room card will not stretch to fit the whole div.

12. Filter rooms, work with the option control inputs and onChage
- in context.js, set up some value & default value in context state
- set up the onChange handler function and pass them down to RoomFilter component then attched tnem to each input

13. In RoomFilter.js, we access context data by using useContext hooks instead of HOC. useContext can be used with a fuscntional component.