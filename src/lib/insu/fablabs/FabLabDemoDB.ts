// In futuro deve essere rimpiazzato con una chiamata API che mi ottiene i FabLabs registrati nella piattaforma

import {FabLab, FabLabState, FabLabTag} from "./FabLab";
import {FileReference, FileType} from "@/lib/insu/File";

export const FabLabsTestArray: FabLab[] = [
    // region GuanzateIO
    new FabLab(
        0,
        "GuanzateIO",
        "Via M. Carrara 4",
        "Guanzate",
        "Como (IT)",
        22070,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        [
            FabLabTag.TECH_WEB,
            FabLabTag.TECH_INFO,
            FabLabTag.TECH_MOBILE,
            FabLabTag.TECH_MECHANICAL,
            FabLabTag.TECH_DESIGN,
        ],
        FabLabState.READY,
        "/app_data/resources/fablabs/0/banner.png",
        [
            "/app_data/resources/fablabs/0/photos/1.png",
            "/app_data/resources/fablabs/0/photos/2.png",
            "/app_data/resources/fablabs/0/photos/3.png",
            "/app_data/resources/fablabs/0/photos/4.png",
        ],
        [
            new FileReference(
                "Documentazione",
                "/app_data/resources/fablabs/0/files/Progetto realizzazione FabLab Guanzate.pdf",
                FileType.DOCUMENT
            )
        ],
        45.7220087,
        9.0105897
    ),
    // endregion
    // region FenLabX
    new FabLab(
        1,
        "FenLabX",
        "Via XXV Aprile 7",
        "Fenegrò",
        "CO (ITALIA)",
        22070, // ZIPCODE
        "FabLab dedicato a stampa 3D e fabbricazione digitale",
        "Spazio di aggregazione, formazione e produzione dedicato alla stampa 3D, modellazione e fabbricazione digitale. Il FabLab nasce dalla riconversione di un ex supermercato e offre supporto tecnico, formazione avanzata e infrastruttura professionale per scuole, artigiani e appassionati.",
        [
            FabLabTag.TECH_MECHANICAL
        ],
        FabLabState.READY,
        "/app_data/resources/fablabs/1/banner.jpeg",
        [
            "/app_data/resources/fablabs/1/photos/1.jpeg",
            "/app_data/resources/fablabs/1/photos/2.jpeg",
            "/app_data/resources/fablabs/1/photos/3.jpeg",
            "/app_data/resources/fablabs/1/photos/4.jpeg"
        ],
        [
            new FileReference(
                "Documentazione",
                "/app_data/resources/fablabs/1/files/documentazione.pdf",
                FileType.DOCUMENT
            )
        ],
        45.70014, // LATITUDINE
        8.99728 // LONGITUDINE
    ),
    // endregion
    // region Abbaz.Io
    new FabLab(
        2,
        "Abbaz.Io",
        "Via Abbazia",
        "Vertemate con Minoprio",
        "Como (IT)",
        12345, // ZIPCODE
        "Recupero dell’Abbazia di San Giovanni a Vertemate con Minoprio, oggi privata e in parte degradata.\n\nPulizia, messa in sicurezza e impianti sostenibili per riaprirla a usi culturali.",
        "Il progetto punta a riqualificare l’Abbazia di San Giovanni (XI secolo) rimuovendo vegetazione e degrado e consolidando le strutture.\n\n Sono previsti fotovoltaico e illuminazione a basso impatto per rendere il complesso più sostenibile.\nL’area verrebbe usata per attività culturali e didattiche, come visite guidate e spazi formativi.\nIn più, si prevedono aree per artigiani e un rilancio turistico per il territorio.",
        [
            FabLabTag.ART_PAINT,
            FabLabTag.ART_WRITING,
            FabLabTag.ART_MUSIC,
            FabLabTag.AGRICOLTURE_VEGETABLE_GARDENS,
            FabLabTag.AGRICOLTURE_HYDROPONIC_GREENHOUSES,
            FabLabTag.AGRICOLTURE_BEEHIVES,
            FabLabTag.AGRICOLTURE_COMPOSTING,
            FabLabTag.AGRICOLTURE_FLORICOLTURE,
            FabLabTag.AGRICOLTURE_OFFICINAL
        ],
        FabLabState.READY,
        "/app_data/resources/fablabs/2/banner.jpeg",
        [
            "/app_data/resources/fablabs/2/photos/1.jpeg",
            "/app_data/resources/fablabs/2/photos/2.jpeg",
            "/app_data/resources/fablabs/2/photos/3.jpeg",
        ],
        [
            new FileReference(
                "Documentazione",
                "/app_data/resources/fablabs/1/files/documentazione.pdf",
                FileType.DOCUMENT
            )
        ],
        45.731365, // LATITUDINE
        9.084284 // LONGITUDINE
    ),
    // endregion
    // region ReLab
    new FabLab(
        3,
        "Fab ReLab",
        "Via Crotto Rosa, 11 ",
        "Erba",
        "CO",
        22036,
        "Un laboratorio innovativo dove puoi realizzare i tuoi progetti, stampare in 3D, tagliare al laser e saldare con strumenti professionali. Accedi con un abbonamento conveniente e utilizza materiali acquistabili direttamente sul posto. Un negozio di componenti elettrici a prezzi competitivi completa l’esperienza.",
        "Benvenuti a Fab ReLab, il nuovo laboratorio creativo e tecnologico situato nell’ex Istituto Cristo Re di Erba. Il nostro spazio è pensato per chi vuole trasformare le proprie idee in realtà: dai makers agli hobbisti, dagli studenti ai professionisti.\n\nAll’interno troverai:\n\nLaboratori attrezzati con stampanti 3D (FDM e resina), taglio laser, postazioni di saldatura e strumenti professionali per assemblare e costruire i tuoi progetti.\n\nNegozio di componenti elettrici con prezzi convenienti simili agli store online, dove puoi acquistare transistor, condensatori, led, schede e molto altro.\n\nL’accesso al FabLab avviene tramite un abbonamento economico, che ti permette di utilizzare gli strumenti del laboratorio in totale sicurezza e autonomia. I materiali (filamenti, resina, legno, ecc.) si pagano in base all’uso, così puoi stampare o tagliare solo ciò che ti serve.\n\nChe tu voglia costruire prototipi, riparare dispositivi, realizzare gadget o semplicemente sperimentare, FabLab Erba ti offre tutto lo spazio, gli strumenti e le risorse necessarie per dare vita alle tue idee, in un ambiente stimolante e collaborativo.",
        [
        FabLabTag.TECH_INFO,
            FabLabTag.TECH_NETWORKS,
            FabLabTag.TECH_ELECTRONICS,
            FabLabTag.TECH_MOBILE,
            FabLabTag.TECH_WEB,
            FabLabTag.TECH_DESIGN,
            FabLabTag.TECH_MECHANICAL,
            FabLabTag.CRAFTSMANSHIP_WOOD,
            FabLabTag.CRAFTSMANSHIP_METAL,
            FabLabTag.CRAFTSMANSHIP_LEATHER,
            FabLabTag.CRAFTSMANSHIP_MECHANICS,
            FabLabTag.CRAFTSMANSHIP_REPAIR
        ],
        FabLabState.READY,
        "/app_data/resources/fablabs/3/banner/banner.png",
        [
            "/app_data/resources/fablabs/3/photos/1.jpg",
            "/app_data/resources/fablabs/3/photos/2.webp"
        ],
        [

        ],
        45.81011888908896,
        9.216596326734741
    ),
    // endregion

];