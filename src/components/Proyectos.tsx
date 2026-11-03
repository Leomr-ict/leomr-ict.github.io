import { FolderGit2 } from 'lucide-react'
import { proyectos, textos } from '../data/perfil'
import { t, type Idioma } from '../idioma'
import { Etiqueta, Seccion, Tarjeta } from './Seccion'

export function Proyectos({ idioma }: { idioma: Idioma }) {
  return (
    <Seccion id="proyectos" titulo={t(textos.menu.proyectos, idioma)}>
      <div className="grid gap-5 md:grid-cols-2">
        {proyectos.map((p) => (
          <Tarjeta key={p.titulo.es} className="flex flex-col">
            <span className="text-xs font-semibold tracking-wide text-marca-600 uppercase dark:text-marca-400">
              {t(p.tipo, idioma)}
            </span>
            <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{t(p.titulo, idioma)}</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{t(p.descripcion, idioma)}</p>

            {p.cifras.length > 0 && (
              <ul className="mt-4 space-y-1.5 rounded-xl bg-marca-50 p-3 text-sm font-medium text-marca-900 dark:bg-marca-950 dark:text-marca-100">
                {p.cifras.map((c) => (
                  <li key={c.es}>▸ {t(c, idioma)}</li>
                ))}
              </ul>
            )}

            {/* mt-auto empuja las etiquetas al fondo para que las tarjetas queden alineadas */}
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {p.tecnologias.map((tec) => (
                <Etiqueta key={tec}>{tec}</Etiqueta>
              ))}
            </div>

            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-marca-600 hover:underline dark:text-marca-400"
              >
                <FolderGit2 className="size-4" /> {t(textos.verRepo, idioma)}
              </a>
            )}
          </Tarjeta>
        ))}
      </div>
    </Seccion>
  )
}
