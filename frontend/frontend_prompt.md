# Prompt: React.js Frontend for Motor Vehicle Appointment Booking System

Create a comprehensive React.js frontend application for a motor vehicle appointment booking system that integrates with the Node.js + Prisma backend.

## Tech Stack

- **Framework**: React 18+ with Vite
- **Routing**: React Router v6
- **State Management**: React Context API + Hooks
- **UI Library**: Tailwind CSS + shadcn/ui
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod validation
- **Date/Time**: date-fns or dayjs
- **Authentication**: JWT (matching backend JWT implementation)
- **Notifications**: React Toastify
- **Loading States**: React Loading Skeleton

## Project Structure

```
frontend/
├── public/
│   ├── favicon.ico
│   └── logo.svg
├── src/
│   ├── api/
│   │   ├── axiosConfig.js          # Axios instance with JWT interceptors
│   │   ├── auth.api.js             # Auth endpoints (/api/auth/*)
│   │   ├── appointments.api.js     # Appointment types (/api/appointments/*)
│   │   ├── locations.api.js        # Locations (/api/locations/*)
│   │   ├── bookings.api.js         # Bookings (/api/bookings/*)
│   │   ├── slots.api.js            # Slot availability (/api/slots/*)
│   │   ├── waitlist.api.js         # Waitlist (/api/waitlist/*)
│   │   └── admin.api.js            # Admin endpoints (/api/admin/*)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   ├── ConfirmDialog.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── booking/
│   │   │   ├── AppointmentTypeSelector.jsx
│   │   │   ├── LocationSelector.jsx
│   │   │   ├── DatePicker.jsx
│   │   │   ├── TimeSlotSelector.jsx
│   │   │   ├── BookingConfirmation.jsx
│   │   │   ├── BookingDetails.jsx
│   │   │   └── BookingWizard.jsx (multi-step form)
│   │   ├── dashboard/
│   │   │   ├── UserDashboard.jsx
│   │   │   ├── BookingCard.jsx
│   │   │   ├── WaitlistCard.jsx
│   │   │   └── UpcomingAppointments.jsx
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── BookingsList.jsx
│   │   │   ├── AppointmentTypesManager.jsx
│   │   │   ├── LocationsManager.jsx
│   │   │   ├── SlotConfigurationManager.jsx
│   │   │   ├── SpecialDatesManager.jsx
│   │   │   ├── BlockedSlotsManager.jsx
│   │   │   ├── WaitlistManager.jsx
│   │   │   ├── UserManagement.jsx
│   │   │   └── StatisticsCard.jsx
│   │   └── auth/
│   │       ├── LoginForm.jsx
│   │       ├── SignupForm.jsx
│   │       ├── ForgotPasswordForm.jsx
│   │       ├── ResetPasswordForm.jsx
│   │       └── ProfileForm.jsx
│   ├── contexts/
│   │   ├── AuthContext.jsx          # Authentication state with JWT
│   │   ├── BookingContext.jsx       # Booking flow state
│   │   └── ThemeContext.jsx         # Theme/UI preferences
│   ├── hooks/
│   │   ├── useAuth.js               # Authentication hook
hook
│   │   └── useLocalStorage.js       # Local storage hook
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page
│   │   ├── BookAppointment.jsx      # Main booking flow page
│   │   ├── MyBookings.jsx           # User's bookings page
│   │   ├── MyWaitlist.jsx           # User's waitlist
entries
│   │   ├── Login.jsx                # Login page
│   │   ├── Signup.jsx               # Registration page
│   │   ├── Profile.jsx              # User profile page
│   │   ├── ForgotPassword.jsx       # Password reset request
│   │   ├── ResetPassword.jsx        # Password reset form
│   │   ├── AdminDashboard.jsx       # Admin dashboard
│   │   ├── NotFound.jsx             # 404 page
│   │   └── Unauthorized.jsx         # 403 page
│   ├── utils/
│   │   ├── dateUtils.js             # Date formatting utilities
│   │   ├── validators.js            # Form validation schemas (Zod)
│   │   ├── constants.js             # App constants
│   │   └── helpers.js               # Helper functions
│   ├── styles/
│   │   ├── global.css               # Global styles
│   │   ├── variables.css            # CSS variables
│   │   └── theme.js                 # MUI theme configuration
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── routes.jsx                   # Route definitions
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Backend API Integration Reference

### Base URL

```javascript
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
```

### Authentication Endpoints (JWT-based)

```
POST   /api/auth/signup              # Register new user → returns { user, token }
POST   /api/auth/login               # Login → returns { user, token }
GET    /api/auth/me                  # Get current user (requires JWT)
PUT    /api/auth/profile             # Update user profile (requires JWT)
POST   /api/auth/forgot-password     # Request password reset → sends email
POST   /api/auth/reset-password      # Reset password with token
POST   /api/auth/change-password     # Change password (requires JWT)
```

### Appointment Types Endpoints

```
GET    /api/appointments             # Get all active appointment types
GET    /api/appointments/:id         # Get single appointment type
POST   /api/appointments             # Create (Admin only)
PUT    /api/appointments/:id         # Update (Admin only)
DELETE /api/appointments/:id         # Delete (Admin only)
```

### Locations Endpoints

```
GET    /api/locations                # Get all active locations
GET    /api/locations/:id            # Get single location
GET    /api/locations/:id/appointment-types  # Get available types for location
POST   /api/locations                # Create (Admin only)
PUT    /api/locations/:id            # Update (Admin only)
DELETE /api/locations/:id            # Delete (Admin only)
```

### Slot Configuration Endpoints (Admin)

```
GET    /api/slots/configurations     # Get all configurations
GET    /api/slots/configurations/:locationId/:appointmentTypeId
POST   /api/slots/configurations     # Create configuration
PUT    /api/slots/configurations/:id # Update configuration
DELETE /api/slots/configurations/:id # Delete configuration
```

### Availability & Booking Endpoints

```
GET    /api/slots/available          # Get available slots
                                     # Query: locationId, appointmentTypeId, startDate, endDate
