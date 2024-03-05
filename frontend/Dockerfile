# pull official base image
FROM oven/bun:latest

# set working directory
WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json bun.lockb* ./


RUN bun install -g serve

# Installs all node packages
RUN bun install

# Copies everything over to Docker environment
COPY . .

RUN bun run build



# Uses port which is used by the actual application
EXPOSE 3000

# Run application
#CMD [ "npm", "start" ]
CMD ["bunx", "serve", "-s", "build", "-l", "3000"]