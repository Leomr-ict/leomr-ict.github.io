// ============================================================
//  CONTENIDO DEL PORTAFOLIO
//  Este es el único archivo que necesitas editar para cambiar
//  textos, fechas, proyectos o links. Cada texto tiene su
//  versión en español (es) y en inglés (en).
//  Al guardar, el sitio se actualiza solo (con npm run dev).
// ============================================================

/** Un texto en los dos idiomas del sitio. */
export type Texto = { es: string; en: string }

/** Nivel real de una herramienta (ver `niveles` más abajo). */
export type Nivel = 'profesional' | 'proyectos' | 'inicial'

// ---------- Datos personales ----------
export const persona = {
  nombre: 'Leonardo Muñoz Rosel',
  iniciales: 'LM',
  // Para poner tu foto: copia el archivo a public/foto.jpg y escribe '/foto.jpg'.
  // Si queda vacío ('') se muestra un círculo con tus iniciales.
  foto: '/foto.jpg',
  titulo: {
    es: 'Analista de Datos | Telecomunicaciones',
    en: 'Data Analyst | Telecommunications',
  },
  frase: {
    es: 'Ingeniero Civil en Telecomunicaciones y Magíster en Ciencias de la Ingeniería. Convierto mediciones de redes ópticas en datos confiables, análisis y modelos de machine learning.',
    en: 'Telecommunications Engineer with an MSc in Engineering Sciences. I turn optical network measurements into reliable data, analysis and machine learning models.',
  },
  ubicacion: { es: 'Santiago, Chile', en: 'Santiago, Chile' },
  disponibilidad: { es: 'Disponibilidad inmediata', en: 'Available immediately' },
  idiomas: { es: 'Inglés B2 certificado', en: 'English B2 (certified)' },
  correo: 'leomr.ict@gmail.com',
  linkedin: 'https://www.linkedin.com/in/leomr-ict/',
  github: 'https://github.com/leomr-ict',
  cvPdf: '/cv/Leonardo_Munoz_CV.pdf',
  publicaciones: 'https://drive.google.com/drive/folders/1eg9mwp9k84VoN-9YW-N7gGMAvBkmTpSh?usp=sharing',
}

// ---------- Experiencia (línea de tiempo) ----------
export const experiencia: {
  tipo: Texto
  cargo: Texto
  lugar: Texto
  fechas: Texto
  logros: Texto[]
  tecnologias: string[]
}[] = [
  {
    tipo: { es: 'Laboral', en: 'Work' },
    cargo: { es: 'Ingeniero de I+D', en: 'R&D Engineer' },
    lugar: {
      es: 'Proyecto FONDECYT "Towards Smart Optical Networks: Devices and Control Plane"',
      en: 'FONDECYT project "Towards Smart Optical Networks: Devices and Control Plane"',
    },
    fechas: { es: 'abr. 2024 – ene. 2026', en: 'Apr 2024 – Jan 2026' },
    logros: [
      {
        es: 'Implementé y evalué sistemas DWDM de hasta 95 canales sobre fibra de 100 a 300 km, con EDFA y WSS.',
        en: 'Deployed and evaluated DWDM systems of up to 95 channels over 100–300 km of fiber, with EDFAs and WSS.',
      },
      {
        es: 'Automaticé con Python la extracción y organización de mediciones desde instrumentos (potencia, ganancia, n.º de canales, marca de tiempo).',
        en: 'Automated with Python the extraction and organization of instrument measurements (power, gain, channel count, timestamp).',
      },
      {
        es: 'Monitoreé y analicé KPI (potencia óptica, ganancia por canal, OSNR, BER) con Python y Pandas para detectar desviaciones, anomalías y fallas de configuración.',
        en: 'Monitored and analyzed KPIs (optical power, per-channel gain, OSNR, BER) with Python and Pandas to detect deviations, anomalies and configuration faults.',
      },
      {
        es: 'Construí y validé 4 datasets experimentales (≈300, ≈500, ≈1.000 y más de 5.000 muestras) para análisis comparativos y machine learning.',
        en: 'Built and validated 4 experimental datasets (≈300, ≈500, ≈1,000 and over 5,000 samples) for comparative analysis and machine learning.',
      },
      {
        es: 'Identifiqué la saturación del EDFA a alta potencia como origen de errores de estimación de OSNR cercanos a 1 dB.',
        en: 'Identified EDFA saturation at high power as the source of OSNR estimation errors close to 1 dB.',
      },
      {
        es: 'Presenté resultados en IMOC 2025 (Brasil, en inglés) y CHILECON 2025, y coordiné reuniones de seguimiento con un equipo multidisciplinario.',
        en: 'Presented results at IMOC 2025 (Brazil, in English) and CHILECON 2025, and coordinated follow-up meetings with a multidisciplinary team.',
      },
    ],
    tecnologias: ['Python', 'Pandas', 'MATLAB', 'Excel', 'DWDM', 'EDFA', 'OSA', 'OTDR'],
  },
  {
    tipo: { es: 'Académica', en: 'Academic' },
    cargo: { es: 'Ayudante de cátedra', en: 'Teaching Assistant' },
    lugar: {
      es: 'Redes Ópticas, Comunicaciones Ópticas y Dispositivos de Estado Sólido',
      en: 'Optical Networks, Optical Communications and Solid-State Devices',
    },
    fechas: { es: '2024 – 2025', en: '2024 – 2025' },
    logros: [],
    tecnologias: [],
  },
]

