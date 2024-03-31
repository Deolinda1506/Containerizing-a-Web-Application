
## Containerizing a Web Application

# Introduction
The Task Manager Web Application project aims to create a simple and user-friendly web application for managing personal projects and tasks. Users can efficiently create, manage, and track their tasks using this application. Additionally, the project will be containerized using Docker to ensure easy deployment and scalability across different environments.

# Technologies
HTML
CSS
JavaScript
Docker

Getting Started
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/Deolinda1506/Containerizing-a-Web-Application.git
Navigate to the project repository:
cd Containerizing-a-Web-Application
Install dependencies:
npm install

Running the Application
To run the application locally, use the following command:
npm start

Docker
Building the Docker Image
To build the Docker image for the application, use the following command:

sudo docker build -t deolinda1506/containerizing-a-web-application:latest .

Running the Docker Container
Once the Docker image is built, you can run a Docker container using the following command:

sudo docker run -d -p 8080:80 deolinda1506/containerizing-a-web-application:latest

Pushing the Docker Container
Once logged in, you can push the tagged Docker image to Docker Hub using the docker push command:

sudo docker push deolinda1506/containerizing-a-web-application:latest

Assumptions and Decisions
For simplicity and ease of development, the application is developed using HTML, CSS, and JavaScript without the use of additional libraries or frameworks.
The Dockerfile specifies a lightweight base image to minimize image size and optimize performance.
Port 80 is exposed in the Dockerfile to allow external access to the application.
Evaluation Criteria
Functionality and usability of the web application.
Correctness and completeness of the Dockerfile.
Successful deployment of the Docker container and accessibility of the web application through Docker Hub.
Clarity and thoroughness of the documentation.
