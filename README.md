# Portafolio – Leonardo Muñoz Rosel

Sitio personal publicado en **https://leomr-ict.github.io**.
Hecho con React, TypeScript, Vite y Tailwind CSS.

## Cambiar el contenido

Todo el texto está en **`src/data/perfil.ts`** (en español e inglés).
No hace falta tocar los componentes.

- Foto: copia tu imagen a `public/foto.jpg` y en `perfil.ts` escribe `foto: '/foto.jpg'`.
- CV: reemplaza `public/cv/Leonardo_Munoz_CV.pdf` por la versión nueva (mismo nombre).
- Link a un repositorio: completa el campo `repo` del proyecto.
- Color principal: los tonos `--color-marca-*` en `src/index.css`.

## Ver el sitio en tu computador

```bash
npm install     # solo la primera vez
npm run dev     # abre http://localhost:5173 (se actualiza al guardar)
```

Para revisar que compila antes de publicar: `npm run build`.

## Publicar

Cada `git push` a la rama `main` publica el sitio automáticamente
(GitHub Actions, archivo `.github/workflows/publicar.yml`). Tarda 1–2 minutos;
el avance se ve en la pestaña **Actions** del repositorio.
