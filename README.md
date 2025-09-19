# BookieShow

BookieShow is a full-stack web application for booking movie tickets online. It features a React front-end, a Node.js/Express backend, and MongoDB for data storage. The app allows users to select movies, choose time slots, pick seats, and view their last booking details.

## Project Structure

- **front-end/**: React application for the user interface
- **back-end/**: Node.js/Express REST API and MongoDB integration

## Features

- Movie selection and seat booking
- View last booking details
- Responsive and modern UI
- RESTful API with Express
- MongoDB for persistent storage

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm
- MongoDB (local or Atlas)

### Setup
1. Clone the repository:
	```sh
	git clone <repo-url>
	cd BookieShow
	```
2. Install dependencies for both front-end and back-end:
	```sh
	cd front-end
	npm install
	cd ../back-end
	npm install
	```
3. Start MongoDB (if running locally).
4. Start the backend server:
	```sh
	npm start
	```
5. In a new terminal, start the front-end:
	```sh
	cd ../front-end
	npm start
	```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is licensed under the ISC License.