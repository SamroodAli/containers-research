FROM node:18-alpine

USER node:node

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["node","index.js"]