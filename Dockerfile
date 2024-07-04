FROM node:14

#folder to work in
WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]




