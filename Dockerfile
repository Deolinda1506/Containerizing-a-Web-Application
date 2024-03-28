# Use a lightweight web server image as the base
FROM nginx:alpine

# Copy the application content into the nginx web server's working directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow access to the web server
EXPOSE 80

# Command to start the nginx web server
CMD ["nginx", "-g", "daemon off;"]

