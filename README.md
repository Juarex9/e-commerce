Descripción
-----------
Aplicación frontend de un e-commerce desarrollada con React. Interfaz completa para mostrar productos, agregar al carrito, filtrar/buscar productos y finalizar compra (frontend-only). Cuenta con una demo desplegada en Vercel: https://e-commerce-gamma-indol.vercel.app/

Tabla de contenidos
------------------
- [Características](#características)
- [Demo](#demo)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Comandos útiles](#comandos-útiles)
- [Despliegue (Vercel)](#despliegue-vercel)
- [Buenas prácticas y pruebas](#buenas-prácticas-y-pruebas)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)
- [Agradecimientos](#agradecimientos)

Características
---------------
- Catálogo de productos con paginación y/o filtrado.
- Vista de detalle de producto.
- Carrito de compras con gestión de cantidades.
- Formulario de checkout (frontend) con validaciones.
- Búsqueda y filtros por categoría/precio.
- Diseño responsive pensado para móviles y escritorio.
- Integración preparada para consumir APIs externas (separación de servicios).

Demo
----
Accede a la demo en Vercel: https://e-commerce-gamma-indol.vercel.app/

Tecnologías
----------
- React
- JavaScript (ES6+)
- HTML & CSS (posible uso de CSS Modules / SASS / Tailwind según el proyecto)
- Herramientas comunes (Vite o Create React App, dependiendo de la configuración)
- Librerías opcionales: react-router, axios/fetch, context/redux, styled-components / Tailwind

Instalación
----------
Clona el repositorio y ejecuta los comandos necesarios:

```bash
# Clona el repositorio
git clone https://github.com/Juarex9/e-commerce.git
cd e-commerce

# Instala dependencias (npm)
npm install

# Si usas yarn
# yarn
```

Arrancar en desarrollo:

```bash
# Modo desarrollo
npm start
# o si el proyecto usa Vite
# npm run dev
```

Construir para producción:

```bash
npm run build
```

Estructura del proyecto
-----------------------
Estructura sugerida (ajusta según tu implementación):

```
/public
/src
  /assets          # imágenes, iconos, fuentes
  /components      # componentes reutilizables (Header, Footer, ProductCard, ...)
  /pages           # vistas/plantillas (Home, Product, Cart, Checkout)
  /contexts        # React Contexts (Auth, Cart)
  /services        # configuración de Firebase
  /hooks           # custom hooks
  index.js
  App.jsx
package.json
README.md
```

Comandos útiles
---------------
Los scripts pueden variar según la configuración del proyecto. Ejemplos comunes:

- `npm start` — Ejecuta la app en modo desarrollo (Create React App).
- `npm run dev` — Ejecuta la app en modo desarrollo (Vite).
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Visualiza la build de producción localmente (si está disponible).
- `npm test` — Ejecuta tests (si están configurados).
- `npm run lint` — Linter (ESLint) para comprobar calidad de código.

License
-------
Este proyecto está bajo la licencia MIT. Reemplaza o modifica según prefieras.

Agradecimientos
---------------
- Inspirado en prácticas comunes de proyectos React.
- Muchas librerías y recursos Open Source que facilitan el desarrollo frontend.

Contacto
-------
- Repo: https://github.com/Juarex9/e-commerce
- Demo: https://e-commerce-gamma-indol.vercel.app/
 
## Stack tecnológico 

- **React 19** + **Vite**
- **React Router** para navegación
- **Chakra UI** para componentes y estilos
- **Firebase Firestore** como backend de datos

##  Estructura del proyecto
```
src/
├── components/      # Componentes UI reutilizables
├── context/         # Contexto del carrito
├── hooks/           # Hooks personalizados (fetch de productos)
├── layouts/         # Layouts con navegación
├── pages/           # Vistas de la app
├── routes/          # Definición de rutas
├── services/        # Configuración de Firebase
├── App.jsx
└── main.jsx
```

##  Rutas disponibles

- `/` — Home con catálogo general.
- `/item/:ProductId` — Detalle de producto.
- `/category/:categoryId` — Productos por categoría.
- `/cart` — Carrito.
- `/checkout` — Finalización de compra.
- `/add-doc` — Formulario para crear productos en Firestore.

##  Requisitos

- **Node.js** 18+ (recomendado)
- **npm** (o tu gestor de paquetes preferido)
- Acceso a un proyecto de **Firebase** con Firestore habilitado.

##  Configuración de Firebase

La configuración está en `src/services/config/firebase.js`. Allí se inicializa Firebase y se exporta la instancia de Firestore.

+**Colecciones esperadas:**

- `products`: catálogo de productos.
- `cart`: órdenes generadas en checkout.

Ejemplo de documento en `products`:

```json
{
  "title": "Zapatillas Urban",
  "description": "Modelo liviano con suela antideslizante",
  "price": 89.99,
  "thumbnail": "https://...",
  "category": "shoes",
  "stock": 10
}
```

> Nota: La vista de detalle utiliza `images[0]` si existe. Si solo tienes `thumbnail`, puedes extender la carga para incluirlo en `images`.

##  Instalación y uso

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Levantar el entorno de desarrollo:
   ```bash
   npm run dev
   ```

3. Compilar para producción:
   ```bash
   npm run build
   ```

4. Previsualizar el build:
   ```bash
   npm run preview
   ```
O ingresar a la demo en el siguiente link: https://e-commerce-gamma-indol.vercel.app/

##  Linting

```bash
npm run lint
```

##  Flujo principal

1. El usuario navega el catálogo y entra al detalle del producto.
2. Agrega productos al carrito y ajusta cantidades.
3. En checkout completa sus datos y se genera una orden en Firestore.

##  Notas

- El proyecto usa Chakra UI para estilos y diseño responsivo.
- El contexto global del carrito vive en `src/context/CartContext.jsx`.
- Las rutas están definidas en `src/routes/index.jsx`.

---
)
