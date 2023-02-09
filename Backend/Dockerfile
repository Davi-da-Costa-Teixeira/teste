FROM node:16.13.0

WORKDIR /Back-end

COPY package*json .env ./

RUN npm install

COPY . .

CMD npm run dev 

EXPOSE 2222
