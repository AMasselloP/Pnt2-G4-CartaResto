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


ULR DEL PROYECTO 

https://carta-resto-ort.netlify.app/
