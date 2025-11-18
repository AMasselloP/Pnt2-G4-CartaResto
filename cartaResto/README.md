# CartaResto — Aplicación de carta de restaurante

Una aplicación front-end creada con React y Vite para visualizar el menú de un restaurante, gestionar un carrito de compra sencillo y navegar entre las vistas principales: Home, Menú, Carrito y Login. Está pensada como trabajo práctico para la materia PNT2.

Características principales
- Interfaz en React 19 sobre Vite para desarrollo rápido.
- Estilos con Tailwind CSS.
- Estado gestionado con Zustand.
- Cliente preparado para Supabase en `src/components/lib/supabase.js` (opcional).
- Carrito con resumen, totales y badge en el botón de compra.
- Recursos estáticos en `public/` (imágenes, audio opcional).

Requisitos
- Node.js (recomendado v18 o superior).
- npm. En Windows, si tienes problemas con PowerShell, usa `npm.cmd`.

Instalación y ejecución en desarrollo
1. Instalar dependencias:

```powershell
npm.cmd install
```

2. Iniciar el servidor de desarrollo:

```powershell
npm.cmd run dev
```

3. Abrir la aplicación en el navegador en:

http://localhost:5173

Build para producción

```powershell
npm.cmd run build
npm.cmd run preview
```

Scripts útiles (definidos en `package.json`)
- `dev` — inicia Vite en modo desarrollo.
- `build` — genera la versión optimizada para producción.
- `lint` — ejecuta chequeos con Biome.
- `lint:format` — formatea el código con Biome.

Estructura del proyecto

- `public/` — archivos estáticos que se sirven tal cual (por ejemplo `public/images/logoMenu.jpg`).
- `src/` — código fuente del proyecto:
  - `src/main.jsx` — punto de entrada.
  - `src/index.css` — carga de Tailwind y estilos globales.
  - `src/components/` — componentes y vistas (App, páginas, botones, carrito, etc.).
  - `src/components/Styles/` — estilos locales (p.ej. `Login.css`).
  - `src/data/restaurant.json` — metadatos del restaurante (nombre, dirección, teléfono, horario).
  - `src/components/lib/supabase.js` — cliente Supabase.

## Responsabilidad de componentes

### App (`src/components/App/`)
- **App.jsx**: Componente raíz de la aplicación. Configura el contexto global (BrowserRouter) e inicializa los listeners de autenticación. Aplica estilos generales de la aplicación.
- **AppRoutes.jsx**: Define todas las rutas disponibles y mapea paths a componentes. Centraliza la navegación de la aplicación.

### Pages (`src/components/pages/`)
- **Home.jsx**: Página principal que muestra el logo del restaurante, botones de acceso rápido (Login, Carrito) y la información del usuario autenticado.
- **Login.jsx**: Página de autenticación. Gestiona registro e inicio de sesión con Supabase. Valida credenciales y redirige según corresponda.
- **Carrito.jsx**: Redirecciona a la página de checkout (CheckoutPage).

### MenuResto (`src/components/MenuResto/`)
- **MenuResto.jsx**: Componente principal del menú. Gestiona el estado de la categoría seleccionada y carga productos desde Supabase según la categoría elegida.
- **Sidebar.jsx**: Barra lateral con las categorías disponibles (Entradas, Plato principal, Bebidas, Postres). Permite cambiar categoría, ver usuario actual y cerrar sesión.
- **ProductGrid.jsx**: Componente presentacional que renderiza una grilla responsive de productos. Itera sobre productos y renderiza ProductCard para cada uno.
- **ProductCard.jsx**: Tarjeta individual de producto. Muestra imagen, nombre, descripción, precio y botón para agregar al carrito. Comunica con Zustand para adicionar items.

### Carrito (`src/components/Carrito/`)
- **CheckoutPage.jsx**: Página de checkout. Compone ItemList, DeliveryInfo y OrderSummary. Proporciona el botón para retroceder al menú.
- **ItemList.jsx**: Lista de items en el carrito. Permite ver, modificar cantidad y eliminar productos. Muestra mensaje cuando el carrito está vacío.
- **DeliveryInfo.jsx**: Formulario para ingresar información de entrega (dirección, teléfono, notas adicionales).
- **OrderSummary.jsx**: Resumen del pedido con subtotal, costo de envío y total. Botones para confirmar pago, cancelar o volver al inicio.

### FinCompra (`src/components/FinCompra/`)
- **GraciasCompra.jsx**: Página de confirmación exitosa de compra. Muestra mensaje de agradecimiento y botón para volver al menú.
- **CancelPurchase.jsx**: Página mostrada cuando el cliente cancela la compra. Permite volver al menú.

### Button (`src/components/Button/`)
- **LoginButton.jsx**: Botón flotante para acceder a la página de Login. Se oculta automáticamente en la página de Login.
- **BuyButton.jsx**: Botón flotante que redirige al carrito y muestra badge con cantidad de items.
- **BackButton.jsx**: Botón para retroceder a la página anterior o a una ruta específica.
- **LogoButton.jsx**: Botón con el logo del restaurante que redirige al menú principal.

### Hooks (`src/components/hooks/`)
- **useAuth.js**: Hook personalizado que encapsula funciones de autenticación (login, logout, signup).
- **getProducts.js**: Hook que conecta con Supabase y obtiene productos. Incluye funciones para obtener todos los productos o filtrar por categoría.
- **userAuthListener.js**: Hook que establece listeners de cambios en la autenticación y sincroniza el estado global.

### Store (`src/store/`)
- **cartStore.jsx**: Store Zustand que gestiona el estado del carrito: agregar/eliminar items, modificar cantidades y limpiar carrito.
- **sessionStore.jsx**: Store Zustand que gestiona el estado de sesión: usuario autenticado, login/logout.

### Lib (`src/components/lib/`)
- **supabase.js**: Cliente inicializado de Supabase. Proporciona acceso a la API de base de datos y autenticación.


ULR DEL PROYECTO 

https://carta-resto-ort.netlify.app/
