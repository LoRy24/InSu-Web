// ItinerarioDataset.ts
// Dati statici del Tour Naturalistico-Sportivo: Como, Varese, Ticino

export type TipologiaAttivita =
  | "trekking"
  | "panorama"
  | "trasporto"
  | "sport-acqua"
  | "cultura"
  | "natura";

export type MovimentoTipo =
  | "treno"
  | "bus"
  | "funicolare"
  | "a-piedi"
  | "auto";

export interface TappaItinerario {
  id: string;
  giorno: 1 | 2 | 3 | 4 | 5;
  nome: string;
  descrizione: string;
  tipo: TipologiaAttivita;
  coords: [number, number]; // [lat, lng]
  durata?: string;
  accesso?: string;
  prezzo?: string;
  extra?: string;
  movimento?: MovimentoTipo;
}

export type Itinerario = {
  id: string;
  titolo: string;
  sottotitolo: string;
  giorniConfig?: Record<number, { label: string; color: string; bgColor: string }>;
  tappe: TappaItinerario[];
};

export const TAPPE: TappaItinerario[] = [
  // ── GIORNO 1 – COMO ──────────────────────────────────────────────
  {
    id: "como-stazione",
    giorno: 1,
    nome: "Stazione Como San Giovanni",
    descrizione: "Punto di partenza del tour. Da qui si raggiunge il lungolago a piedi.",
    tipo: "trasporto",
    coords: [45.8019, 9.0777],
    durata: "–",
    accesso: "Stazione FS",
    movimento: "treno",
  },
  {
    id: "como-lungolago",
    giorno: 1,
    nome: "Lungolago Viale Geno",
    descrizione:
      "Passeggiata panoramica sul Lago di Como. Percorso di 3 km dal centro alla funicolare, in gran parte pianeggiante.",
    tipo: "panorama",
    coords: [45.8007, 9.0866],
    durata: "41 min a piedi (3 km)",
    accesso: "Gratuito, sempre aperto",
  },
  {
    id: "como-funicolare",
    giorno: 1,
    nome: "Funicolare Como–Brunate",
    descrizione:
      "Funicolare storica che porta da Como a Brunate in soli 7 minuti. Vista mozzafiato sul lago e sulle Alpi.",
    tipo: "trasporto",
    coords: [45.7994, 9.0892],
    durata: "7 min (funicolare)",
    accesso: "Biglietto A/R ~€6",
    movimento: "funicolare",
  },
  {
    id: "como-parco-spina-verde",
    giorno: 1,
    nome: "Parco Spina Verde",
    descrizione:
      "Parco naturale sopra Como, ottimo punto d'ingresso per i sentieri verso la Croce di Sant'Eutichio.",
    tipo: "natura",
    coords: [45.8055, 9.0710],
    durata: "–",
    accesso: "Gratuito",
  },
  {
    id: "como-croce-sant-eutichio",
    giorno: 1,
    nome: "Croce di Sant'Eutichio",
    descrizione:
      "Meta trekking a 524 m s.l.m. raggiungibile in 14 min dal Parco Spina Verde (700 m, via Monte Croce).",
    tipo: "trekking",
    coords: [45.8089, 9.0680],
    durata: "14 min dal Parco Spina Verde",
    accesso: "Gratuito",
  },
  {
    id: "como-panchina-panoramica",
    giorno: 1,
    nome: "Panchina Panoramica (Laghetto Monte Croce)",
    descrizione:
      "Punto panoramico a 2 min dalla Croce di Sant'Eutichio. Vista sul lago e sulle Prealpi Comasche.",
    tipo: "panorama",
    coords: [45.8098, 9.0669],
    durata: "2 min dalla Croce",
    accesso: "Gratuito",
  },
  {
    id: "como-belvedere-baita-elisa",
    giorno: 1,
    nome: "Belvedere Baita Elisa",
    descrizione:
      "Belvedere raggiungibile in 21 min dalla panchina panoramica (1,3 km via Monte Croce). Ristoro disponibile.",
    tipo: "panorama",
    coords: [45.8011, 9.0652],
    durata: "21 min dalla panchina",
    accesso: "Gratuito",
  },

  // ── GIORNO 2 – VARESE ────────────────────────────────────────────
  {
    id: "varese-sacro-monte",
    giorno: 2,
    nome: "Sacro Monte di Varese",
    descrizione:
      "Percorso UNESCO tra 14 cappelle con statue e affreschi. Circa 5 km A/R, dislivello 200 m. Panorama sulla città e sulle Prealpi.",
    tipo: "trekking",
    coords: [45.8649, 8.7636],
    durata: "2 ore camminata continua",
    accesso: "Gratuito, sempre aperto",
    extra: "Patrimonio UNESCO",
  },
  {
    id: "varese-campo-dei-fiori",
    giorno: 2,
    nome: "Parco Regionale Campo dei Fiori",
    descrizione:
      "Foreste, prati, fauna locale e panorami sulle Alpi e sul Lago di Varese. Diversi sentieri CAI segnati.",
    tipo: "natura",
    coords: [45.8852, 8.7603],
    durata: "2–4 ore",
    accesso: "Gratuito",
  },
  {
    id: "varese-lago-schiranna",
    giorno: 2,
    nome: "Lago di Varese – Parco Luigi Zanzi (Schiranna)",
    descrizione:
      "Anello pianeggiante di circa 3 km sul lungolago. Ideale per corsa, camminata o ciclismo.",
    tipo: "sport-acqua",
    coords: [45.8371, 8.7219],
    durata: "~45 min (anello 3 km)",
    accesso: "Gratuito, sempre aperto",
  },

  // ── GIORNO 3 – VARESE (sport & natura) ───────────────────────────
  {
    id: "varese-canottaggio",
    giorno: 3,
    nome: "Canottaggio Lago di Varese (Schiranna)",
    descrizione:
      "Osservazione degli allenamenti di canottaggio. Orari: 6:30–9:00 e 17:00–19:00. Accesso pubblico gratuito.",
    tipo: "sport-acqua",
    coords: [45.8358, 8.7205],
    durata: "Osservazione libera",
    accesso: "Pubblico, gratuito",
  },
  {
    id: "varese-giardini-estensi",
    giorno: 3,
    nome: "Giardini Estensi",
    descrizione:
      "Giardini storici con fontane, sculture e alberi secolari. Ottimi per passeggiata, jogging o esplorazione naturalistica.",
    tipo: "natura",
    coords: [45.8186, 8.8244],
    durata: "1–2 ore",
    accesso: "Gratuito",
  },
  {
    id: "varese-sacro-monte-g3",
    giorno: 3,
    nome: "Sacro Monte + Campo dei Fiori (opzionale)",
    descrizione:
      "Ripetizione opzionale del percorso del giorno 2 per chi vuole un trekking più impegnativo. Salite panoramiche, vista sulle Alpi.",
    tipo: "trekking",
    coords: [45.8710, 8.7620],
    durata: "2–4 ore",
    accesso: "Gratuito",
  },

  // ── GIORNO 4 – TICINO (Bellinzona + Lugano) ──────────────────────
  {
    id: "bellinzona-castelli",
    giorno: 4,
    nome: "Castelli di Bellinzona",
    descrizione:
      "Trekking urbano tra i tre castelli medievali patrimonio UNESCO. Camminamenti sulle mura, vista sulla Valle del Ticino.",
    tipo: "cultura",
    coords: [46.1949, 9.0226],
    durata: "2–3 ore",
    accesso: "Pass 3 castelli: CHF 28",
    extra: "Apr–Ott 10:00–18:00 / Nov–Mar 10:30–16:00",
  },
  {
    id: "lugano-monte-san-salvatore",
    giorno: 4,
    nome: "Monte San Salvatore (Lugano)",
    descrizione:
      "Trekking panoramico raggiungibile con funicolare da Paradiso. Multipli percorsi in cima, discese a piedi possibili.",
    tipo: "trekking",
    coords: [45.9722, 8.9239],
    durata: "2–3 ore in cima",
    accesso: "Funicolare A/R: CHF 32",
    extra: "Orari: 9:00–17:00 (stagionale)",
    movimento: "funicolare",
  },
  {
    id: "lugano-lungolago",
    giorno: 4,
    nome: "Lungolago di Lugano",
    descrizione:
      "Percorso pianeggiante con vista sul lago e sulle montagne. Ideale per defaticamento o jogging leggero a fine giornata.",
    tipo: "sport-acqua",
    coords: [46.0037, 8.9511],
    durata: "1–2 ore",
    accesso: "Gratuito, sempre aperto",
  },
];

