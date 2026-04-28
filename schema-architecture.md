# Architecture Design for the Smartcare Clinic Managemnent System
## Architecture Summary
This Spring Boot application uses both MVC and REST controllers. Thymeleaf templates are used for the Admin and Doctor dashboards, while REST APIs serve all other modules. The application interacts with two DBs: MySQL for patient, doctor, appointment and admin data and MongoDB for prescriptions. All controllers route requests through a common service layer, which in turn delegates to the appropriate repositories. MySQL uses JPA entities while MongoDB uses document models.

## Numbered flow of Data and Control
1. User accesses AdminDashboard or Appointment pages.
2. The action is routed to the appropriate Thymeleaf or REST controller.
3. The controller calls the service layer...
