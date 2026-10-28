# despliegue

Pasos para pasar del código fuente a tener la API funcionando.

## Requisitos previos

- Node.js (LTS) y npm instalados. Comprobación: node --version y npm --version.
- Git instalado.
- El puerto **3000** libre.

## Pasos

1. **Obtener el código fuente**

    ```bash
    git clone https://github.com/Xeto807/api-productos-a14.git
    cd api-productos-a14
    ```

2. **Instalar las dependencias**

    ```bash
    npm install
    ```

3. **Iniciar la aplicación**

    ```bash
    npm start
    ```

    La consola debe mostrar API disponible en http://localhost:3000.

4. **Comprobar que responde** (desde otra terminal)

    ```bash
    curl http://localhost:3000/api/productos
    ```

    Debe devolver la lista de tres productos en formato JSON.

## Checklist de seguridad

- [ ] No se han incluido contraseñas ni secretos en el repositorio
- [ ] Los posibles ficheros con secretos están incluidos en .gitignore
- [ ] En producción debería utilizarse HTTPS
- [ ] Solo deberían exponerse los puertos necesarios

!!! note "Nota"
    La aplicación de ejemplo no utiliza secretos ni base de datos. Estas comprobaciones
    se incluyen como pauta para futuros despliegues.