// ---------- Formación ----------
export const formacion: { titulo: Texto; institucion: string; fechas: Texto; detalle?: Texto }[] = [
  {
    titulo: {
      es: 'Magíster en Ciencias de la Ingeniería, mención Ingeniería Eléctrica',
      en: 'MSc in Engineering Sciences, major in Electrical Engineering',
    },
    institucion: 'Universidad de Concepción',
    fechas: { es: 'mar. 2024 – mar. 2026', en: 'Mar 2024 – Mar 2026' },
    detalle: {
      es: 'Tesis: incertidumbre operacional en EDFA y estimación de QoT en enlaces ópticos multitramo.',
      en: 'Thesis: operational uncertainty in EDFAs and QoT estimation in multi-span optical links.',
    },
  },
  {
    titulo: { es: 'Ingeniería Civil en Telecomunicaciones', en: 'Telecommunications Engineering' },
    institucion: 'Universidad de Concepción',
    fechas: { es: 'mar. 2018 – dic. 2024', en: 'Mar 2018 – Dec 2024' },
  },
]

export const cursos: { nombre: Texto; entidad: string; fecha: Texto }[] = [
  {
    nombre: { es: 'Networking Basics', en: 'Networking Basics' },
    entidad: 'Cisco Networking Academy',
    fecha: { es: 'jun. 2026', en: 'Jun 2026' },
  },
  {
    nombre: { es: 'Análisis de Antenas y 5G con Ansys HFSS', en: 'Antenna and 5G Analysis with Ansys HFSS' },
    entidad: 'Instituto ESSS Virtual',
    fecha: { es: 'may. 2026', en: 'May 2026' },
  },
  {
    nombre: { es: 'Certificación de Inglés B2', en: 'English Proficiency Certification B2' },
    entidad: 'Universidad de Concepción',
    fecha: { es: '2025', en: '2025' },
  },
  {
    nombre: { es: 'Seeds for the Future', en: 'Seeds for the Future' },
    entidad: 'Huawei',
    fecha: { es: '2023', en: '2023' },
  },
]

export const reconocimientos: Texto[] = [
  { es: 'Best Student Paper Award – IMOC 2025 (Brasil)', en: 'Best Student Paper Award – IMOC 2025 (Brazil)' },
  {
    es: 'Ganador del concurso "Tesis en 3 minutos" – Congreso de Tecnologías de la Información 2024',
    en: 'Winner of the "3-Minute Thesis" contest – Information Technology Congress 2024',
  },
]

// ---------- Herramientas ----------
// Nivel real de cada herramienta:
export const niveles: Record<Nivel, Texto> = {
  profesional: { es: 'Experiencia laboral', en: 'Work experience' },
  proyectos: { es: 'Proyectos', en: 'Projects' },
  inicial: { es: 'Nivel inicial', en: 'Beginner' },
}