export const TAPPE_PATRIMONIO_CULTURALE: TappaItinerario[] = [
  // ── GIORNO 1 – COMO ──────────────────────────────────────────────
  {
    id: "como-centro-storico",
    giorno: 1,
    nome: "Centro storico di Como",
    descrizione:
      "Como come città di origine romana (Novum Comum) e centro culturale medievale e rinascimentale.",
    tipo: "cultura",
    coords: [45.8086, 9.0836],
    durata: "2 ore",
    accesso: "Duomo, mura romane, centro storico",
    extra: "Periodo: età romana, Medioevo, età moderna",
  },
  {
    id: "como-patrimonio-seta",
    giorno: 1,
    nome: "Patrimonio industriale della seta",
    descrizione:
      "La seta trasforma Como in un polo industriale europeo tra fabbriche, lavoro femminile e innovazione tecnica.",
    tipo: "cultura",
    coords: [45.8086, 9.0836],
    durata: "2 ore",
    accesso: "Museo della Seta; ex setifici (Borghi, Camerlata)",
    prezzo: "Museo della Seta: circa 10 euro",
    extra: "Periodo: XIX–XX secolo",
  },
  {
    id: "como-tempio-voltiano",
    giorno: 1,
    nome: "Tempio Voltiano e lungolago",
    descrizione:
      "Scienza e industria: Alessandro Volta come simbolo del progresso tecnologico.",
    tipo: "cultura",
    coords: [45.8086, 9.0836],
    durata: "1–1h30",
    prezzo: "Ingresso: 5 euro",
  },

  // ── GIORNO 2 – VARESE ────────────────────────────────────────────
  {
    id: "trasferimento-como-varese",
    giorno: 2,
    nome: "Trasferimento Como → Varese",
    descrizione: "Treno Como S. Giovanni → Varese FS.",
    tipo: "trasporto",
    coords: [45.8186, 8.8244],
    durata: "~1 h",
    prezzo: "6–7 euro",
    movimento: "treno",
  },
  {
    id: "varese-centro-giardini-estensi",
    giorno: 2,
    nome: "Centro storico di Varese e Giardini Estensi",
    descrizione:
      "Varese sette-ottocentesca come città residenziale, amministrativa e culturale.",
    tipo: "cultura",
    coords: [45.8186, 8.8244],
    durata: "1–1h30",
    accesso: "Centro storico; Giardini Estensi",
    extra: "Epoca: XVIII–XIX secolo; Personaggi: Paolo Carcano, Giovanni Macchi",
  },
  {
    id: "varese-villa-panza",
    giorno: 2,
    nome: "Villa Panza – arte e cultura del Novecento",
    descrizione:
      "Da dimora aristocratica a valorizzazione culturale contemporanea, con una collezione di arte americana.",
    tipo: "cultura",
    coords: [45.8186, 8.8244],
    durata: "1h30",
    prezzo: "Biglietto: circa 15 euro",
    extra: "Epoca: XVIII secolo – XX secolo; Personaggi: Giuseppe Panza di Biumo",
  },
  {
    id: "oria-villa-fogazzaro",
    giorno: 2,
    nome: "Villa Fogazzaro Roi – letteratura e identità borghese",
    descrizione:
      "Residenza di Antonio Fogazzaro, autore di Piccolo mondo antico.",
    tipo: "cultura",
    coords: [45.9895, 8.9511],
    durata: "1–1h30",
    prezzo: "Ingresso: circa 7 euro",
    extra: "Epoca: XIX secolo; Personaggi: Antonio Fogazzaro",
  },

  // ── GIORNO 4 – TICINO: BELLINZONA ───────────────────────────────
  {
    id: "trasferimento-varese-bellinzona",
    giorno: 4,
    nome: "Trasferimento Varese → Bellinzona",
    descrizione: "Treno Varese → Mendrisio → Bellinzona.",
    tipo: "trasporto",
    coords: [46.1949, 9.0226],
    durata: "1h45–2h",
    prezzo: "16–20 euro",
    movimento: "treno",
  },
  {
    id: "bellinzona-castelli-unesco",
    giorno: 4,
    nome: "Castelli di Bellinzona (UNESCO)",
    descrizione:
      "Sistema difensivo medievale che controllava le vie alpine, fondamentale per commerci e traffici.",
    tipo: "cultura",
    coords: [46.1949, 9.0226],
    durata: "2–3 ore",
    prezzo: "Biglietto 3 castelli: CHF 28",
    extra: "Periodo: Medioevo",
  },
  {
    id: "bellinzona-moderna-ferroviaria",
    giorno: 4,
    nome: "Bellinzona moderna e ferroviaria",
    descrizione:
      "La ferrovia del Gottardo e le infrastrutture trasformano Bellinzona in nodo strategico europeo.",
    tipo: "cultura",
    coords: [46.1949, 9.0226],
  },

  // ── GIORNO 5 – TICINO: LUGANO ───────────────────────────────────
  {
    id: "trasferimento-bellinzona-lugano",
    giorno: 5,
    nome: "Trasferimento Bellinzona → Lugano",
    descrizione: "Treno Bellinzona → Lugano.",
    tipo: "trasporto",
    coords: [46.0037, 8.9511],
    durata: "~30 min",
    prezzo: "CHF 10–12",
    movimento: "treno",
  },
  {
    id: "lugano-lungolago-storico",
    giorno: 5,
    nome: "Lungolago di Lugano",
    descrizione:
      "Sviluppo urbano, turismo e servizi come nuova forma di economia moderna.",
    tipo: "cultura",
    coords: [46.0037, 8.9511],
    durata: "1–2 ore",
  },
  {
    id: "lugano-san-salvatore",
    giorno: 5,
    nome: "Monte San Salvatore",
    descrizione:
      "Funicolare storica come simbolo di turismo, tecnologia e valorizzazione del paesaggio.",
    tipo: "trekking",
    coords: [45.9722, 8.9239],
    accesso: "Funicolare A/R: CHF 32",
    movimento: "funicolare",
  },
];

