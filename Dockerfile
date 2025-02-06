# Use official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Copy the entire app
COPY . .

# Expose port (same as the one used in your Express app)
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
