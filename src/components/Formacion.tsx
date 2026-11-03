import { Award, GraduationCap } from 'lucide-react'
import { cursos, formacion, reconocimientos, textos } from '../data/perfil'
import { t, type Idioma } from '../idioma'
import { Seccion, Tarjeta } from './Seccion'

export function Formacion({ idioma }: { idioma: Idioma }) {
  return (
    <Seccion id="formacion" titulo={t(textos.menu.formacion, idioma)}>
      <div className="grid gap-5 md:grid-cols-2">
        {formacion.map((f) => (
          <Tarjeta key={f.titulo.es}>
            <GraduationCap className="size-7 text-marca-600 dark:text-marca-400" />
            <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{t(f.titulo, idioma)}</h3>
            <p className="text-slate-600 dark:text-slate-400">{f.institucion}</p>
            <p className="mt-1 text-sm font-semibold text-marca-600 dark:text-marca-400">{t(f.fechas, idioma)}</p>
            {f.detalle && <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{t(f.detalle, idioma)}</p>}
          </Tarjeta>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Tarjeta>
          <h3 className="font-bold text-slate-900 dark:text-white">{t(textos.cursos, idioma)}</h3>
          <ul className="mt-3 divide-y divide-slate-200 dark:divide-slate-800">
            {cursos.map((c) => (
              <li key={c.nombre.es} className="flex items-start justify-between gap-4 py-2.5">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">{t(c.nombre, idioma)}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{c.entidad}</p>
                </div>
                <span className="shrink-0 text-sm text-marca-600 dark:text-marca-400">{t(c.fecha, idioma)}</span>
              </li>
            ))}
          </ul>
        </Tarjeta>

        <Tarjeta>
          <h3 className="font-bold text-slate-900 dark:text-white">{t(textos.reconocimientos, idioma)}</h3>
          <ul className="mt-3 space-y-3">
            {reconocimientos.map((r) => (
              <li key={r.es} className="flex gap-3">
                <Award className="mt-0.5 size-5 shrink-0 text-amber-500" />
                <span className="text-slate-700 dark:text-slate-300">{t(r, idioma)}</span>
              </li>
            ))}
          </ul>
        </Tarjeta>
      </div>
    </Seccion>
  )
}
