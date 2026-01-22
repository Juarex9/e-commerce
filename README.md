Descripción
-----------
Aplicación frontend de un e-commerce desarrollada con React. Interfaz completa para mostrar productos, agregar al carrito, filtrar/buscar productos y finalizar compra (frontend-only). Cuenta con una demo desplegada en Vercel: https://e-commerce-gamma-indol.vercel.app/

License
-------
Este proyecto está bajo la licencia MIT. Reemplaza o modifica según prefieras.

 
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

**Colecciones esperadas:**

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

