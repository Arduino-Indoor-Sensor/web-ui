FROM node:14.15.4 as base
WORKDIR /backend
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "vue-cli-service build", "build"]


