FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm ci && npm run build

FROM nginx

COPY --from=build /app/build /usr/share/nginx/html
