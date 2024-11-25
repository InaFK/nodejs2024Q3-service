# Use the official Node.js image as the base
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .
RUN npx prisma generate

FROM node:alpine AS main

WORKDIR /app

COPY --from=build /app /app

# Expose the application port
EXPOSE ${PORT}

# Command to start the application
CMD ["npm", "start"]
