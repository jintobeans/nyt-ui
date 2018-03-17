# New York Times Bestsellers Challenge

A 3-4 day challenge to build a simple user interface for browsing overviews of the New York Times Bestsellers

View the deployed app here: https://nyt-ui.herokuapp.com

## Technologies Used:

* React

* React-Redux

* React Router DOM

* Express


## Objectives of the challenge:

Given: One API endpoint belonging to NYT Books API that returns overview information

* Build an intuitive and responsive user interface

* Avoid using any CSS frameworks

* Be supported by all modern browsers

* Include tests for each component

* Write code that is as readable as possible

## Installation:

Install dependencies:
```
npm install
```
Create a *secrets.js* file in the project repository and save API key there:
```
PROCESS.ENV.API_KEY = 'enter api key here'
```
Run on local server:
```
npm run start-dev
```

## Bugs:

* Moving API call to the backend is not working right now with jsonp - ideal for protecting API key

## Stretch Goals:

* Make JSONP API calls from the back end in order to protect security of API key

* Integrate other API calls (outside of 'Overview') from the NYT Books API with additional reducers


