# Note-Management-Application-Spring-Boot-and-Angular-

## Introduction

This document provides an overview of the Notes Application, which is designed to allow users to save and manage their notes. The application is built using Java 8, Spring Boot, JPA, and Angular.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Backend Implementation](#backend-implementation)
- [Frontend Implementation](#frontend-implementation)
- [Authentication](#authentication)
- [Validations](#validations)
- [Scheduled Deletion](#scheduled-deletion)
- [Usage](#usage)
- [References](#references)


## Features

The Notes Application offers the following features:

1. User Authentication: Users can log in using their credentials.

2. Create Notes: Users can create notes, which are limited to 500 characters and can contain special characters [@ , ' . ; & * + -].

3. View Recent Notes: Upon successful login, users can view their 10 most recent notes.

4. Delete Notes: Users can delete individual notes as needed.

5. Scheduled Deletion: The system automatically deletes all notes except the 10 most recent ones on an hourly basis.

6. Basic CRUD Operations: Frontend UI allows for basic Create, Read, Update, and Delete (CRUD) functionality for notes.

## Technologies Used

The following technologies were used to build the Notes Application:

- Java 8
- Spring Boot
- Spring Data JPA
- Angular

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- Java Development Kit (JDK) 8 or higher installed.
- Maven for building and managing the backend.
- Node.js and npm for building and running the frontend.
- A relational database (e.g., MySQL) and its connection details.
- Authentication logic from a previous assignment integrated into the application.

## Getting Started

Follow these steps to get the Notes Application up and running:

1. Clone the repository to your local machine.
2. Set up the backend:
   - Navigate to the `backend` directory.
   - Configure your database connection in `application.properties` or `application.yml`.
   - Run `mvn spring-boot:run` to start the Spring Boot backend.

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Run `npm install` to install frontend dependencies.
   - Run `npm serve` to start the Angular development server.

4. Access the application in your web browser at `http://localhost:4200`.

## Project Structure

The project is structured as follows:
- `backend`: Contains the Spring Boot backend code.
- `frontend`: Contains the Angular frontend code.

## Backend Implementation

The backend is implemented using Spring Boot and Spring Data JPA. It includes RESTful API endpoints for creating, retrieving, updating, and deleting notes. Scheduled tasks are used for hourly note deletion.

## Frontend Implementation

The frontend is built using Angular and provides a user interface for interacting with the backend. It includes pages for login, creating and managing notes, and viewing recent notes.

## Authentication

Authentication logic is assumed to be integrated into the application based on a previous assignment. Users are required to log in before they can access the note management features.
- User authentication is implemented using JSON Web Tokens (JWT) for secure communication between the frontend and backend.
- Upon successful login, a JWT token is generated and stored in the frontend, allowing access to authenticated routes.

## Validations

The backend enforces the following validations for notes:

1. Special characters [@, ; & * + -] are allowed.
2. Notes cannot exceed 500 characters in length.

## Scheduled Deletion

The system automatically deletes all notes other than the 10 most recent ones on an hourly basis. This functionality is implemented using Spring's scheduled tasks.

## Usage

1. Start the application as described in the "Getting Started" section.

2. Log in with your credentials to access the notes management features.

3. Create, view, update, and delete notes as needed.

4. The system will automatically clean up old notes on an hourly basis.


## References

- [Angular Documentation](https://angular.io/docs)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [JWT Authentication Tutorial](https://www.youtube.com/watch?v=q2l91Ffc_8U)
- [Cron Job Tutorial](https://www.youtube.com/watch?v=fuPHoIe4lAI)

