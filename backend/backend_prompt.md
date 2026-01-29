# Prompt: Node.js Backend for Motor Vehicle Appointment Booking System

Create a comprehensive Node.js backend API for a motor vehicle appointment booking system with the following specifications:

## Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens) with bcrypt
- **Email Service**: Nodemailer
- **Environment Management**: dotenv
- **Validation**: Zod

## Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma            # Prisma schema definition
│   ├── migrations/              # Database migrations
│   └── seed.js                  # Database seeding script
├── src/
│   ├── config/
│   │   ├── database.js          # Prisma client configuration
│   │   ├── jwt.js               # JWT configuration
│   │   └── email.js             # Email service configuration
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication middleware
│   │   ├── roleCheck.js         # Role-based access control
│   │   ├── validation.js        # Request validation middleware
│   │   └── errorHandler.js      # Global error handling
│   ├── routes/
│   │   ├── auth.routes.js       # Authentication routes
│   │   ├── appointments.routes.js
│   │   ├── bookings.routes.js
│   │   ├── locations.routes.js
│   │   ├── slots.routes.js
│   │   ├── waitlist.routes.js
│   │   └── admin.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── appointments.controller.js
│   │   ├── bookings.controller.js
│   │   ├── locations.controller.js
│   │   ├── slots.controller.js
│   │   ├── waitlist.controller.js
│   │   └── admin.controller.js
│   ├── services/
│   │   ├── auth.service.js      # Authentication logic
│   │   ├── booking.service.js   # Business logic for bookings
│   │   ├── slot.service.js      # Slot availability logic
│   │   ├── waitlist.service.js  # Waitlist management
│   │   └── email.service.js     # Email notifications
│   ├── utils/
│   │   ├── logger.js            # Logging utility
│   │   ├── errors.js            # Custom error classes
│   │   ├── jwt.js               # JWT helper functions
│   │   └── validators.js        # Validation schemas
│   ├── app.js                   # Express app setup
│   └── server.js                # Server entry point
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Core API Endpoints

### Authentication Endpoints

```
POST   /api/auth/signup              # User registration (returns JWT)
POST   /api/auth/login               # User login (returns JWT)
GET    /api/auth/me                  # Get current user
PUT    /api/auth/profile             # Update user profile
POST   /api/auth/forgot-password     # Request password reset
POST   /api/auth/reset-password      # Reset password with token
POST   /api/auth/change-password     # Change password (authenticated)
```
