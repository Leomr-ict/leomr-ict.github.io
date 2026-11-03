import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { persona, textos } from '../data/perfil'
import { t, type Idioma } from '../idioma'

type Props = {
  idioma: Idioma
  cambiarIdioma: () => void
  oscuro: boolean
  cambiarTema: () => void
}

const secciones = Object.entries(textos.menu)

/** Barra superior fija con links a las secciones, idioma, tema y menú móvil. */
export function Navbar({ idioma, cambiarIdioma, oscuro, cambiarTema }: Props) {
  const [abierto, setAbierto] = useState(false)

  const botonIcono =
    'rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-marca-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-marca-300'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#sobre-mi" className="font-bold whitespace-nowrap text-slate-900 dark:text-white">
          <span className="text-marca-600 dark:text-marca-400">{persona.iniciales}</span>
          <span className="hidden sm:inline lg:hidden xl:inline"> · {persona.nombre}</span>
        </a>

        <div className="flex items-center gap-1">
          {/* Links de escritorio (se ocultan en pantallas chicas) */}
          <ul className="mr-2 hidden items-center gap-1 lg:flex">
            {secciones.map(([id, nombre]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-lg px-2.5 py-2 text-sm font-medium whitespace-nowrap text-slate-600 hover:bg-slate-100 hover:text-marca-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-marca-300"
                >
                  {t(nombre, idioma)}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={cambiarIdioma} className={`${botonIcono} w-10 text-sm font-semibold`} title="Español / English">
            {idioma === 'es' ? 'EN' : 'ES'}
          </button>
          <button onClick={cambiarTema} className={botonIcono} aria-label={t(textos.cambiarTema, idioma)}>
            {oscuro ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <button
            onClick={() => setAbierto(!abierto)}
            className={`${botonIcono} lg:hidden`}
            aria-label={t(textos.abrirMenu, idioma)}
            aria-expanded={abierto}
          >
            {abierto ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {abierto && (
        <ul className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          {secciones.map(([id, nombre]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setAbierto(false)}
                className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {t(nombre, idioma)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
