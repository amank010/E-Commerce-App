# E-Commerce-App

An e-commerce web application built with React.js frontend and Node.js backend, featuring user authentication, product catalog, cart, order placement, payment integration, and admin management.

---

## Features

- User registration and login with JWT authentication
- Product listing with categories and details
- Shopping cart with quantity management
- Place orders with delivery information
- Payment methods: Cash on Delivery (COD), Stripe, Razorpay
- **Admin Panel:**
  - Manage products (add, update, delete)
  - View and manage customer orders
  - Access restricted to admin users only
- Responsive design using Tailwind CSS
- API integration with backend for data persistence

---

## Tech Stack

- Frontend: React.js, Tailwind CSS, React Router, Axios, React Toastify
- Backend: Node.js, Express.js, MongoDB (Mongoose), JWT authentication, bcrypt
- Payment: Stripe, Razorpay
- Deployment: Vercel (Frontend: https://e-commerce-frontend-two-beta.vercel.app),
                     [Backend : https://e-commerce-backend-kappa-navy.vercel.app],
                     [Admin: https://e-commerce-app-admin-seven.vercel.app]

---

## Getting Started

### Prerequisites

- Node.js installed (v14+ recommended)
- npm or yarn package manager
- MongoDB instance (local or cloud e.g. MongoDB Atlas)
- API keys for Stripe and Razorpay (if using payment gateways)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amank010/E-Commerce-App.git
   cd E-Commerce-App