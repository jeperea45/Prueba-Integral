# Team Task Manager

**Team Task Manager** es una aplicación diseñada para facilitar la gestión de tareas en equipo. Se compone de dos módulos principales:

- **Backend:** Una API REST construida con Node.js y Express, que permite crear, listar, actualizar y eliminar tareas.
- **Frontend:** Una interfaz de usuario desarrollada con React y TypeScript que permite interactuar con la API y visualizar el estado de las tareas en tiempo real.

## Características

- **Gestión de Tareas:** Crear, listar, actualizar y eliminar tareas.
- **Estados de Tareas:** Soporte para múltiples estados (`ToDo`, `Progress`, `Done`).
- **Comunicación entre módulos:** Integración sencilla mediante API REST.
- **Desarrollo modular:** Separación clara entre frontend y backend para facilitar el mantenimiento y escalabilidad.

## Requisitos del Sistema

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Instalación y Despliegue

El proyecto se divide en dos partes. Sigue las instrucciones específicas en cada módulo:

- **Backend:**
  Consulta la [documentación del backend](./backend/README.md) para conocer los pasos de instalación, configuración y despliegue del servidor.

- **Frontend:**
  Consulta la [documentación del frontend](./frontend/README.md) para instalar, configurar y ejecutar la aplicación del lado del cliente.

## Flujo General

1. **Configuración del Backend:**
   - Clona el repositorio y navega al directorio `backend`.
   - Instala las dependencias y ejecuta el servidor en el puerto 3000.

2. **Configuración del Frontend:**
   - En otro terminal, navega al directorio `frontend`.
   - Instala las dependencias, configura la variable de entorno `VITE_API_URL` y ejecuta el servidor de desarrollo.

3. **Integración:**
   El frontend se comunica con el backend mediante llamadas HTTP a la API. Asegúrate de que ambos módulos se estén ejecutando correctamente.
