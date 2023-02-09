
FROM node:16.13.0

WORKDIR /front-end

COPY package*.json ./

RUN npm install 
RUN npm install yarn

COPY . .

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["yarn", "dev"]