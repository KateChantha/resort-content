## Resort Booking App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Working Steps
1. Setup _redirects file to the root of our site [public folder of App] public/_redirects due to
Netlify “page not found” when sharing React-Router-Dom based links. https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa 

2. Nav.js we can refactor nav links instead of hard coding by create an array of object for the links and map over to return ```<li>``` for each links. This way if we have somewhere else to show links such as footer, sidetab then this approach will be more maintainable.

3. Hero.js takes a dynamicaly style as a props. And also set up with a default style fallback. 
SideNote: We can place Banner.js and button inside Hero.js as one unit(make it easy to import to each page) but in this project, we want to make it a little more customizable, so we make them a seperate component.

4. Set up Context API (see notes in context.js). In this project, we set up RoomProvider as a HOC to format the imported data before passing in as a value to the context Provider.
