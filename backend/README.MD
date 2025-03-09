# Documentación del Backend

Este módulo se encarga de la lógica del servidor para la aplicación **Team Task Manager**. Se utiliza Node.js con Express para crear una API REST que permite gestionar tareas (crear, listar, actualizar y eliminar).

## Estructura del Proyecto
```
└── 📁backend
    └── 📁controllers
        └── taskController.js   # Lógica de los endpoints de tareas
    └── 📁models
        └── Task.js # Definición de la clase Task y manejo de datos.
    └── 📁routes
        └── taskRoute.js    # Rutas de la API para las tareas.
    └── package-lock.json
    └── package.json
    └── README.MD
    └── server.js   # Configuración y puesta en marcha del servidor.
```

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/jeperea45/Prueba-Integral
   cd backend

2. **Instalar dependencias:**
    ```bash
    npm install

## Configuración

1. **Este backend no requiere configuración de variables de entorno adicionales para su funcionamiento básico.**

2. **En caso de necesitar personalizaciones (como puerto o configuraciones de CORS), se pueden agregar mediante variables de entorno o modificando el archivo server.js.**

## Despliegue

**Para iniciar el servidor, ejecuta:**

    node server.js


## EndPoints

**Puedes acceder a los siguientes EndPoints:**

**GET** /api/tasks
Obtiene todas las tareas registradas.

**POST** /api/tasks
Crea una nueva tarea. Se debe enviar un objeto JSON con los campos title y description.

**PUT** /api/tasks/:id/status
Actualiza el status de una tarea específica. Se debe enviar un objeto JSON con el campo status (valores permitidos: ToDo, Progress o Done).

**DELETE** /api/tasks/:id
Elimina una tarea según su identificador.

## Notas de Desarrollo

**Controladores:** Se encuentran en controllers/taskController.js y gestionan la lógica de cada endpoint.

**Modelo:** El archivo models/Task.js maneja la creación y gestión interna de las tareas.

**Rutas:** Se configuran en routes/taskRoute.js y se enlazan en server.js.