export type EnergyType = "Solare" | "Eolico" | "Idroelettrico";

export type EnergySite = {
    name: string;
    province: string;
    lat: number;
    lng: number;
    type: EnergyType;
    energy: number;
};

export const energySites: EnergySite[] = [
    { name: "Lurate Caccivio", province: "Como", lat: 45.765861, lng: 8.994639, type: "Solare", energy: 1050 },
    { name: "Appiano Gentile", province: "Como", lat: 45.735611, lng: 8.980917, type: "Solare", energy: 1080 },
    { name: "Cantù", province: "Como", lat: 45.738056, lng: 9.132417, type: "Solare", energy: 1100 },
    { name: "Cernobbio", province: "Como", lat: 45.843028, lng: 9.071944, type: "Solare", energy: 1200 },
    { name: "Como", province: "Como", lat: 45.808056, lng: 9.085176, type: "Solare", energy: 1300 },

    { name: "Monte Palanzone", province: "Como", lat: 45.862028, lng: 9.203722, type: "Eolico", energy: 4700 },
    { name: "Monte Bisbino", province: "Como", lat: 45.872139, lng: 9.059278, type: "Eolico", energy: 5000 },
    { name: "Monte San Primo", province: "Como", lat: 45.916667, lng: 9.208889, type: "Eolico", energy: 5100 },
    { name: "Monte Generoso", province: "Como", lat: 45.931556, lng: 9.019583, type: "Eolico", energy: 5600 },

    { name: "Malgrate", province: "Lecco", lat: 45.849194, lng: 9.376, type: "Solare", energy: 1150 },
    { name: "Valmadrera", province: "Lecco", lat: 45.847444, lng: 9.358028, type: "Solare", energy: 1180 },
    { name: "Lecco", province: "Lecco", lat: 45.857278, lng: 9.405167, type: "Solare", energy: 1250 },

    { name: "Monte San Martino", province: "Lecco", lat: 45.944472, lng: 9.387528, type: "Eolico", energy: 4000 },
    { name: "Monte Cornizzolo", province: "Lecco", lat: 45.837083, lng: 9.302444, type: "Eolico", energy: 4300 },
    { name: "Monte Resegone", province: "Lecco", lat: 45.85875, lng: 9.468361, type: "Eolico", energy: 4900 },
    { name: "Monte Legnone", province: "Lecco", lat: 46.083444, lng: 9.399444, type: "Eolico", energy: 5800 },

    { name: "Tradate", province: "Varese", lat: 45.709806, lng: 8.909583, type: "Solare", energy: 1100 },
    { name: "Busto Arsizio", province: "Varese", lat: 45.611972, lng: 8.852028, type: "Solare", energy: 1180 },
    { name: "Gallarate", province: "Varese", lat: 45.660278, lng: 8.791389, type: "Solare", energy: 1190 },
    { name: "Varese", province: "Varese", lat: 45.818194, lng: 8.826389, type: "Solare", energy: 1220 },
    { name: "Saronno", province: "Varese", lat: 45.624417, lng: 9.035833, type: "Solare", energy: 1250 },

    { name: "Monte Chiusarella", province: "Varese", lat: 45.873611, lng: 8.814083, type: "Eolico", energy: 4500 },
    { name: "Monte Campo dei Fiori", province: "Varese", lat: 45.895722, lng: 8.805333, type: "Eolico", energy: 5400 },

    { name: "Biasca", province: "Ticino", lat: 46.35, lng: 8.966667, type: "Solare", energy: 1350 },
    { name: "Bellinzona", province: "Ticino", lat: 46.189806, lng: 9.035194, type: "Solare", energy: 1400 },
    { name: "Locarno", province: "Ticino", lat: 46.1835, lng: 8.797528, type: "Solare", energy: 1450 },
    { name: "Mendrisio", province: "Ticino", lat: 45.888528, lng: 8.983444, type: "Solare", energy: 1500 },

    { name: "Lugano", province: "Ticino", lat: 46.002222, lng: 8.955278, type: "Idroelettrico", energy: 3600 },
    { name: "Monte Tamaro", province: "Ticino", lat: 46.1, lng: 8.883333, type: "Eolico", energy: 5200 },
];

export const energyTypeColors: Record<EnergyType, string> = {
    Solare: "#ffd700",
    Eolico: "#4aa3ff",
    Idroelettrico: "#00c851",
};

export function formatEnergy(value: number): string {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1)} GWh/anno`;
    }

    return `${value} MWh/anno`;
}