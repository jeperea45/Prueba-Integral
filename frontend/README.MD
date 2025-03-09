# Documentación del Frontend

Este módulo implementa la interfaz de usuario para la aplicación **Team Task Manager**. Se utiliza React con TypeScript y Vite para crear una experiencia de usuario interactiva en la gestión de tareas.

## Estructura del Proyecto
```
└── 📁frontend
    └── 📁public
        └── vite.svg
    └── 📁src
        └── App.css
        └── App.tsx                     # Componente principal de la aplicación.
        └── 📁components
            └── TaskCard.tsx            # Componente para mostrar cada tarea.
            └── TaskForms.tsx           # Formulario para la creación de tareas.
        └── index.css
        └── main.tsx
        └── types.ts                    # Definición de tipos (Task y TaskStatus).
        └── 📁utils
            └── api.ts                  # Funciones para la comunicación con el backend.
        └── vite-env.d.ts
    └── .env
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── README.md
    └── REDME.MD
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/jeperea45/Prueba-Integral
   cd frontend

2. **Instalar dependencias:**
    ```bash
    npm install

## Configuración

**Variables de entorno:**

Crea un archivo .env en la raíz del proyecto con la siguiente variable:
```bash
VITE_API_URL=http://localhost:3000/api
```
Asegúrate de que la URL apunte a donde esté corriendo el backend.

## Despliegue y Ejecución

**Desarrollo:**
Para iniciar el servidor de desarrollo, ejecuta:

```bash
    npm run dev
```

**Producción:**
Para generar el build optimizado, ejecuta:

```bash
    npm run build
```

## Flujo de la Aplicación

**Carga de Tareas:**
El componente principal (app.tsx) realiza una llamada a la API para obtener las tareas y mostrarlas utilizando el componente TaskCard.

**Creación de Tareas:**
El formulario (TaskForms.tsx) permite crear una nueva tarea, invocando la función api.createTask.

**Actualización y Eliminación:**
Cada tarjeta de tarea permite cambiar su estado o eliminarla mediante las funciones api.updateTaskStatus y api.deleteTask respectivamente.