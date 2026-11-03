import { experiencia, textos } from '../data/perfil'
import { t, type Idioma } from '../idioma'
import { Etiqueta, Seccion } from './Seccion'

/** Línea de tiempo vertical: una línea a la izquierda con un punto por cargo. */
export function Experiencia({ idioma }: { idioma: Idioma }) {
  return (
    <Seccion id="experiencia" titulo={t(textos.menu.experiencia, idioma)}>
      <ol className="relative ml-2 border-l-2 border-marca-200 dark:border-marca-900">
        {experiencia.map((item) => (
          <li key={item.cargo.es + item.fechas.es} className="relative mb-10 pl-6 last:mb-0 sm:pl-8">
            <span className="absolute top-1.5 -left-[9px] size-4 rounded-full border-4 border-slate-50 bg-marca-500 dark:border-slate-950" />

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-marca-600 dark:text-marca-400">{t(item.fechas, idioma)}</span>
              <Etiqueta>{t(item.tipo, idioma)}</Etiqueta>
            </div>
            <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl dark:text-white">{t(item.cargo, idioma)}</h3>
            <p className="text-slate-600 dark:text-slate-400">{t(item.lugar, idioma)}</p>

            {item.logros.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-700 marker:text-marca-500 dark:text-slate-300">
                {item.logros.map((logro) => (
                  <li key={logro.es}>{t(logro, idioma)}</li>
                ))}
              </ul>
            )}

            {item.tecnologias.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tecnologias.map((tec) => (
                  <Etiqueta key={tec}>{tec}</Etiqueta>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Seccion>
  )
}