POST   /api/slots/check-availability # Check specific slot availability
                                     # Body: { locationId, appointmentTypeId, date, time }
POST   /api/bookings                 # Create booking (requires JWT)
GET    /api/bookings                 # Get user's bookings (requires JWT)
GET    /api/bookings/:id             # Get specific booking (requires JWT)
PUT    /api/bookings/:id/cancel      # Cancel booking (requires JWT)
DELETE /api/bookings/:id             # Delete (Admin only)
```

### Waitlist Endpoints

```
POST   /api/waitlist                 # Join waitlist (requires JWT)
GET    /api/waitlist                 # Get user's waitlist entries (requires JWT)
PUT    /api/waitlist/:id             # Update waitlist entry (requires JWT)
DELETE /api/waitlist/:id             # Remove from waitlist (requires JWT)
GET    /api/waitlist/position/:id    # Get position in queue (requires JWT)
```

### Special Dates & Blocked Slots (Admin)

```
POST   /api/admin/special-dates      # Add holiday/closure/modified hours
GET    /api/admin/special-dates      # Get all special dates
PUT    /api/admin/special-dates/:id  # Update special date
DELETE /api/admin/special-dates/:id  # Delete special date

POST   /api/admin/blocked-slots      # Block specific slot
GET    /api/admin/blocked-slots      # Get all blocked slots
DELETE /api/admin/blocked-slots/:id  # Unblock slot
```

### Admin Dashboard Endpoints

```
GET    /api/admin/bookings           # Get all bookings with filters
GET    /api/admin/statistics         # Get booking statistics
PUT    /api/admin/bookings/:id/status  # Update booking status
GET    /api/admin/users              # Get all users
PUT    /api/admin/users/:id/role     # Update user role
```

## Expected Backend Response Formats

### Success Response

```json
{
  "success": true,
  "data": {
    // response data
  },
  "message": "Operation successful"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "BOOKING_FAILED",
    "message": "This time slot is no longer available",
    "details": {}
  }
}
```

### Paginated Response

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

### JWT Token Response (Login/Signup)

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "USER"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## User Journey & Pages

### 1. Landing Page (Home.jsx)

```
Features:
- Hero section with clear call-to-action
- Brief explanation of the booking process
- List of available appointment types with icons
- Quick access to "Book Now" button
- Links to login/signup for existing users
- Contact information and office hours
```

### 2. Signup Page (Signup.jsx)

```
Form Fields (matching backend User model):
- Email* (unique, validated)
- Password* (min 8 characters, validated)
- Confirm Password*
- First Name*
- Last Name*
- Phone Number (optional, format validated)
- Date of Birth (optional, date picker)
- Driver's License Number (optional)

