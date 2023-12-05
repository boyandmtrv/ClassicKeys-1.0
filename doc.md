# Softuni React Project Defence - ClassicKeys 1.0

## ClassicKeys 1.0 is a minimalistic and retro by design game, responsive React application, for playing and training your typing abilities and creating custom games, which can be played by you and other users.

## Features
### Non-Logged-In Users / Guest users:
- Provided access to the Home page
- Access to the About page
- Register / Login 
  - Login - sign in with their email and password
  - Register - create new account by filling needed fields
- Distributed access for dashboard page, in which the guests can find created games by authenticated users and their coresponding details:
  - Game info on dashboard page:
    - Game title
    - Difficulty level
    - Time in seconds
  - Game info for chosen game 
    - Game title
    - Game words / sentences / quotes or whatever the authenticated user have written
    - Difficulty level
    - Time in seconds

### Logged-in-Users / Registered Users:
- All feautures provided for the guest users
- Welcome page - greets the user each time when he is logged-in / registered in the app
- Game feature - the user can play the main typing game unlimited times
- Create game - the user can create it's own custom game, in which he / she can set:
  - Custom text / quote / sentence / words or something else, it is truly based on the user choice
  - Option / button for generating random sentence
  - Option / button for generating random quote
  - Game title
  - Level of difficulty
  - Time in seconds
  - Create / Cancel options
- Test it's own game - the user would be able to test his / her creation and choose if he / she wants to change it by using the written below options
- Edit game functionallity - the personal can edit it's own game with all of the top options managable to be changed
- Delete his own game
- Test other user's game
  - Each users is fortunate to test unlimited times other user's games


## Play the Game
Each user is privilidged play the main typing game and he / she can choose between the following options:
    - Depending on the user's choice, the user can choose how long the test will continue, by selecting the seconds option
    - Easily generating new sentence, by his / her preferences
    - Switching between difficulty levels - each level has different words, which are dybamically changed and progressively harder.
    - Ending test screen - displaying the following results, when the time in seconds ends:
        - Correct and Incorrect words
        - Percentage of accuracy
        - Words Per Minute Calculation
        - Depending on the users accuracy rate, he / she will receive a relevant message.
        - Refresh the test - it will generate brand new words and the user will be redirected to the main game play page
        - Re-take the test - the user has unlimited tries for the test, in order to improve and train their typing skills.


## Tech Stack
- React: used for Front-end Development and all functionalities
- react-spring - React library that provides a set of simple, expressive, and high-performance animations for React applications
- react-toastify - React library used for displaying notifications (toasts) in web applications
- lucide-react - Implementation of the lucide icon library for react applications