export const ITINERARI: Itinerario[] = [
  {
    id: "itinerario-a",
    titolo: "Tour Naturalistico-Sportivo",
    sottotitolo: "Como · Varese · Ticino — 4 giorni",
    tappe: TAPPE,
  },
  {
    id: "itinerario-b",
    titolo: "Tour Patrimonio-Culturale",
    sottotitolo: "Como · Varese · Ticino · Bellinzona · Lugano",
    giorniConfig: {
      1: { label: "Giorno 1 – Como", color: "#38bdf8", bgColor: "#0c4a6e" },
      2: { label: "Giorno 2 – Varese", color: "#4ade80", bgColor: "#14532d" },
      4: { label: "Giorno 4 – Bellinzona", color: "#f472b6", bgColor: "#500724" },
      5: { label: "Giorno 5 – Lugano", color: "#93c5fd", bgColor: "#1e3a8a" },
    },
    tappe: TAPPE_PATRIMONIO_CULTURALE,
  },
];

// Colori e label per giorno
export const GIORNI_CONFIG: Record<
  number,
  { label: string; color: string; bgColor: string }
> = {
  1: { label: "Giorno 1 – Como", color: "#38bdf8", bgColor: "#0c4a6e" },
  2: { label: "Giorno 2 – Varese", color: "#4ade80", bgColor: "#14532d" },
  3: { label: "Giorno 3 – Varese Sport", color: "#facc15", bgColor: "#713f12" },
  4: { label: "Giorno 4 – Ticino", color: "#f472b6", bgColor: "#500724" },
  5: { label: "Giorno 5 – Lugano", color: "#93c5fd", bgColor: "#1e3a8a" },
};

// Colori per tipo attività
export const TIPO_COLORS: Record<TipologiaAttivita, string> = {
  trekking: "#f97316",
  panorama: "#a78bfa",
  trasporto: "#94a3b8",
  "sport-acqua": "#22d3ee",
  cultura: "#fb923c",
  natura: "#4ade80",
};

export const MOVIMENTO_META: Record<MovimentoTipo, { label: string; icon: string }> = {
  treno: { label: "Treno", icon: "train-front" },
  bus: { label: "Bus", icon: "bus-front" },
  funicolare: { label: "Funicolare", icon: "train-front" },
  "a-piedi": { label: "A piedi", icon: "person-walking" },
  auto: { label: "Auto", icon: "car-front" },
};