Validation:
- All * fields required
- Email format validation
- Password strength validation
- Phone number format validation
- Terms and conditions checkbox

On Success:
- Store JWT token in localStorage
- Redirect to booking page or dashboard
- Show success toast notification
```

### 3. Login Page (Login.jsx)

```
Form Fields:
- Email*
- Password*
- "Remember me" checkbox
- "Forgot password?" link

On Success:
- Store JWT token in localStorage
- Redirect to intended page (from state) or dashboard
- Show success toast notification
```

### 4. Forgot Password Page (ForgotPassword.jsx)

```
Form Fields:
- Email*

Process:
- Call POST /api/auth/forgot-password
- Show message: "If account exists, reset email sent"
- Email contains reset link with token
```

### 5. Reset Password Page (ResetPassword.jsx)

```
URL: /reset-password?token=xxx

Form Fields:
- New Password*
- Confirm New Password*

Process:
- Extract token from URL query params
- Call POST /api/auth/reset-password with token
- On success, redirect to login
```

### 6. Booking Flow (Multi-Step Wizard)

#### Step 1: Select Appointment Type

```javascript
// Component: AppointmentTypeSelector.jsx

Features:
- Fetch from GET /api/appointments
- Display appointment types in cards/grid
- Show: typeName, description, durationMinutes
- Filter active types (isActive: true)
- Store selection in booking context
- Navigate to Step 2

Display Format:
{
  "id": "uuid",
  "typeName": "Driver's License Renewal",
  "description": "Renew your existing driver's license",
  "durationMinutes": 20,
  "isActive": true
}
```

#### Step 2: Select Location

```javascript
// Component: LocationSelector.jsx

Features:
- Fetch from GET /api/locations/:id/appointment-types
- Filter locations that offer selected appointment type
- Display location cards with:
  - locationName
  - Full address (addressLine1, addressLine2, city, state, zipCode)
  - phoneNumber
  - email
- Optional: Google Maps integration
- Store selection in booking context
- Navigate to Step 3

Display Format:
{
  "id": "uuid",
  "locationName": "Downtown DMV",
  "addressLine1": "123 Main St",
  "city": "Springfield",
  "state": "IL",
  "zipCode": "62701",
  "phoneNumber": "(555) 123-4567"
}
```

#### Step 3: Select Date & Time

```javascript
// Component: DatePicker.jsx & TimeSlotSelector.jsx

Features:
- Fetch available slots from GET /api/slots/available
  Query params: { locationId, appointmentTypeId, startDate, endDate }

- Calendar view:
  - Gray out past dates
  - Gray out dates with no slots
  - Highlight dates with available slots
  - Show special dates (holidays, closures)

- Time slot selection:
  - Display slots for selected date
  - Show available capacity (e.g., "3 spots left")
  - Color coding:
    - Green: Many slots available
    - Yellow: Few slots left
    - Gray: Fully booked
  - Auto-refresh every 30 seconds

- If no slots available:
  - Show "No slots available" message
  - Offer "Join Waitlist" button

- Store date + time in booking context
- Navigate to Step 4

Available Slots Response:
[
  {
    "date": "2024-01-15",
    "time": "09:00:00",
    "availableCapacity": 3,
    "totalCapacity": 3
  },
  {
    "date": "2024-01-15",
    "time": "09:30:00",
    "availableCapacity": 1,
    "totalCapacity": 3
  }
]
```

#### Step 4: User Details

```javascript
// Component: UserDetailsForm.jsx

If User is Logged In:
- Display current user info (read-only or editable)
- Show: firstName, lastName, email, phoneNumber
- Optional notes field
- Navigate to Step 5

If User is NOT Logged In:
- Show login form with "Have an account?" section
- OR registration form:
  - Email*, Password*, First Name*, Last Name*
  - Phone Number, Date of Birth, Driver's License Number
- On signup: Store JWT token
- Navigate to Step 5

Notes Field:
- Optional text area
- Max 500 characters
- Placeholder: "Any special requirements or notes?"
```

#### Step 5: Review & Confirm

```javascript
// Component: BookingConfirmation.jsx