export const herramientas: { grupo: Texto; items: { nombre: Texto | string; nivel: Nivel }[] }[] = [
  {
    grupo: { es: 'Datos', en: 'Data' },
    items: [
      { nombre: 'Python (Pandas)', nivel: 'profesional' },
      { nombre: 'MATLAB', nivel: 'profesional' },
      { nombre: { es: 'Excel (tablas dinámicas, BUSCARX, Power Query)', en: 'Excel (pivot tables, XLOOKUP, Power Query)' }, nivel: 'profesional' },
      { nombre: { es: 'SQL (JOINs, CTE, funciones de ventana)', en: 'SQL (JOINs, CTEs, window functions)' }, nivel: 'proyectos' },
      { nombre: { es: 'Visualización (Matplotlib, Seaborn)', en: 'Visualization (Matplotlib, Seaborn)' }, nivel: 'profesional' },
      { nombre: 'NumPy / SciPy', nivel: 'proyectos' },
      { nombre: 'SQLite / SQL Server / MySQL', nivel: 'proyectos' },
      { nombre: 'Jupyter / Google Colab', nivel: 'proyectos' },
      { nombre: 'Power BI', nivel: 'inicial' },
      { nombre: 'MongoDB', nivel: 'inicial' },
    ],
  },
  {
    grupo: { es: 'Machine Learning', en: 'Machine Learning' },
    items: [
      { nombre: { es: 'TensorFlow / Keras (redes neuronales)', en: 'TensorFlow / Keras (neural networks)' }, nivel: 'profesional' },
      { nombre: 'scikit-learn', nivel: 'profesional' },
      { nombre: 'PyTorch', nivel: 'proyectos' },
      { nombre: { es: 'Regresión, clasificación, MAE/MSE', en: 'Regression, classification, MAE/MSE' }, nivel: 'profesional' },
      { nombre: { es: 'Transfer learning y fine-tuning', en: 'Transfer learning and fine-tuning' }, nivel: 'proyectos' },
      { nombre: 'Data augmentation', nivel: 'proyectos' },
      { nombre: { es: 'Optuna (búsqueda de hiperparámetros)', en: 'Optuna (hyperparameter search)' }, nivel: 'proyectos' },
      { nombre: { es: 'Validación cruzada sin fuga de datos', en: 'Leakage-free cross-validation' }, nivel: 'proyectos' },
      { nombre: { es: 'Dify (agentes de IA, RAG básico)', en: 'Dify (AI agents, basic RAG)' }, nivel: 'proyectos' },
      { nombre: 'n8n', nivel: 'inicial' },
    ],
  },
  {
    grupo: { es: 'Telecomunicaciones', en: 'Telecommunications' },
    items: [
      { nombre: { es: 'Fibra óptica, DWDM, EDFA, WSS', en: 'Optical fiber, DWDM, EDFA, WSS' }, nivel: 'profesional' },
      { nombre: 'OSA, OTDR, transponders 100/200 Gbps', nivel: 'profesional' },
      { nombre: { es: 'KPI ópticos: OSNR, BER, potencia, ganancia', en: 'Optical KPIs: OSNR, BER, power, gain' }, nivel: 'profesional' },
      { nombre: 'Redes IP (TCP/IP, VLAN, OSPF)', nivel: 'inicial' },
      { nombre: { es: '4G/5G, RF y antenas (Ansys HFSS)', en: '4G/5G, RF and antennas (Ansys HFSS)' }, nivel: 'inicial' },
      { nombre: 'FTTH/FTTx', nivel: 'inicial' },
    ],
  },
  {
    grupo: { es: 'Nube', en: 'Cloud' },
    items: [
      { nombre: { es: 'AWS S3 (capa gratuita)', en: 'AWS S3 (free tier)' }, nivel: 'inicial' },
      { nombre: { es: 'Microsoft Azure (capa gratuita)', en: 'Microsoft Azure (free tier)' }, nivel: 'inicial' },
      { nombre: 'Docker Compose', nivel: 'inicial' },
    ],
  },
  {
    grupo: { es: 'Desarrollo y trabajo en equipo', en: 'Development & teamwork' },
    items: [
      { nombre: { es: 'Word / PowerPoint (informes técnicos)', en: 'Word / PowerPoint (technical reports)' }, nivel: 'profesional' },
      { nombre: 'Git / GitHub', nivel: 'proyectos' },
      { nombre: { es: 'pytest (pruebas automáticas)', en: 'pytest (automated testing)' }, nivel: 'proyectos' },
      { nombre: { es: 'APIs REST (requests)', en: 'REST APIs (requests)' }, nivel: 'proyectos' },
      { nombre: 'GitHub Actions', nivel: 'proyectos' },
      { nombre: 'Selenium', nivel: 'inicial' },
      { nombre: 'Linux (Ubuntu)', nivel: 'inicial' },
      { nombre: 'Jira / Notion', nivel: 'inicial' },
    ],
  },
]

