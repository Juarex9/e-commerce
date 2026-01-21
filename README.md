# E-commerce con React + Vite

Proyecto de tienda online construido con React y Vite. Incluye catálogo de productos, navegación por categorías, detalle de producto, carrito con control de cantidades y checkout integrado con Firebase Firestore.

## ✨ Características

- **Catálogo y detalle de productos** con tarjetas responsivas y vista de producto individual.
- **Navegación por categorías** y rutas dedicadas para cada sección.
- **Carrito de compras** con ajuste de cantidad, subtotal por ítem y total acumulado.
- **Checkout** que guarda la orden en Firestore.
- **Gestión básica de inventario** con formulario para agregar productos a la colección.
- **UI moderna** con Chakra UI y modo claro/oscuro.

## 🧰 Stack tecnológico

- **React 19** + **Vite**
- **React Router** para navegación
- **Chakra UI** para componentes y estilos
- **Firebase Firestore** como backend de datos

## 🗂️ Estructura del proyecto

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

## 🚦 Rutas disponibles

- `/` — Home con catálogo general.
- `/item/:ProductId` — Detalle de producto.
- `/category/:categoryId` — Productos por categoría.
- `/cart` — Carrito.
- `/checkout` — Finalización de compra.
- `/add-doc` — Formulario para crear productos en Firestore.

## ✅ Requisitos

- **Node.js** 18+ (recomendado)
- **npm** (o tu gestor de paquetes preferido)
- Acceso a un proyecto de **Firebase** con Firestore habilitado.

## ⚙️ Configuración de Firebase

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

## ▶️ Instalación y uso

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

## 🧪 Linting

```bash
npm run lint
```

## 🛒 Flujo principal

1. El usuario navega el catálogo y entra al detalle del producto.
2. Agrega productos al carrito y ajusta cantidades.
3. En checkout completa sus datos y se genera una orden en Firestore.

## 📌 Notas

- El proyecto usa Chakra UI para estilos y diseño responsivo.
- El contexto global del carrito vive en `src/context/CartContext.jsx`.
- Las rutas están definidas en `src/routes/index.jsx`.

---

Si quieres extender funcionalidades (auth, pasarela de pagos, panel admin, etc.), este proyecto es una buena base.
