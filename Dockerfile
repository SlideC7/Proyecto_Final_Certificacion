FROM node:latest AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
RUN npm install --save-dev @angular-devkit/build-angular
RUN npm audit fix --force
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/demos /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
