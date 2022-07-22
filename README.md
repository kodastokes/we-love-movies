# We Love Movies Server
Thinkful Backend Capstone 

## Project description: WeLoveMovies
You've been hired on as a backend developer at a new startup called WeLoveMovies! As another developer works on the design and frontend experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.

## Routes
- `GET /movies`
- `GET /movies?is_showing=true`
- `GET /movies/:movieId`
- `GET /movies/:movieId` (incorrect ID)
- `GET /movies/:movieId/theaters`
- `GET /movies/:movieId/reviews`
- `GET /theaters`
- `DELETE /reviews/:reviewId`
- `PUT /reviews/:reviewId`

## Learning objectives
This project is designed to test your ability to build complex servers and access data through a database. To succeed at this project, you'll need to demonstrate that you can do the following:

* Install and use common middleware packages
* Receive requests through routes
* Run tests from the command line
* Access relevant information through route and query parameters
* Create an error handler for the case where a route doesn't exist
* Build an API following RESTful design principles
* Create and customize a knexfile.js file
* Create a connection to your database with Knex
* Write database queries to complete CRUD routes in an Express server
* Return joined and nested data with Knex
* Write database migrations using Knex's migration tool
* Deploy your backend server to a cloud service

You will not need to make any edits to HTML or CSS for this project.
