import { useEffect, useState } from 'react'
import type { Idioma } from './idioma'
import { Navbar } from './components/Navbar'
import { SobreMi } from './components/SobreMi'
import { Experiencia } from './components/Experiencia'
import { Formacion } from './components/Formacion'
import { Herramientas } from './components/Herramientas'
import { Proyectos } from './components/Proyectos'
import { Publicaciones } from './components/Publicaciones'
import { Contacto } from './components/Contacto'

// Recuerda la elección del visitante (idioma y tema) para su próxima visita.
function leer(clave: string) {
  try {
    return localStorage.getItem(clave)
  } catch {
    return null
  }
}
function guardar(clave: string, valor: string) {
  try {
    localStorage.setItem(clave, valor)
  } catch {
    // Sin almacenamiento (p. ej. navegación privada): no pasa nada.
  }
}

export default function App() {
  const [idioma, setIdioma] = useState<Idioma>(() => (leer('idioma') === 'en' ? 'en' : 'es'))
  // index.html ya decidió el tema inicial; aquí solo lo leemos.
  const [oscuro, setOscuro] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.lang = idioma
    guardar('idioma', idioma)
  }, [idioma])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', oscuro)
    guardar('tema', oscuro ? 'oscuro' : 'claro')
  }, [oscuro])

  return (
    <>
      <Navbar
        idioma={idioma}
        cambiarIdioma={() => setIdioma(idioma === 'es' ? 'en' : 'es')}
        oscuro={oscuro}
        cambiarTema={() => setOscuro(!oscuro)}
      />
      <main>
        <SobreMi idioma={idioma} />
        <Experiencia idioma={idioma} />
        <Formacion idioma={idioma} />
        <Herramientas idioma={idioma} />
        <Proyectos idioma={idioma} />
        <Publicaciones idioma={idioma} />
        <Contacto idioma={idioma} />
      </main>
    </>
  )
}
