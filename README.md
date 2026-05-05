# JorgeMotos - E-commerce de Ciclismo

Este proyecto es una aplicación web moderna para una tienda de bicicletas y repuestos, construida con React, Vite, Tailwind CSS y Firebase.

## Características

- Catálogo de productos dinámico sincronizado con Firebase Firestore.
- Blog de noticias.
- Panel de administración para gestionar productos, blog y contenido del sitio.
- Chatbot integrado con Google Gemini AI.
- Autenticación con Google para administradores.

## Requisitos Previos

- Node.js instalado.
- Una cuenta en Google Cloud (para Gemini API) y Firebase.

## Configuración Local

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz del proyecto basado en `.env.example` y completa las variables:
   ```env
   VITE_GEMINI_API_KEY=tu_clave_de_gemini
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   VITE_FIREBASE_DATABASE_ID=...
   
   # Mercado Pago
   MERCADOPAGO_ACCESS_TOKEN=tu_access_token_de_mercadopago
   VITE_MERCADOPAGO_PUBLIC_KEY=tu_public_key_de_mercadopago
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Despliegue en Vercel

1. Sube tu código a GitHub.
2. Importa el repositorio en Vercel.
3. En la configuración del proyecto en Vercel, ve a **Environment Variables**.
4. Agrega todas las variables definidas en tu `.env` (asegúrate de que tengan el prefijo `VITE_`).
5. Vercel detectará automáticamente que es un proyecto de Vite y lo desplegará.

## Seguridad (Firebase Rules)

Asegúrate de desplegar las reglas de seguridad de Firestore incluidas en `firestore.rules` en tu consola de Firebase.

## Panel de Administración

Para acceder al panel de administración:
1. Ve a `/admin`.
2. Ingresa la clave maestra (por defecto `admin123`).
3. Inicia sesión con tu cuenta de Google configurada como administrador.

## Configuración de Firebase para Producción (Vercel)

1. **Dominios Autorizados**:
   - Ve a la Consola de Firebase -> Authentication -> Settings -> Authorized domains.
   - Agrega tu dominio de Vercel (ej: `jorge-motos.vercel.app`).

2. **Variables de Entorno**:
   Asegúrate de que todas las variables en `.env.example` estén configuradas en el panel de Vercel con el prefijo `VITE_`.

---
Desarrollado con ❤️ para JorgeMotos.
