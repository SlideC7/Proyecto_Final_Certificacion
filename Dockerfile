# Stage 1: Build Angular application
FROM node:latest AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force && \
    npm audit fix --force && \
    npm cache clean --force
COPY . ./
RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/demos /usr/share/nginx/html
EXPOSE 80
# You can add custom Nginx configuration here if needed
CMD ["nginx", "-g", "daemon off;"]
