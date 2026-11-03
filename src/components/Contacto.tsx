import { FolderGit2, Mail } from 'lucide-react'
import { persona, textos } from '../data/perfil'
import { t, type Idioma } from '../idioma'
import { IconoLinkedIn } from './Iconos'
import { botonPrincipal, botonSecundario } from './SobreMi'
import { Seccion } from './Seccion'

const anio = new Date().getFullYear()

export function Contacto({ idioma }: { idioma: Idioma }) {
  return (
    <>
      <Seccion id="contacto" titulo={t(textos.menu.contacto, idioma)}>
        <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">{t(textos.contactoTexto, idioma)}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {/* break-all evita que el correo se salga de la pantalla en celulares angostos */}
          <a href={`mailto:${persona.correo}`} className={`${botonPrincipal} break-all`}>
            <Mail className="size-5 shrink-0" /> {persona.correo}
          </a>
          <a href={persona.linkedin} target="_blank" rel="noreferrer" className={botonSecundario}>
            <IconoLinkedIn className="size-5" /> LinkedIn
          </a>
          <a href={persona.github} target="_blank" rel="noreferrer" className={botonSecundario}>
            <FolderGit2 className="size-5" /> GitHub
          </a>
        </div>
      </Seccion>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {anio} {persona.nombre}. {t(textos.hecho, idioma)}
      </footer>
    </>
  )
}
