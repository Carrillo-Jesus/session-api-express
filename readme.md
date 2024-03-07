# Session api express

API with Express intended to serve as a basis for starting mern projects.

## Requisitos previos

Complete application of user sessions with jwt token, migrations, seeders. Made with node express and more tools. Contains authentication and data validation middlewares

- Node.js 20.10.0
- npm (Administrador de paquetes de Node.js)
- Base de datos (Mysql, Postgres, etc.)
- Después de instalarla crea una base de datos

## Instalación

1. Clona este repositorio:

   ```bash
    git clone https://github.com/Carrillo-Jesus/session-api-express
    ```
2. Navega a la raiz del proyecto clonado

    ```bash
    cd session-api-express
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Uso

- Configura tu archivo .env: puedes copiar el .env.example y renombrarlo a.env, recuerda poner el nombre de la base de datos que creaste anteriormente. 

- Corre las migraciones con el siguiente comando:

    ```bash
    npx sequelize-cli db:migrate --config config.js --env development 
    ```

- Corre los seeders con el siguiente comando:

     ```bash
    npx sequelize-cli db:seed:all --config config.js --env development
    ```

## Iniciar el poryecto

- Ejecuta el comando para iniciar y escuchar cambios:

    ```bash
    npm run dev
    ```
- Ejecuta el comando para iniciar el proyecto
    ```bash
    npm run start
    ```
### Tu aplicación debe estar corriendo en el puerto 4000, entra al siguiente enlace: [ http://localhost:4000/api/blogs]( http://localhost:4000/api/blogs)