Display Summary:
- Appointment Type: [typeName]
- Location: [full address with map]
- Date & Time: [formatted date and time]
- User: [firstName lastName, email, phone]
- Notes: [if provided]

Actions:
- Edit buttons for each section (go back to step)
- Terms & Conditions checkbox
- "Confirm Booking" button

On Confirm:
- Call POST /api/bookings with:
  {
    "appointmentTypeId": "uuid",
    "locationId": "uuid",
    "appointmentDate": "2024-01-15",
    "appointmentTime": "09:00:00",
    "notes": "optional notes"
  }

- Handle errors (slot no longer available, already has booking)
- On success, navigate to Step 6
```

#### Step 6: Success Confirmation

```javascript
// Component: BookingSuccess.jsx

Display:
- Success icon/animation
- Booking reference number (bookingReference from response)
- Full booking details
- "Email confirmation sent" message
- Action buttons:
  - "Add to Calendar" (generate .ics file)
  - "Print Confirmation"
  - "View My Bookings"
  - "Book Another Appointment"

Booking Response:
{
  "id": "uuid",
  "bookingReference": "ABC123",
  "appointmentDate": "2024-01-15",
  "appointmentTime": "09:00:00",
  "status": "CONFIRMED",
  "appointmentType": { ... },
  "location": { ... },
  "user": { ... }
}
```

### 7. User Dashboard (MyBookings.jsx)

```javascript
Features:
- Fetch from GET /api/bookings
- Display active booking prominently (status: CONFIRMED)
  - Countdown timer to appointment
  - Booking reference number
  - Full details card
  - "Get Directions" button (Google Maps link)
  - "Cancel Booking" button

- Past bookings section:
  - Filter by status: COMPLETED, CANCELLED, NO_SHOW
  - Paginated list
  - Search by booking reference

- Empty state if no bookings:
  - "You don't have any appointments yet"
  - "Book Now" button

Booking Card Display:
- Appointment type icon/name
- Date and time (prominently)
- Location name and address
- Status badge (colored)
- Actions menu

Cancel Booking:
- Show confirmation dialog
- Reason text area (optional)
- Call PUT /api/bookings/:id/cancel
- Show success message
- Refresh bookings list
```

### 8. Waitlist Page (MyWaitlist.jsx)

```javascript
Features:
- Fetch from GET /api/waitlist
- Display active waitlist entries (status: WAITING, NOTIFIED)
- Show:
  - Appointment type
  - Location
  - Preferred date range (if set)
  - Queue position (if available)
  - Join date
  - Status badge

- Actions:
  - "Remove from Waitlist" button
  - "Update Preferences" button

- Empty state:
  - "You're not on any waitlists"
  - "Browse Appointments" button

Waitlist Entry Display:
{
  "id": "uuid",
  "appointmentType": { ... },
  "location": { ... },
  "preferredDateStart": "2024-01-15",
  "preferredDateEnd": "2024-01-30",
  "status": "WAITING",
  "position": 5,
  "joinedAt": "2024-01-01T10:00:00Z"
}
```

### 9. Profile Page (Profile.jsx)

```javascript
Features:
- Display current user information
- Editable form with:
  - First Name
  - Last Name
  - Email (read-only or with verification)
  - Phone Number
  - Date of Birth
  - Driver's License Number

- "Update Profile" button
  - Call PUT /api/auth/profile
  - Show success message

- "Change Password" section:
  - Current Password
  - New Password
  - Confirm New Password
  - Call POST /api/auth/change-password

- Account information:
  - Member since date (createdAt)
  - Account status
```

### 10. Admin Dashboard (AdminDashboard.jsx)

#### Main Dashboard

```javascript
Features:
- Statistics Cards (GET /api/admin/statistics):
  - Total Bookings Today
  - Total Bookings This Week
  - Total Bookings This Month
  - Active Waitlist Count
  - Upcoming Appointments
  - Cancellation Rate

- Recent Bookings Table:
  - Last 10-20 bookings
  - Quick actions (view, cancel, update status)

- Charts (optional):
  - Bookings over time (line chart)
  - Popular appointment types (bar chart)
  - Busiest locations (pie chart)
```

#### Bookings Management (Admin)

```javascript
// AdminBookingsList.jsx

Features:
- Fetch from GET /api/admin/bookings
- Advanced filters:
  - Status (CONFIRMED, CANCELLED, COMPLETED, NO_SHOW)
  - Location
  - Appointment Type
  - Date range
  - User search

