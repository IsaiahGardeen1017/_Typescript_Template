#https://www.youtube.com/watch?v=4q3br8jRSz4

ARG NODE_VERSION=20.15.0

FROM node:${NODE_VERSION}-alpine as development
WORKDIR /usr/src/app
ENV PORT=100

COPY package*.json .
RUN npm install
COPY . .

RUN npm run build




FROM node:${NODE_VERSION}-alpine as production

ENV PORT=100
EXPOSE 100

COPY package*.json .
RUN npm install --only=prod

COPY --from=development /usr/src/app/bld ./bld
COPY --from=development /usr/src/app/web ./web

CMD ["node", "bld/index.js"]
