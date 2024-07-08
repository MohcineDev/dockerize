FROM node:14

#folder to work in
WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

# for the user to whic port we are running our app on
EXPOSE 4000

CMD [ "npm", "start" ]




