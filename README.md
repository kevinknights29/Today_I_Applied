# Today_I_Applied

This project is a spin-off of the `Today I Learn` web app from the course: `A quick, fun, and hands-on introduction to web development. Build a complete app with HTML, CSS, JavaScript, and React!`

![image](https://github.com/kevinknights29/Today_I_Applied/assets/74464814/667dccfe-fde9-4504-9cc5-0e2e81c5b79a)

## Topics

1. [Overview](#overview)
2. [Goals](#goals)
3. [Scope and Context](#scope-and-context)
4. [System Design](#system-design)
5. [Alternatives Considered](#alternatives-considered)
6. [Learning Logs](#learning-logs)
7. [Resources](#resources)

---

## Overview

`Today I Applied` is a web-based platform designed to streamline the job application process. By aggregating job listings from multiple sources and allowing users to rate, apply, and comment on these listings, the app aims to enhance transparency and reduce information asymmetry in the job market. The platform will leverage a user-friendly interface to simplify job searches and applications.

## Goals

- Consolidation of Job Listings:

    Aggregate job postings from various websites into a single platform.

- User Feedback System:

    Enable users to rate (positive or negative) and comment on job listings.

- Application Feature:

    Allow users to apply for jobs directly through the platform.

- Transparency Enhancement:

    Provide a more transparent job search experience by sharing user feedback and experiences.

- User Engagement:

    Encourage active user participation and community building.

## Scope and Context

The initial scope includes:

- Job Listing Aggregation:

    Integrating APIs from various job listing websites.

- User Account Management:

    Registration, login, and profile management.

- Rating and Comment System:

    Allowing users to leave feedback on job listings.

- Application Management:

    Users can apply for jobs and track their applications.

- Responsive Web Design:

    Ensuring accessibility across various devices.

Out of scope for the initial release:

- In-app Messaging:

    Direct communication between employers and applicants.

- Advanced Analytics:

    Detailed reports and analytics on job market trends.

## System Design

- Frontend:

    The application utilizes React for the front end to create a Single Page Application (SPA). This choice provides a responsive and interactive user interface, optimized for both desktop and mobile devices.

- Backend:

    Supabase is used for the backend. It offers a streamlined interface for handling database operations, authentication, and real-time data synchronization.

- Database:

    Supabase's built-in database functionality, which is similar to PostgreSQL, is used for storing user data, job listings, ratings, and comments. It offers robustness and flexibility in handling relational data.

- API Integration:

    Supabase’s RESTful API is used to manage interactions between the front end and the database, including fetching job listings, managing user profiles, and handling ratings and comments.

- Authentication:

    Supabase’s authentication system is employed for user authentication, providing a secure and easy-to-implement solution.

- Deployment:

    The application is deployed on Netlify, which offers efficient hosting and automatic deployment from version control repositories, ensuring seamless updates and scalability.

## Alternatives Considered

- Backend Frameworks (e.g., Express.js on Node.js):

    While these are powerful and flexible, Supabase was chosen for its integrated approach, offering both database management and an API layer, simplifying the backend architecture.

- Database (e.g., MongoDB, MySQL):

    Other databases like MongoDB or MySQL were considered. However, Supabase’s PostgreSQL-like database offers the advantages of a relational database with robust data integrity and complex query capabilities.

- Deployment Platforms (e.g., AWS, Vercel):

    AWS and Vercel were potential alternatives for deployment. Netlify was selected for its ease of integration with the frontend development workflow and its efficient handling of SPAs.

- Authentication Solutions (e.g., OAuth, Firebase Auth):

    While standalone authentication solutions like OAuth or Firebase Auth provide extensive features, using Supabase’s built-in authentication simplifies the system architecture by reducing the need for additional integrations.

## Learning Logs

| Date | Learning |
|------|----------|
|      |          |

## Resources
