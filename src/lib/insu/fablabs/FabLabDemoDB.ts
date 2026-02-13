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
];