# BookieShow Backend

This is the backend service for BookieShow, a movie ticket booking application. It is built with Node.js, Express, and MongoDB.

## Features
- RESTful API for booking and retrieving movie tickets
- MongoDB integration using Mongoose
- CORS enabled for cross-origin requests
- Modular code structure

## Endpoints

- `POST /api/booking` — Book a movie ticket
- `GET /api/booking` — Get the last booking details

## Setup & Usage

### Prerequisites
- Node.js (v18 or above)
- npm
- MongoDB (local or Atlas)

### Installation
1. Navigate to the `back-end` directory:
	```sh
	cd back-end
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Start MongoDB (if running locally).
4. Start the backend server:
	```sh
	npm start
	```
	The server will run on [http://localhost:5000](http://localhost:5000) by default.

## Project Structure
- `server.js` — Main server file
- `routes.js` — API route definitions
- `schema.js` — Mongoose schema for tickets
- `dbConnection.js` — MongoDB connection logic

## License

This project is licensed under the MIT License.
