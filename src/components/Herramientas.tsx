import { herramientas, niveles, textos, type Nivel } from '../data/perfil'
import { t, type Idioma } from '../idioma'
import { Seccion, Tarjeta } from './Seccion'

// Color de la etiqueta según el nivel real.
const colorNivel: Record<Nivel, string> = {
  profesional: 'bg-marca-600 text-white dark:bg-marca-500 dark:text-slate-950',
  proyectos: 'bg-marca-100 text-marca-800 dark:bg-marca-900 dark:text-marca-100',
  inicial: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
}

export function Herramientas({ idioma }: { idioma: Idioma }) {
  return (
    <Seccion id="herramientas" titulo={t(textos.menu.herramientas, idioma)}>
      {/* Leyenda de niveles */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(Object.keys(niveles) as Nivel[]).map((nivel) => (
          <span key={nivel} className={`rounded-full px-3 py-1 text-xs font-semibold ${colorNivel[nivel]}`}>
            {t(niveles[nivel], idioma)}
          </span>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {herramientas.map((grupo) => (
          <Tarjeta key={grupo.grupo.es}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t(grupo.grupo, idioma)}</h3>
            <ul className="mt-3 space-y-2.5">
              {grupo.items.map((item) => (
                <li key={t(item.nombre, 'es')} className="flex items-center justify-between gap-3">
                  <span className="text-slate-700 dark:text-slate-300">{t(item.nombre, idioma)}</span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${colorNivel[item.nivel]}`}
                  >
                    {t(niveles[item.nivel], idioma)}
                  </span>
                </li>
              ))}
            </ul>
          </Tarjeta>
        ))}
      </div>
    </Seccion>
  )
}
