import { Download, Languages, Mail, MapPin, CircleCheck } from 'lucide-react'
import { persona, textos } from '../data/perfil'
import { t, type Idioma } from '../idioma'
import { IconoLinkedIn } from './Iconos'

export const botonPrincipal =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-marca-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-marca-700 dark:bg-marca-500 dark:hover:bg-marca-400 dark:text-slate-950'
export const botonSecundario =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:border-marca-400 hover:text-marca-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-marca-500 dark:hover:text-marca-300'

export function SobreMi({ idioma }: { idioma: Idioma }) {
  const datos = [
    { icono: MapPin, texto: persona.ubicacion },
    { icono: CircleCheck, texto: persona.disponibilidad },
    { icono: Languages, texto: persona.idiomas },
  ]

  return (
    <section id="sobre-mi" className="scroll-mt-16 pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 text-center sm:px-6 md:flex-row md:text-left">
        {persona.foto ? (
          <img
            src={persona.foto}
            alt={persona.nombre}
            className="size-40 shrink-0 rounded-full object-cover ring-4 ring-marca-200 sm:size-48 dark:ring-marca-800"
          />
        ) : (
          <div className="flex size-40 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-marca-500 to-marca-800 text-5xl font-bold text-white ring-4 ring-marca-200 sm:size-48 sm:text-6xl dark:ring-marca-800">
            {persona.iniciales}
          </div>
        )}

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {persona.nombre}
          </h1>
          <p className="mt-2 text-lg font-semibold text-marca-600 sm:text-xl dark:text-marca-400">
            {t(persona.titulo, idioma)}
          </p>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{t(persona.frase, idioma)}</p>

          <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-600 md:justify-start dark:text-slate-400">
            {datos.map(({ icono: Icono, texto }) => (
              <li key={texto.es} className="flex items-center gap-1.5">
                <Icono className="size-4 text-marca-600 dark:text-marca-400" />
                {t(texto, idioma)}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href={persona.cvPdf} download className={botonPrincipal}>
              <Download className="size-5" /> {t(textos.descargarCv, idioma)}
            </a>
            <a href={persona.linkedin} target="_blank" rel="noreferrer" className={botonSecundario}>
              <IconoLinkedIn className="size-5" /> LinkedIn
            </a>
            <a href={`mailto:${persona.correo}`} className={botonSecundario}>
              <Mail className="size-5" /> {t(textos.correo, idioma)}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
