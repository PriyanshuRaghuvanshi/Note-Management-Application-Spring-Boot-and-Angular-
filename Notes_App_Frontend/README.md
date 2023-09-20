# NewFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Prerequisites

Before running the application, ensure you have the following prerequisites installed:

 

- **Node.js:** Required for running the frontend.

- **Angular CLI:** Required for managing Angular projects.

- **Java Development Kit (JDK):** Required for running the backend.

- **Spring Boot:** Required for building and running the backend.

- **MySQL:** Required for the database (make sure you have MySQL server installed and running).
## Authentication

 
- User authentication is implemented using JSON Web Tokens (JWT) for secure communication between the frontend and backend.

- Upon successful login, a JWT token is generated and stored in the frontend, allowing access to authenticated routes.

 

## Scheduled Deletion

 
- A scheduled job runs every hour to remove old notes from the database using a cron job.

- This ensures that the database remains clutter-free, and users only see relevant and recent notes.


## User Interface

 
- The user interface is designed to be user-friendly and responsive, providing an excellent experience across various devices and screen sizes.

- A clean and intuitive design makes note management a breeze.

 

## Technical Insights

 

- The application follows best practices for JWT-based authentication and separation of concerns with frontend and backend components.

- Secure and efficient database operations are performed using Spring Data JPA and MySQL.

 

## References

 

- [Angular Documentation](https://angular.io/docs)

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)

- [MySQL Documentation](https://dev.mysql.com/doc/)

- [JWT Authentication Tutorial](https://www.youtube.com/watch?v=q2l91Ffc_8U)

- [Cron Job Tutorial](https://www.youtube.com/watch?v=fuPHoIe4lAI)

 

**Note:** The backend and JWT for this application has been refactored from previous assignments to enhance its functionality and security.