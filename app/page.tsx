// app/page.tsx (Versión Simple para Prueba)

// No necesitamos "use client" aquí porque es solo HTML estático básico
import React from 'react';

export default function HomePageSimple() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>¡Hola Vercel!</h1>
      <p>Esta es una página de prueba súper simple.</p>
      <p>Si puedes ver esto, significa que el enrutamiento básico de Next.js y el despliegue en Vercel funcionan.</p>
      <p>El problema del 404 probablemente estaba en el código original de `page.tsx`, `layout.tsx` o una dependencia.</p>
    </main>
  );
}