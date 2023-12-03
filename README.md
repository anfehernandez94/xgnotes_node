# XGNOTES (Backend)

Aplicación web desarrollada en [React(Frontend)](https://github.com/anfehernandez94/xgnotes_node) y NodeJS(Backend), que permite al usuario agregar notas como presentación de prueba técnica: Desarrollador Full Stack - Startup de Medios Digitales. 
La aplicación permite a los usuarios agregar notas con los siguientes campos:

- Título [Campo de texto]
- Descripción [Textarea]
- fecha de creación [input Date]
- Estado [pendiente, completada]

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/anfehernandez94/xgnotes_node.git

2. Instala las dependencias
   ```bash
   cd xgnotes_node
   npm install

3. Asegúrate de tener una base de datos MySQL configurada. Crea la siguiente tabla:
   
   ```bash
   CREATE TABLE notes (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     description TEXT,
     creationDate DATE,
     updateDate DATE,
     status ENUM('pendiente', 'completada') DEFAULT 'pendiente'
   );

4. Crea y configura el archivo de variables de entorno(.env) con el puerto y la configuración de la base de datos:

   ```bash
   PORT=5000
   DB_HOST=localhost
   DB_USER=nombre_usuario
   DB_PASSWORD=contrasena
   DB_DATABASE=nombre_base_de_datos

5. Inicia la aplicación

   ```bash
   npm start

## Endpoints API

* POST - /notes
  - Recibe y crea las nuevas notas en la base de datos
* GET - /notes
  - Obtiene todas las notas de la base de datos
- GET - /notes/:id
  - Obtiene una nota en específico según su `id`
- DELETE- /notes/:id
  - Elimina una nota en específico según su `id`
- PUT - /notes/:id
  - Recibe una nota y la actualiza según su `id`

### Test

Para correr los test creados utiliza el siguiente comando:
   ```bash
   npm test