# API de productos

API REST sencilla que devuelve información de productos almacenados en memoria.
Se ha desarrollado como ejemplo para aprender a documentar el despliegue de una aplicación web.

## Tecnología

- **Node.js**: entorno de ejecución de JavaScript.
- **Express**: framework para definir las rutas de la API.
- **Datos**: tres productos guardados en memoria (no hay base de datos, así que los datos son fijos y se reinician al arrancar).

## Endpoints

| Método | Ruta                  | Descripción                                                   |
|--------|-----------------------|---------------------------------------------------------------|
| GET    | /api/productos      | Devuelve la lista de todos los productos                      |
| GET    | /api/productos/{id} | Devuelve un producto por su id. Si no existe, responde con 404 |

## Ejemplo de respuesta

GET /api/productos/1:

```json
{ "id": 1, "nombre": "Teclado", "precio": 29.95 }
```

GET /api/productos/99 (código HTTP 404):

```json
{ "error": "Producto no encontrado" }
```