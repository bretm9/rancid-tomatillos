# Rancid Tomatillos

> A Front-End Project by [Bret Merritt](https://github.com/bretm9) and [Carlyle "Dougie" Douglas](https://github.com/DougieDev)
<!-- > [Link to project]() -->
---
## Contents
1. [Overview](#overview)
1. [Setup](#setup)
1. [Technologies](#technologies)
1. [Design](#design)
1. [Evolution](#evolution)
1. [Challenges](#challenges)
1. [Successes](#successes)
---

## Overview

  This application was the first project of Module 3 in the Front-End Development program at Turing School of Software and Design. Through creating this website, we utilized React and React testing library to develop a movie rating website. We had 2.5 weeks to build out this fully featured app while learning several new technologies in the process.
  
  This app allows users to view average ratings of movies, and look through details for each movie. Upon logging in, the application also lets the user add and remove personal ratings for each film. 

> [Back to the top](#rancid)
---
## Setup

  To get this application running on your machine, do the following:
    * Clone down this repo.
    * `cd` into the newly created repo.
    * run `npm install` in the terminal.
    * run `npm start` in the terminal.
    * If a browser window doesn't automatically open, navigate to `http://localhost:3000/movies/400160` in your browser.

> [Back to the top](#rancid)
---
 ## Technologies
  - JavaScript
  - React
  - Router
  - React Testing Library
  - Jest
  - Fetch API
  - PropType
  - userEvent
  - CSS
  - Git

> [Back to the top](#rancid)
---
## Design

  The homepage is organised to clearly and simply display movies in a grid. under each movie image is the title and the average rating. If the user is logged in, they will also see their personal rating for each movie here.
  
  <img width="840" alt="homepage" src="https://user-images.githubusercontent.com/14350203/96666578-a85ef080-1314-11eb-8b4c-94109b4d13a7.png">
  
  The Login screen allows the user to input their email and password to login to the website. If the user is not yet logged in, clicking the login button in the header will bring them here. If the user is logged in, clicking the logout button in the header will bring them to this screen.
  
  <img width="840" alt="login" src="https://user-images.githubusercontent.com/14350203/96666609-b745a300-1314-11eb-86e8-528e01c1f822.png">

  Clicking on a movie on the homepage will open the page for that specific movie. Here there are extra details for that movie. If the user is logged in, they will also see a drop down to add the their own personal rating for said movie. Once they select a score they can hit the add rating button to submit the rating. They can also remove their rating by hitting the remove rating button.
  
  <img width="840" alt="showpage" src="https://user-images.githubusercontent.com/14350203/96666625-c298ce80-1314-11eb-8dd1-39aa5452e6ac.png">

> [Back to the top](#rancid)
---
## Evolution

  For this project we used a [GitHub Project Board](https://github.com/bretm9/rancid-tomatillos/projects/1) to plan out our course-of-action, and wireframes to visualise our design.
  
  <img width="840" alt="homepage-wireframe" src="https://user-images.githubusercontent.com/14350203/96666703-ea883200-1314-11eb-9a3d-4cfb6d618560.png">
  
  <img width="840" alt="login-wireframe" src="https://user-images.githubusercontent.com/14350203/96666727-f673f400-1314-11eb-9f30-1f09e5cad853.png">
  
  <img width="840" alt="showpage-wireframe" src="https://user-images.githubusercontent.com/14350203/96666747-025fb600-1315-11eb-97a5-af91d4cbcfb0.png">

> [Back to the top](#rancid)
---
## Challenges  
 
  This project was challenging since it was the first venture into React and React testing. Additionally, it was the first time really utilizing async/await. These had some learning curves, but once getting over the initial hurdles, these technologies became vital and speedy tools to create this fully featured application.
 
> [Back to the top](#rancid)
---
## Successes
 
  Throughout this project there were some thrilling and satisfying wins. Getting the application state to properly stay up-to-date with the API was a great feeling. Another big success was examplifying "data-down, actions-up" in practice. Taking in data through props and sending changes up to the App component through passed methods really locked this key concept into our thinking as developers.
  
> [Back to the top](#rancid)
 ---