// ---------- Proyectos ----------
// Para agregar el link a un repositorio público, completa `repo` con la URL.
// Si `repo` queda vacío (''), la tarjeta no muestra el botón.
export const proyectos: {
  titulo: Texto
  tipo: Texto
  descripcion: Texto
  cifras: Texto[]
  tecnologias: string[]
  repo: string
}[] = [
  {
    titulo: {
      es: 'Tesis: ganancia de amplificadores ópticos con transfer learning',
      en: 'Thesis: optical amplifier gain prediction with transfer learning',
    },
    tipo: { es: 'Académico', en: 'Academic' },
    descripcion: {
      es: 'Red neuronal en PyTorch preentrenada con 126.320 mediciones públicas (COSMOS) y especializada con transfer learning en dos fases para 4 EDFA medidos en laboratorio. Usé data augmentation y búsqueda de hiperparámetros con Optuna, y la evalué en un enlace real de 200 km con incertidumbre de potencia.',
      en: 'PyTorch neural network pretrained on 126,320 public measurements (COSMOS) and fine-tuned with two-phase transfer learning for 4 lab-measured EDFAs. I used data augmentation and Optuna hyperparameter search, and evaluated it on a real 200 km link under power uncertainty.',
    },
    cifras: [
      { es: 'Error de ganancia: 0,42 → 0,18 dB (−58 %)', en: 'Gain error: 0.42 → 0.18 dB (−58 %)' },
      { es: 'Validación cruzada sin fuga de datos', en: 'Leakage-free cross-validation' },
      { es: 'Enlace real: −33 % de error en el primer tramo', en: 'Real link: −33 % error on the first span' },
    ],
    tecnologias: [
      'Python', 'PyTorch', 'Transfer learning', 'Fine-tuning', 'Data augmentation', 'Optuna',
      'Validación cruzada', 'pandas', 'NumPy', 'SciPy', 'Matplotlib', 'pytest', 'EDFA', 'QoT',
    ],
    repo: 'https://github.com/leomr-ict/edfa-transfer-learning',
  },
  {
    titulo: { es: 'JobMatch CL', en: 'JobMatch CL' },
    tipo: { es: 'Personal', en: 'Personal' },
    descripcion: {
      es: 'Buscador de empleo para Chile: extrae ofertas de varios portales, las guarda sin duplicados y las compara con el CV mediante reglas. Genera un informe diario en HTML y un panel local para seguir las postulaciones.',
      en: 'Job search tool for Chile: collects postings from several job boards, stores them without duplicates and matches them against a CV with rules. Produces a daily HTML report and a local panel to track applications.',
    },
    cifras: [
      { es: 'Más de 700 ofertas procesadas', en: 'Over 700 postings processed' },
      { es: 'Búsqueda diaria completa en ~100 s', en: 'Full daily search in ~100 s' },
    ],
    tecnologias: ['Python', 'SQLite', 'HTML', 'pytest', 'GitHub Actions'],
    repo: '',
  },
  {
    titulo: { es: 'Data Quality Copilot', en: 'Data Quality Copilot' },
    tipo: { es: 'Personal', en: 'Personal' },
    descripcion: {
      es: 'Agente de IA que audita la calidad de métricas de red móvil (RAN y CDR). Python genera un dataset sintético, reglas SQL detectan registros incompletos o inexactos y el agente (Dify + Gemini) los analiza.',
      en: 'AI agent that audits the quality of mobile network metrics (RAN and CDR). Python generates a synthetic dataset, SQL rules flag incomplete or inaccurate records and the agent (Dify + Gemini) analyzes them.',
    },
    cifras: [
      { es: '5.050 registros RAN sintéticos (20 celdas, 4 regiones)', en: '5,050 synthetic RAN records (20 cells, 4 regions)' },
      { es: '~350 registros con errores detectados', en: '~350 faulty records flagged' },
    ],
    tecnologias: ['Python', 'Pandas', 'SQL', 'SQLite', 'Dify', 'Gemini API', 'Docker Compose'],
    repo: '',
  },
  {
    titulo: { es: 'Dashboard de ventas en Power BI', en: 'Sales dashboard in Power BI' },
    tipo: { es: 'Personal (práctica)', en: 'Personal (practice)' },
    descripcion: {
      es: 'Datos públicos de Kaggle cargados en SQL Server con un modelo estrella. Consultas SQL de KPI, tendencia de pedidos, porcentaje de ventas y mejores/peores productos, presentadas en un dashboard.',
      en: 'Public Kaggle data loaded into SQL Server with a star schema. SQL queries for KPIs, order trends, sales share and best/worst products, presented in a dashboard.',
    },
    cifras: [],
    tecnologias: ['SQL Server', 'SQL', 'Power BI', 'Modelo estrella'],
    repo: '',
  },
]

