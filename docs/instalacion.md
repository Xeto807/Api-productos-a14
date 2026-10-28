# Instalación

## 1. Software necesario

- [Node.js](https://nodejs.org) (versión LTS), que incluye npm
- [Git](https://git-scm.com)
- curl o un navegador web para probar la API

Comprueba que están instalados:

```bash
node --version
npm --version
git --version
```

## 2. Obtener el proyecto

```bash
git clone https://github.com/Xeto807/api-productos-a14.git
cd api-productos-a14
```

## 3. Instalar las dependencias

```bash
npm install
```

Se crea la carpeta node_modules/ con las librerías necesarias (Express).

## 4. Iniciar la aplicación

```bash
npm start
```

Si todo va bien, la consola muestra:

```
API disponible en http://localhost:3000
```

La API queda escuchando en el puerto **3000**. Para detenerla, pulsa Ctrl + C en la terminal.

## 5. Comprobar que funciona

Con la API en marcha, abre **otra terminal** y ejecuta:

```bash
curl http://localhost:3000/api/productos
curl http://localhost:3000/api/productos/1
curl http://localhost:3000/api/productos/99
```

Resultado esperado:

| Petición                | Respuesta                                                         |
|-------------------------|-------------------------------------------------------------------|
| /api/productos        | Lista JSON con Teclado, Ratón y Monitor                           |
| /api/productos/1      | {"id":1,"nombre":"Teclado","precio":29.95}                      |
| /api/productos/99     | {"error":"Producto no encontrado"} (código HTTP 404)            |

También puedes abrir http://localhost:3000/api/productos en el navegador.

archivo para instalar