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

6. The way RoomInfo page is set up without componentDidMount. Note: we can access props from react-router thru both constructor fucntion or in componentDidMount
- Without componentDidMount, we have to catch 'undefined' room in the render. So we can only have choice to show error message or render the page.
- Usually we set up with componentDidMOunt when we want to make an API call. If we set with componentDidMount, we can have option to display loading status.

7. In RoomInfo.js, we will use style-component so that we can give a backgound image url to each room type dynamically