- Table columns:
  - Booking Reference
  - User Name & Email
  - Appointment Type
  - Location
  - Date & Time
  - Status
  - Actions

- Actions:
  - View full details
  - Update status (PUT /api/admin/bookings/:id/status)
  - Cancel booking (PUT /api/bookings/:id/cancel)
  - Delete booking (DELETE /api/bookings/:id)

- Export to CSV
- Pagination (use backend pagination)
```

#### Appointment Types Manager (Admin)

```javascript
// AppointmentTypesManager.jsx

Features:
- List all appointment types (GET /api/appointments)
- Table/cards with:
  - Type Name
  - Description
  - Duration (minutes)
  - Active status
  - Actions (Edit, Delete, Toggle Active)

- "Add New Type" button:
  - Modal/page with form
  - Fields: typeName, description, durationMinutes, isActive
  - Call POST /api/appointments

- Edit functionality:
  - Pre-fill form with existing data
  - Call PUT /api/appointments/:id

- Delete functionality:
  - Confirmation dialog
  - Call DELETE /api/appointments/:id
```

#### Locations Manager (Admin)

```javascript
// LocationsManager.jsx

Features:
- List all locations (GET /api/locations)
- Display:
  - Location Name
  - Full Address
  - Contact Info
  - Active status
  - Available Appointment Types count
  - Actions

- "Add New Location" button:
  - Form with all location fields
  - Call POST /api/locations

- Edit location:
  - Call PUT /api/locations/:id

- View appointment types for location:
  - GET /api/locations/:id/appointment-types
  - Manage which types are available
```

#### Slot Configuration Manager (Admin)

```javascript
// SlotConfigurationManager.jsx

Features:
- Select Location and Appointment Type
- Fetch configuration: GET /api/slots/configurations/:locationId/:appointmentTypeId

- Configuration form:
  - Available Days: Checkboxes for Mon-Sun (maps to 0-6 array)
  - Start Time: Time picker (HH:MM:SS format)
  - End Time: Time picker
  - Slot Duration: Number input (minutes)
  - Slots Per Interval: Number input (capacity)
  - Buffer Time: Number input (minutes)
  - Advance Booking Days: Number input
  - Same Day Booking Cutoff: Number input (hours)
  - Min Advance Booking: Number input (hours)
  - Active: Toggle

- Save button:
  - If new: POST /api/slots/configurations
  - If existing: PUT /api/slots/configurations/:id

Configuration Model:
{
  "locationId": "uuid",
  "appointmentTypeId": "uuid",
  "availableDays": [1, 2, 3, 4, 5], // Mon-Fri
  "startTime": "09:00:00",
  "endTime": "17:00:00",
  "slotDurationMinutes": 30,
  "slotsPerInterval": 3,
  "bufferTimeMinutes": 5,
  "advanceBookingDays": 60,
  "sameDayBookingCutoffHours": 2,
  "minAdvanceBookingHours": 4,
  "isActive": true
}
```

#### Waitlist Manager (Admin)

```javascript
// WaitlistManager.jsx

Features:
- View all waitlist entries
- Filters:
  - Location
  - Appointment Type
  - Status (WAITING, NOTIFIED, BOOKED, EXPIRED, CANCELLED)

- Table showing:
  - User name and contact
  - Appointment type
  - Location
  - Preferred dates
  - Queue position
  - Join date
  - Status
  - Actions

- Actions:
  - Manually notify user
  - Remove from waitlist
  - View user details
```

## UI/UX Requirements

### Design Principles

- Clean, modern, and professional design
- Intuitive navigation with clear visual hierarchy
- Responsive across all devices (mobile-first approach)
- Accessible (WCAG 2.1 AA compliance)
- Fast loading with skeleton loaders
- Optimistic UI updates
- Clear error messages and validation feedback

### Color Scheme (Example)

```css
/* src/styles/variables.css */
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  --color-secondary: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-success: #22c55e;
  --color-info: #3b82f6;

  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-bg-tertiary: #f3f4f6;

  --color-text-primary: #1f2937;
  --color-text-secondary: #6b7280;
  --color-text-tertiary: #9ca3af;

  --color-border: #e5e7eb;
  --color-border-dark: #d1d5db;
}
```
