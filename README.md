# 🔐 Aplicación de Autenticación con Angular y JWT

## 📖 Descripción

Esta aplicación es un sistema de **autenticación de usuarios** desarrollado con **Angular** en el frontend y **Node.js** en el backend.  

Permite a los usuarios **registrarse, iniciar sesión y acceder a un dashboard protegido** utilizando **JSON Web Tokens (JWT)** para manejar la autenticación de forma segura.

El proyecto demuestra la implementación de **login, registro, protección de rutas y manejo de tokens** en una aplicación web moderna.

---

# 🚀 Características

- Registro de usuarios
- Inicio de sesión seguro
- Generación de tokens JWT
- Almacenamiento del token en Local Storage
- Protección de rutas con Guards en Angular
- Dashboard personalizado
- Visualización del nombre del usuario autenticado
- Cierre de sesión (Logout)
- Interfaz construida con Angular Material

---

# 🧰 Tecnologías utilizadas

### Frontend
- Angular
- Angular Material
- TypeScript
- HTML
- CSS

### Backend
- Node.js
- Express.js

### Autenticación
- JSON Web Token (JWT)

---

# ⚙️ Instalación del proyecto

## 1. Clonar el repositorio

```bash
git clone https://github.com/fershiiii/login-app

Entrar a la carpeta del proyecto:

cd NOMBRE-DEL-REPOSITORIO
2. Instalar dependencias del frontend
npm install
3. Ejecutar la aplicación Angular
ng serve

La aplicación estará disponible en:

http://localhost:4200
🖥 Configuración del Backend

Entrar a la carpeta del backend e instalar dependencias:

npm install

Luego iniciar el servidor:

node server.js

El servidor normalmente corre en:

http://localhost:3000
🔐 Flujo de autenticación
El usuario se registra con nombre, correo y contraseña
El usuario inicia sesión
El servidor valida las credenciales
El servidor genera un token JWT
El token se guarda en Local Storage
Angular utiliza Guards para proteger rutas privadas
El Dashboard muestra el nombre del usuario autenticado
🛡 Protección de rutas

La ruta del Dashboard está protegida mediante un Guard de Angular.

Ruta protegida:

/dashboard

Solo los usuarios que tengan un token válido pueden acceder.

👤 Dashboard

Después de iniciar sesión correctamente, el usuario es redirigido al Dashboard, donde se muestra un mensaje personalizado:

Hola, [Nombre del Usuario]

El nombre se obtiene al decodificar el JWT.

🚪 Cerrar sesión

La función de logout elimina el token almacenado en Local Storage, evitando el acceso a las rutas protegidas.

📂 Estructura del proyecto
src/
│
├── app/
│   ├── login/
│   ├── dashboard/
│   ├── services/
│   │   └── auth.service.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   └── app.routes.ts
│
└── assets/
🧪 Prueba de seguridad

Para probar la protección de rutas:

Inicia sesión normalmente.
Abre la consola del navegador (F12).
Ejecuta:
localStorage.removeItem("token")
Intenta acceder manualmente a:
/dashboard

Serás redirigido automáticamente al login.

🔮 Mejoras futuras
Validación de expiración del token
Interceptores HTTP para enviar el JWT automáticamente
Encriptación de contraseñas con bcrypt
Página de perfil de usuario
Implementación de refresh tokens
👨‍💻 Autor

Desarrollado por Fernando
Estudiante de Técnico en Ingeniería en Computación
