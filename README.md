# Proyecto Final - API Académica

Esta es una API RESTful desarrollada con **NestJS** y **TypeORM** para la gestión de información académica. El sistema permite registrar y administrar estudiantes, cursos, materias y profesores, incluyendo las relaciones entre ellos (como estudiantes inscritos a cursos y materias asignadas a profesores).

---

## 🚀 Tecnologías usadas

- Node.js
- NestJS
- TypeORM
- MySQL
- Insomnia / Postman

---

## 🛠️ Instalación del proyecto

```bash
# Clona el repositorio
git clone https://github.com/MariaEstrada17/proyecto-final

# Entra al proyecto
cd proyecto-final

# Instala las dependencias
npm install

# ENDPOINTS 

# Estudiantes

| Método | Endpoint          | Descripción                  |
| ------ | ----------------- | ---------------------------- |
| GET    | /estudiantes      | Listar todos los estudiantes |
| GET    | /estudiantes/\:id | Obtener un estudiante por ID |
| POST   | /estudiantes      | Crear un nuevo estudiante    |
| PATCH  | /estudiantes/\:id | Actualizar un estudiante     |
| DELETE | /estudiantes/\:id | Eliminar un estudiante       |

# Cursos

| Método | Endpoint     | Descripción             |
| ------ | ------------ | ----------------------- |
| GET    | /cursos      | Listar todos los cursos |
| GET    | /cursos/\:id | Obtener curso por ID    |
| POST   | /cursos      | Crear un nuevo curso    |
| PATCH  | /cursos/\:id | Actualizar un curso     |
| DELETE | /cursos/\:id | Eliminar un curso       |

# Materias

| Método | Endpoint       | Descripción               |
| ------ | -------------- | ------------------------- |
| GET    | /materias      | Listar todas las materias |
| GET    | /materias/\:id | Obtener materia por ID    |
| POST   | /materias      | Crear una nueva materia   |
| PATCH  | /materias/\:id | Actualizar una materia    |
| DELETE | /materias/\:id | Eliminar una materia      |

# Profesores

| Método | Endpoint         | Descripción                 |
| ------ | ---------------- | --------------------------- |
| GET    | /profesores      | Listar todos los profesores |
| GET    | /profesores/\:id | Obtener profesor por ID     |
| POST   | /profesores      | Crear un nuevo profesor     |
| PATCH  | /profesores/\:id | Actualizar un profesor      |
| DELETE | /profesores/\:id | Eliminar un profesor        |


Autor
María Jose Estrada
Proyecto final - 2025


