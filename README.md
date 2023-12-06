# Softuni React Project Defence - ClassicKeys 1.0

## ClassicKeys 1.0 is a minimalistic and retro by-design game, a responsive React application, for playing and training your typing abilities and creating custom games, which can be played by you and other users.

## Contents
- [Tech Stack](##Tech-Stack)
- [Libraries and Dependencies](##Libraries-and-Dependencies)
- [Features](##Features)
- [Play the Game](##Play-the-Game) 
- [App Structure](##App-Structure)  
- [Server Documentation](##Server-Documentation) 
- [Run the App](##Run-the-App) 
- [Screenshot](##Screenshots) 

## Tech Stack
### Front-end:
  - React: Used for building the user interface and application functionalities.
  - react-dom: DOM-specific methods for rendering React components.
  - react-router-dom: Library for client-side navigation and routing.
  - Vite: Modern build tool prioritizing speed.
### Styling:
  - Tailwind CSS: Utility-first CSS framework.
  - Box icons - icons for UI usage
  - INVASION2000 font - unique typeface selected or designed specifically for a project
### External APIs:
  - api.quotable.io: Used for generating random quotes.
### Deployment
  - Firebase: Hosting platform.

## Libraries and Dependencies
- react-spring - React library that provides a set of simple, expressive, and high-performance animations for React applications
- react-toastify - React library used for displaying notifications (toasts) in web applications
- lucide-react - Implementation of the lucide icon library for react applications
- random-words - JavaScript library that generates random English words. 
- react-simple-typewriter - used for typewriter-like text animations.
- tailwind-scrollbar - tailwindCSS plugin for styling scrollbars.

## Features
### Non-Logged-In Users / Guest users:
- Provided access to the Home page
- Access to the About page
- Register / Login 
  - Login - sign in with their email and password
  - Register - Create a new account by filling needed fields
- Distributed access to the dashboard page, in which the guests can find created games by authenticated users and their corresponding details:
  - Game info on the dashboard page:
    - Game title
    - Difficulty level
    - Time in seconds
  - Game info for the chosen game 
    - Game title
    - Game words/sentences/quotes or whatever the authenticated user has written
    - Difficulty level
    - Time in seconds

### Logged-in-Users / Registered Users:
- All features provided for the guest users
- Welcome page - greets the user each time he is logged in / registered in the app
- Game feature - the user can play the main typing game unlimited times
- Create a game - the user can create its own custom game, in which he /she can set:
  - Custom text/quote/sentence/words or something else, it is truly based on the user's choice
  - Option/button for generating random sentence
  - Option/button for generating a random quote
  - Game title
  - Level of difficulty
  - Time in seconds
  - Create / Cancel options
- Test its own game - the user would be able to test his / her creation and choose if he/she wants to change it by using the written below options
- Edit game functionality - the personnel can edit it's own game with all of the top options manageable to be changed
- Delete his own game
- Test other user's game
  - Each user is fortunate to test unlimited times other user's games


## Play the Game
Each user is privileged play the main typing game 
### Options:
  - Depending on the user's choice, the user can choose how long the test will continue, by selecting the seconds option
  - Easily generating new sentences, by his / her preferences
  - Switching between difficulty levels - each level has different words, which are dynamically changed and progressively harder.
### Game Typing Dynamics
  - Each word is highlighted to make it easy for the user to follow along.
  - If a character is misspelled, the entire word turns red, highlighting the error.
  - A cursor follows each letter as the user types, providing a visual guide.
    
### Ending test screen - displaying the following results, when the time in seconds ends:
  - Correct and Incorrect words
  - Percentage of accuracy
  - Words Per Minute Calculation
  - Depending on the user's accuracy rate, he/she will receive a relevant message.
  - Refresh the test - it will generate brand new words and the user will be redirected to the main gameplay page
  - Re-take the test - the user has unlimited tries for the test, to improve and train their typing skills.

## App structure
### App.JSX: The main React component for the application.
 - Components: Contains various React components for different sections of the application.
 - Contexts: Holds the AuthContext for managing user authentication.
 - Game: Includes components related to the game functionality.
 - Guards: Contains the AuthGuard for protecting routes that require authentication.
 - Paths: Defines paths for routing.
 - Errors: Includes an ErrorBoundary for handling errors gracefully.
### index.css
- Stylesheet for the application, with tailiwindCSS used.
### index.html
- HTML file where the React app is mounted.
### main.js
- The HTML file where the React app is mounted.

## Server Documentation
- REST service, created for educational purposes. A compiled bundle should be available with every exercise's resources. To execute it, run the included start.bat file, or manually open a command prompt and run node server.js.

## Run the App
1. Start the Server
- Open a terminal and navigate to the server directory:
cd server
- Run the server using Node.js:
node server.js
  - This will start the server, and it will be accessible at the specified port.

2.  Start the Client
- Open a new terminal and navigate to the client directory:
cd client
- Install the client dependencies:
npm install
- Run the development server:
npm run dev
  - Now you have both the server and client running concurrently. You can access the application in your web browser.

Note:
Make sure that the necessary dependencies are installed before starting the client.
If you need to customize the server or client configurations, refer to the respective server.js and client/package.json files.

## License
- MIT License

## Screenshots:
![image](https://github.com/boyandmtrv/Clik/assets/122356573/7e9f184b-747b-4037-aba9-4dde3fa84d45)
![image](https://github.com/boyandmtrv/Clik/assets/122356573/1ec9d138-39bc-48b1-a033-35562251107a)
![image](https://github.com/boyandmtrv/Clik/assets/122356573/c8dde3e5-3025-47c8-bce1-fdd432de1651)
![image](https://github.com/boyandmtrv/Clik/assets/122356573/2134c8e1-4c94-49f8-aaaa-ac957c9ae804)




