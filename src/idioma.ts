import type { Texto } from './data/perfil'

export type Idioma = 'es' | 'en'

/** Devuelve el texto en el idioma elegido (si es un texto simple, lo devuelve tal cual). */
export function t(texto: Texto | string, idioma: Idioma): string {
  return typeof texto === 'string' ? texto : texto[idioma]
}