// ---------- Publicaciones ----------
export const publicaciones: {
  evento: string
  rol: Texto
  titulo: string
  destacado?: Texto
  resumen: Texto
}[] = [
  {
    evento: 'IMOC 2025',
    rol: { es: 'Autor', en: 'Author' },
    titulo: 'Parametric Sensitivity Analysis of EDFA Gain Ripple Using a Data-driven Machine Learning Model',
    destacado: { es: 'Best Student Paper Award', en: 'Best Student Paper Award' },
    resumen: {
      es: 'Red neuronal entrenada con más de 5.000 muestras: MAE de 0,04 dB en la estimación de ganancia.',
      en: 'Neural network trained on over 5,000 samples: 0.04 dB MAE in gain estimation.',
    },
  },
  {
    evento: 'Sensors 2025',
    rol: { es: 'Coautor', en: 'Co-author' },
    titulo: 'High-Accuracy Deep Learning-based Detection and Classification Model in Color-Shift Keying Optical Camera Communication Systems',
    resumen: {
      es: 'Validación experimental con ≈1.000 muestras: 98,4 % de precisión de clasificación.',
      en: 'Experimental validation with ≈1,000 samples: 98.4 % classification accuracy.',
    },
  },
  {
    evento: 'CHILECON 2025',
    rol: { es: 'Autor', en: 'Author' },
    titulo: 'Experimental Characterization of Power-Aware OSNR Error in EDFA Links for Data-Driven QoT Modeling',
    resumen: {
      es: 'Enlace de 200 km y ≈500 muestras: error de OSNR acumulado de ≈1 dB, mayor a alta potencia.',
      en: '200 km link and ≈500 samples: accumulated OSNR error of ≈1 dB, higher at high power.',
    },
  },
  {
    evento: 'CHILECON 2025',
    rol: { es: 'Autor', en: 'Author' },
    titulo: 'Strategic LED Placement for Blooming Mitigation in Optical Camera Communication',
    resumen: {
      es: 'Disposición diagonal de LEDs: BER reducido de ≈0,52 a 10⁻⁴ a 30 cm, sin costo adicional.',
      en: 'Diagonal LED layout: BER reduced from ≈0.52 to 10⁻⁴ at 30 cm, at no extra cost.',
    },
  },
]

// ---------- Textos de la interfaz (menú, botones, títulos) ----------
export const textos = {
  menu: {
    'sobre-mi': { es: 'Sobre mí', en: 'About' },
    experiencia: { es: 'Experiencia', en: 'Experience' },
    formacion: { es: 'Formación', en: 'Education' },
    herramientas: { es: 'Herramientas', en: 'Skills' },
    proyectos: { es: 'Proyectos', en: 'Projects' },
    publicaciones: { es: 'Publicaciones', en: 'Publications' },
    contacto: { es: 'Contacto', en: 'Contact' },
  },
  descargarCv: { es: 'Descargar CV', en: 'Download CV' },
  correo: { es: 'Correo', en: 'Email' },
  cursos: { es: 'Cursos y certificaciones', en: 'Courses and certifications' },
  reconocimientos: { es: 'Reconocimientos', en: 'Awards' },
  verRepo: { es: 'Ver código', en: 'View code' },
  verPublicaciones: { es: 'Ver todas mis publicaciones', en: 'See all my publications' },
  contactoTexto: {
    es: '¿Buscas a alguien para análisis de datos o telecomunicaciones? Escríbeme y conversemos.',
    en: 'Looking for someone in data analysis or telecommunications? Send me a message.',
  },
  hecho: { es: 'Hecho con React, TypeScript y Tailwind CSS.', en: 'Built with React, TypeScript and Tailwind CSS.' },
  cambiarTema: { es: 'Cambiar tema claro/oscuro', en: 'Toggle light/dark theme' },
  abrirMenu: { es: 'Abrir menú', en: 'Open menu' },
}
