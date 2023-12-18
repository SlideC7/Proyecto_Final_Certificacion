# Etapa de construcción
FROM node:16 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de definición de paquetes y los instala
COPY package.json package-lock.json ./
RUN npm install --force

# Copia el proyecto Angular al directorio de trabajo
COPY . .

# Construye la aplicación Angular
# Ajusta la ruta si tu comando de construcción es diferente
RUN npm run build

# Etapa del servidor Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos desde la etapa de construcción a la carpeta de Nginx
# Ajusta la ruta de origen según dónde se encuentre tu carpeta de distribución después de la construcción
COPY --from=build /app/dist/demos /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]



