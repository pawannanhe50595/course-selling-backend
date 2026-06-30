# Course Selling Platform Backend

This is a backend project for a Course Selling Platform built using Node.js, Express.js, TypeScript, Prisma ORM, PostgreSQL (Neon), and JWT Authentication.

The project includes API routes, controllers, Prisma schema, JWT token generation, and authentication middleware.

## Project Structure

```
src
│
├── controllers
├── routes
├── middlewares
├── prisma
├── app.ts
└── server.ts
```

## Setup

### Clone the repository

```bash
git clone <repository-url>
```

### Go to the project folder

```bash
cd course-selling-backend
```

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm run dev
```

## API Routes

### Authentication

- POST /auth/register
- POST /auth/login

### Courses

- GET /courses
- POST /courses
- GET /courses/:id

### Students

- POST /students
- GET /students/:id

### Enrollments

- POST /enrollments
- GET /enrollments

## Features

- Express.js REST APIs
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- JWT Authentication
- Authentication Middleware

## Prisma Models

- User
- Student
- Staff
- Course
- Enrollment

## Relationships

- User → Student (1:1)
- User → Staff (1:1)
- Staff → Course (1:M)
- Student → Enrollment (1:M)
- Course → Enrollment (1:M)

## Author

Pawan Nanhe