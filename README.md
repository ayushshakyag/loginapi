# User Login API

This is a simple API built with Node.js and Express that allows users to register and login using a username and password. The API provides endpoints for managing user data and performing user authentication.

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd <project_directory>`
3. Install the dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Access the API using the base URL: `http://localhost:3000`

### Endpoints

- `GET /users`: Retrieve a list of all users.
- `POST /users`: Create a new user by providing the username and password in the request body.
- `POST /login`: Authenticate a user by providing the username and password in the request body.
