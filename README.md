# API de productos - A1.4

Proyecto base para la práctica A1.4 de DAW. La aplicación ya está
desarrollada: su finalidad es servir de ejemplo para documentar
instalación, arquitectura, despliegue, operación y API.

## Ejecutar

``` bash
npm install
npm start
```

## Endpoints

-   `GET /api/productos`
-   `GET /api/productos/{id}`

## Pruebas

``` bash
curl http://localhost:3000/api/productos
curl http://localhost:3000/api/productos/1
curl http://localhost:3000/api/productos/99
```
