import type { ReactNode } from 'react'

/** Contenedor común de cada sección: ancho máximo, márgenes y título. */
export function Seccion({ id, titulo, children }: { id: string; titulo: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
          {titulo}
          <span className="mt-3 block h-1 w-12 rounded-full bg-marca-500" />
        </h2>
        {children}
      </div>
    </section>
  )
}

/** Etiqueta pequeña (tecnologías, tipo de experiencia, etc.). */
export function Etiqueta({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-marca-50 px-2.5 py-0.5 text-xs font-medium text-marca-700 ring-1 ring-marca-200 dark:bg-marca-950 dark:text-marca-200 dark:ring-marca-800">
      {children}
    </span>
  )
}

/** Tarjeta con fondo, borde y esquinas redondeadas. */
export function Tarjeta({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  )
}
