FROM node:18

WORKDIR /app

COPY Package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
