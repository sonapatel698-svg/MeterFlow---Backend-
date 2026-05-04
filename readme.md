# MeterFlow Backend

Secure REST API with JWT authentication for MeterFlow application.

## Features
- User registration & login with bcrypt
- JWT based protected routes
- CRUD operations for meters
- MongoDB Atlas integration
- 401/201 status code handling

## Tech Stack
Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs

## Setup
1. npm install
2. Create.env file with MONGO_URI and JWT_SECRET
3. npm start

## API Endpoints
POST /api/auth/register - Register user
POST /api/auth/login - Login user
POST /api/meters - Create meter (Protected)
GET /api/meters - Get user meters (Protected)
