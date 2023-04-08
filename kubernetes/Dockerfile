FROM node:18-alpine

RUN npm i -g nodemon

USER node:node

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["nodemon","index.js"]