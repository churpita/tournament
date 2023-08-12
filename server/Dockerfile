ARG API_PORT
FROM node:20.5.1
WORKDIR /usr/code
COPY package.json .
RUN npm install
RUN npm install typescript -g
COPY . .
RUN tsc
EXPOSE ${API_PORT}
CMD ["npm", "run", "start"]