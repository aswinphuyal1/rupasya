# Rupasya E-commerce Platform

Rupasya is a full-stack e-commerce application built for a beauty brand. It features a complete customer-facing storefront, a separate admin panel for managing the store, and a robust backend API.

## Features

### 🛍️ Customer Store (`rupasya/`)

- **User Authentication**: Secure sign-up and login functionality for users.
- **Product Browsing**: View latest collections, bestsellers, and all products.
- **Search & Filter**: Easily search for products and filter them by category and sub-category.
- **Sorting**: Sort products by price (low-to-high, high-to-low).
- **Product Details**: View detailed information for each product, including multiple images, description, and available sizes.
- **Shopping Cart**: Add products to the cart, update quantities, and remove items.
- **Checkout Process**: Simple and intuitive checkout process with Cash on Delivery option.
- **Order History**: Users can view their past orders and track their status.
- **Responsive Design**: A mobile-first design that works seamlessly across all devices.
- **AI Chat**: A floating AI chat widget for customer support.

### ⚙️ Admin Panel (`admin/`)

- **Secure Login**: Separate, secure login for administrators.
- **Product Management**:
  - Add new products with details like name, description, price, category, sizes, and multiple images.
  - View a list of all products in the store.
  - Remove products from the store.
- **Order Management**:
  - View all customer orders with detailed information.
  - Update the status of each order (e.g., "Packing", "Shipped", "Delivered").

### 🚀 Backend (`backend/`)

- **RESTful API**: A powerful API built with Node.js and Express.js.
- **Database**: Uses MongoDB with Mongoose for data modeling and persistence.
- **Authentication**: JWT-based authentication for protecting user and admin routes.
- **Image Handling**: Multer and Cloudinary for handling image uploads.
- **MVC Architecture**: Organized code following the Model-View-Controller pattern.


## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Deployment**: Configured for Vercel

## Project Structure

The workspace is organized into three main directories:

```
.
├── admin/         # React frontend for the Admin Panel
├── backend/       # Node.js/Express.js backend server
└── rupasya/       # React frontend for the Customer Store
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB account
- Cloudinary account

### Installation & Setup

1.  **Clone the repository**

2.  **Backend Setup**

    ```bash
    # Navigate to the backend directory
    cd backend

    # Install dependencies
    npm install

    # Create a .env file and add the following variables:
    # MONGODB_url=<your_mongodb_connection_string>
    # JWT_SECRET=<your_jwt_secret>
    # ADMIN_EMAIL=<your_admin_email>
    # ADMIN_PASSWORD=<your_admin_password>
    # CLOUDINARY_NAME=<your_cloudinary_name>
    # CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    # CLOUDINARY_SECRET_KEY=<your_cloudinary_secret_key>

    # Start the server
    npm start
    ```

3.  **Frontend (Rupasya Store) Setup**

    ```bash
    # Navigate to the rupasya directory
    cd rupasya

    # Install dependencies
    npm install

    # Create a .env file and add the backend URL:
    # VITE_BACKEND_URL=http://localhost:4000

    # Start the development server
    npm run dev
    ```

4.  **Admin Panel Setup**

    ```bash
    # Navigate to the admin directory
    cd admin

    # Install dependencies
    npm install

    # Create a .env file and add the backend URL:
    # VITE_BACKEND_URL=http://localhost:4000

    # Start the development server
    npm run dev
    ```

After following these steps, the customer store will be running on `http://localhost:5173` and the admin panel on `http://localhost:5174`.
