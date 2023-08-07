ARG API_PORT
FROM node:16.15.0
WORKDIR /usr/code
COPY package.json .
RUN npm install
COPY . .
EXPOSE ${API_PORT}
CMD ["npm", "run", "start"]