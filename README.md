# Containerizing-a-Web-Application

## Project: Task Manager Web Application

This project aims to develop a simple, user-friendly web application for managing personal projects and tasks. The application allows users to create, manage, and track their tasks efficiently. Additionally, the application will be containerized using Docker to ensure easy deployment and scalability across different environments.

# Instructions

## Running the Application Locally
Clone the repository to your local machine.
## git clone https://github.com/Deolinda1506/Containerizing-a-Web-Application.git
Open the index.html file in a web browser to access the application.
Building the Docker Image and Running a Container
Ensure Docker is installed on your system.
Navigate to the root directory of the project.

# Build the Docker image using the following command:
docker build -t task-manager-app .

# Once the image is built, you can run a container using the following command:
docker run -d -p 8080:80 task-manager-app

Access the application in your web browser at http://localhost:8080.

Assumptions and Decisions
For simplicity and ease of development, the application is developed using HTML, CSS, and JavaScript without the use of additional libraries or frameworks.
The Dockerfile specifies a lightweight base image to minimize image size and optimize performance.
Port 80 is exposed in the Dockerfile to allow external access to the application.
Repository Links
GitHub Repository
Docker Hub Repository

Evaluation Criteria
Functionality and usability of the web application.
Correctness and completeness of the Dockerfile.
Successful deployment of the Docker container and accessibility of the web application through Docker Hub.
Clarity and thoroughness of the documentation
