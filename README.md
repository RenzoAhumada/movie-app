#Movie-App
Este proyecto es una aplicación web que permite buscar películas, ver detalles y gestionar una lista de películas favoritas. La aplicación está dividida en un frontend y un backend, desarrollados por separado y luego integrados.

###Requisitos Previos
Node.js instalado
Acceso a la terminal o línea de comandos
Instrucciones de Instalación
Clonar el Repositorio
Clona este repositorio en tu máquina local o descarga los archivos comprimidos.

bash
Copiar código
git clone [<URL_DEL_REPOSITORIO>](https://github.com/RenzoAhumada/movie-app.git)
Instalar Dependencias
Navega a la carpeta raíz del proyecto movie-app y ejecuta el siguiente comando para instalar las dependencias del frontend:

bash
Copiar código
npm install
Luego, navega a la carpeta del backend movie-backend y ejecuta el siguiente comando para instalar las dependencias del backend:

<bash
Copiar código
cd movie-backend>
npm install
Inicialización de la Aplicación
Iniciar el Frontend
Abre la terminal en la carpeta raíz del proyecto movie-app y ejecuta el siguiente comando para iniciar el frontend:

bash
Copiar código
npm run dev
Esto iniciará el servidor de desarrollo para el frontend en el puerto 5173.

##Iniciar el Backend
En otra terminal, navega a la carpeta del backend movie-backend y ejecuta el siguiente comando para iniciar el backend:

bash
Copiar código
node index.js
Esto iniciará el servidor backend en el puerto 5000, que manejará las llamadas a la API de TMDB.

##Uso de la Aplicación
Asegúrate de que ambos servidores (frontend y backend) estén corriendo simultáneamente. Si uno de ellos no está en funcionamiento, la aplicación no podrá comunicarse correctamente con la base de datos ni con la API de TMDB, lo que afectará su funcionalidad.

Una vez que ambos servidores estén activos, abre tu navegador web y accede a la aplicación a través de http://localhost:5173.

###Consideraciones Adicionales
MongoDB: Asegúrate de que tu conexión a MongoDB esté correctamente configurada en el archivo .env dentro de la carpeta movie-backend.
Configuraciones de API: La API de TMDB debe estar configurada en el archivo .env con la clave TMDB_API_KEY.
<sub>Proyecto realizado por Renzo Ahumada. Tecnologías utilizadas: React + Vite, Node.js, MongoDB.</sub>
