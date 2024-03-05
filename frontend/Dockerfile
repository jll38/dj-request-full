# pull official base image
FROM node:18-alpine

# set working directory
WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json bun.lockb* tsconfig.json* ./


RUN npm install -g serve

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

RUN npm run build --verbose

# Uses port which is used by the actual application
EXPOSE 3000

# Run application
#CMD [ "npm", "start" ]
CMD ["npx", "serve", "-s", "build", "-l", "3000"]