# Etapa de construcción
FROM node:latest AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
RUN npm audit fix --force

# Asegúrate de copiar los archivos necesarios al directorio de trabajo
# Aquí, cambia el contexto de copia al subdirectorio donde se encuentra tu aplicación Angular
COPY projects/demos/ ./demos/
WORKDIR /app/demos

# Construye la aplicación Angular
RUN npm run build

# Etapa del servidor Nginx para servir la aplicación
FROM nginx:alpine
# Ajusta la ruta de donde copiar los archivos construidos
COPY --from=build /app/demos/dist/demos /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
