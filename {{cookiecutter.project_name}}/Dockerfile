FROM node:current-alpine as build

WORKDIR /app
#COPY package.json /app
#COPY yarn.lock /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
