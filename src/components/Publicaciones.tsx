import { Award, ExternalLink } from 'lucide-react'
import { persona, publicaciones, textos } from '../data/perfil'
import { t, type Idioma } from '../idioma'
import { botonSecundario } from './SobreMi'
import { Etiqueta, Seccion, Tarjeta } from './Seccion'

export function Publicaciones({ idioma }: { idioma: Idioma }) {
  return (
    <Seccion id="publicaciones" titulo={t(textos.menu.publicaciones, idioma)}>
      <div className="space-y-4">
        {publicaciones.map((p) => (
          <Tarjeta key={p.titulo}>
            <div className="flex flex-wrap items-center gap-2">
              <Etiqueta>{p.evento}</Etiqueta>
              <span className="text-sm text-slate-500 dark:text-slate-400">{t(p.rol, idioma)}</span>
              {p.destacado && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  <Award className="size-3.5" /> {t(p.destacado, idioma)}
                </span>
              )}
            </div>
            <h3 className="mt-2 font-bold text-slate-900 dark:text-white">{p.titulo}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t(p.resumen, idioma)}</p>
          </Tarjeta>
        ))}
      </div>

      <a href={persona.publicaciones} target="_blank" rel="noreferrer" className={`${botonSecundario} mt-6 w-full sm:w-auto`}>
        <ExternalLink className="size-5" /> {t(textos.verPublicaciones, idioma)}
      </a>
    </Seccion>
  )
}
