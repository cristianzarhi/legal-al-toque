// app/layout.tsx (Versión Simple para Prueba)
import React from 'react';
import './globals.css'; // Asumiendo que este archivo existe y es simple

export const metadata = {
  title: 'Prueba Layout Simple',
  description: 'Probando layout mínimo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <h1>Layout Mínimo</h1>
        <hr />
        {/* Aquí se renderizaría page.tsx */}
        {children}
        <hr />
        <p>Fin del Layout</p>
      </body>
    </html>
  );
}