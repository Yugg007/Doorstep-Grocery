# Doorstep Grocery Web Application

Welcome to the Doorstep Grocery project! This web application allows users to browse and order groceries online with a convenient doorstep delivery service. The application is built using React for the frontend, Spring Boot for the backend, and MySQL for the database.

## Project Structure

The project is divided into three main components:

1. **Frontend (React):**
   - The `client` directory contains all the React components and pages.
   - You can find the main React entry point in `client/src/index.js`.

2. **Backend (Spring Boot):**
   - The `server` directory contains the Spring Boot application.
   - The main application class is `server/src/main/java/com.doorstepgrocery.DoorstepGroceryApplication`.

3. **Database (MySQL):**
   - The MySQL database stores user information, product details, orders, and more.
   - Database configuration is in the `application.properties` file in the `server/src/main/resources` directory.

## Getting Started

Follow the steps below to set up the project on your local machine:

### Frontend Setup:

1. Navigate to the `client` directory.
   ```bash
   cd frontend
   npm install
   npm start


1. Navigate to the `server` directory.
   ```bash
   cd server
   mvn install
   mvn spring-boot:run

