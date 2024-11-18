# Use the official Node.js image as the base
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "start"]
