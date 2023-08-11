ARG API_PORT
FROM node:20.5.1
WORKDIR /usr/code
COPY package.json .
RUN npm install
COPY . .
EXPOSE ${API_PORT}
CMD ["npm", "run", "start"]