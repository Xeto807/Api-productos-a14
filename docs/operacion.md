# Operación y resolución de problemas

## Iniciar la API

Desde la carpeta del proyecto:

```bash
npm start
```

La consola muestra API disponible en http://localhost:3000. Mientras la terminal siga abierta, la API está en marcha.

## Detener la API

En la terminal donde se ejecuta, pulsa Ctrl + C.

## Comprobar que responde

```bash
curl http://localhost:3000/api/productos
```

Si devuelve la lista de productos en JSON, la API funciona. Si aparece Failed to connect o Connection refused, la API no está en marcha.

## Identificar errores en la consola

Los errores aparecen en la misma terminal donde se lanzó npm start. Los más habituales:

| Mensaje en consola                 | Significado                                       |
|------------------------------------|---------------------------------------------------|
| Cannot find module 'express'     | No se han instalado las dependencias              |
| Error: listen EADDRINUSE ... 3000| El puerto 3000 ya está siendo usado por otro proceso |

## Incidencias habituales

| Problema            | Comprobación                | Posible solución          |
|---------------------|-----------------------------|---------------------------|
| npm no existe     | npm --version             | Instalar Node.js/npm      |
| Faltan dependencias | Revisar error al iniciar (Cannot find module 'express') | Ejecutar npm install |
| Puerto 3000 ocupado | Revisar procesos/puertos (EADDRINUSE) | Liberar el puerto |

### Liberar el puerto 3000

Para ver qué proceso lo usa:

```bash
# Linux / macOS
lsof -i :3000

# Windows (PowerShell o CMD)
netstat -ano | findstr :3000
```

Después, cierra ese proceso (con kill <PID> en Linux/macOS o taskkill /PID <PID> /F en Windows) y vuelve a ejecutar npm start.
