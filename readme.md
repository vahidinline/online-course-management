# LearnHub - Online Learning Platform

LearnHub is a modern online learning platform built with Next.js 13, featuring a robust course management system, interactive learning experiences, and comprehensive progress tracking.

## Features

### Authentication

- Secure email-based authentication
- Google OAuth integration
- Protected routes and content

### Course Management

- Structured course organization
- Category-based course browsing
- Interactive video content
- Downloadable resources
- Progress tracking

### Learning Experience

- Interactive video player
- In-course assessments
- Progress tracking
- Course completion certificates
- Bookmarking and notes

### User Dashboard

- Course progress overview
- Completed courses tracking
- Exam results and analytics
- Personal learning path

## Tech Stack

- **Frontend**: Next.js 13 (App Router)
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- MongoDB instance
- Google OAuth credentials (for Google sign-in)
- SMTP server access (for email authentication)

### Environment Setup

1. Clone the repository
2. Create a `.env.local` file with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=your_email_user
EMAIL_SERVER_PASSWORD=your_email_password
EMAIL_FROM=noreply@example.com
```

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/                    # Next.js 13 app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   └── courses/          # Course-related pages
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── layout/           # Layout components
├── lib/                   # Utility functions and configurations
│   ├── auth.ts           # Authentication configuration
│   └── db/               # Database models and connections
└── store/                # Zustand store configurations
```

## Features in Detail

### Authentication System

- Email-based authentication with magic links
- Google OAuth integration
- Session management
- Protected routes

### Course Management

- Hierarchical course structure
- Multiple content types support
- Progress tracking
- Assessment system

### User Dashboard

- Course progress visualization
- Achievement tracking
- Learning analytics
- Personal notes management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment solutions
- MongoDB for database solutions
- shadcn/ui for beautiful UI components
