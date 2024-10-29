# Stage 1: Build the application
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies with --legacy-peer-deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application (jika diperlukan)
RUN npm run build

# Stage 2: Run the application
FROM node:18 AS production

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app ./

# Expose the port your application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
