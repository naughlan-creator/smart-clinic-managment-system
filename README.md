# Smart Clinic Management System

The system uses both Spring MVC with Thymeleaf for admin and doctor dashboards and REST APIs for other modules.
It also interacts with two databases [MySQL and MongoDB] through service and repository layers.

## The 3-tier web application design for the App:
1. *Presentation Tier* - The user interface, consisting of Thymeleaf templates and REST API consumers
2. *Application Tier* - The spring boot backend that contains the controllers, services and business logic.
3. *Data Tier* - The databases: MySQL for structured data and MongoDB for flexible, document-based data.

## Why Spring Boot and this tech stack
I chose SpringBoot as the foundaion for this application because it simplifies backend development while enforcing best practices. It supports:
    - Spring MVC for server-rendered admin and doctor dashboards
    - REST APIs for modular and scalable client-server communication
    - Spring Data JPA for interacting with a MySQL database
    - Spring Data MongoDB for storing flexible prescription records

## REST APIs for scalable integration
For modules [appointments, patient dashboards, patient records...], we expose RESTful APIs instead of using server-side views. REST allows external clients such as mobile apps or future web apps to communicate with the backend via lightweight HTTP and JSON. This makes th system more extensible and interoperable, supporting real-time client applications, third party integrations and cross platform access.

## Deployability and CI/CD compatibility
Spring Boot applications are easily containerized using Docker, making them ideal for deployment in cloud-native environments like Kubernetes or virtual machines. They start quickly, run reliably acrosss systems and scale horizontally as needed.
The system also integrates well with modern CI/CD pipelines [GitHub Actions, Jenkins, GitLab CI], enabling automated builds, tests and deployments. This improves release speed, reduces manual errors and supports continuous delivery of new features and fixes in production.
