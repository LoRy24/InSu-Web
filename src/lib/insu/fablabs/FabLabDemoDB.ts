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
        "FabLab dedicato ad attività informatiche e di progettazione 3D.",
        "GuanzateIO è un FabLab realizzato per dare una nuova vita ad un capannone presente nel paese, rimasto inutilizzato per svariati anni. Lo scopo è di fornire un luogo comune dove possibile utilizzare servizi informatici e improntati alla stampa 3D, grazie ad un'importante 3D Farm realizzabile all'interno della struttura.",
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
            new FileReference("Documentazione","/app_data/resources/fablabs/3/files/MARELLIl.pdf",FileType.DOCUMENT)
        ],
        45.81011888908896,
        9.216596326734741
    ),
    // endregion
    // region Blue Star Market
    new FabLab(
        4,
        "Blue Star Market",
        "Via Giuseppe Garibaldi 21",
        "Bregnano",
        "Como",
        22070,
        "Il progetto prevede la realizzazione di un laboratorio di reti professionale su due piani, con VLAN, server, firewall e sistemi di sicurezza dedicati, per garantire formazione pratica avanzata, affidabilità e protezione dei da",
        "Il Laboratorio di Reti Professionale – Blue Star Market di Bregnano (CO) è una struttura di circa 940 m² distribuita su Piano Terra e Piano Interrato, dotata di un’infrastruttura di rete moderna, sicura e scalabile.\n\nL’architettura è di tipo gerarchico (Core–Distribution–Access), con dorsali in fibra ottica OM5 tra MDF e IDF e cablaggio orizzontale in rame Cat. 6A per un totale di 250 prese RJ45. Sono presenti 5 rack professionali, core switch Layer 3, router WAN, firewall ridondati, server virtualizzati, NAS/SAN e segmentazione avanzata tramite VLAN con indirizzamento IPv4 dedicato.\n\nGli ambienti comprendono aule LAN Base e Cisco Lab, NOC, laboratorio di cablaggio, area coworking, server room, sala sicurezza e laboratorio WAN/fibra ottica. L’intera infrastruttura è supportata da UPS, linee elettriche dedicate, controllo climatico e sistemi di sicurezza, garantendo elevati standard di affidabilità, protezione e formazione tecnica avanzata.",
        [
        FabLabTag.TECH_INFO,
            FabLabTag.TECH_NETWORKS,
            FabLabTag.TECH_ELECTRONICS,
            FabLabTag.TECH_WEB
        ],
        FabLabState.READY,
        "/app_data/resources/fablabs/4/banner/banner.png",
        [
            "/app_data/resources/fablabs/4/photos/1.png",
            "/app_data/resources/fablabs/4/photos/2.png",
            "/app_data/resources/fablabs/4/photos/3.png",
            "/app_data/resources/fablabs/4/photos/4.png",
            "/app_data/resources/fablabs/4/photos/5.png",
            "/app_data/resources/fablabs/4/photos/6.png"
        ],
        [
            new FileReference("Documentazione", "/app_data/resources/fablabs/4/files/SCHEDA DI CABLAGGIO STRUTTURATO.pdf", FileType.DOCUMENT)
        ],
        45.69677,
        9.06415
    ),
    // endregion
    // region Reti e Tecnologie
    new FabLab(
        6,
        "Reti e Tecnologie",
        "Via Giuseppe Negrini 7/9/11",
        "Cermenate",
        "Como IT",
        22072,
        "Il progetto prevede la riqualificazione dell’ex asilo Giuseppe Garbagnati ad Asnago di Cermenate, trasformandolo in un centro tecnologico dedicato alla formazione e alla sperimentazione pratica. L’edificio ospiterà aule teoriche, laboratori per tecnologie innovative come stampa 3D, robotica e intelligenza artificiale, oltre a una moderna infrastruttura di rete progettata per attività didattiche e simulazioni informatiche.",
        "Il progetto riguarda la riconversione dell’ex asilo Giuseppe Garbagnati, situato ad Asnago di Cermenate, in un moderno centro di formazione tecnologica. L’edificio, attualmente inutilizzato, verrà riqualificato per ospitare attività didattiche teoriche e pratiche legate alle nuove tecnologie, come stampa 3D, robotica, intelligenza artificiale e simulazioni di reti informatiche.\nLa struttura sarà organizzata principalmente su un piano dedicato alle attività didattiche, con un’aula teorica dotata di circa venti postazioni, laboratori tecnologici per esercitazioni pratiche e spazi dedicati ai docenti e al personale tecnico. Inoltre sarà presente un locale tecnico con server room e apparati di rete, che costituirà il cuore dell’infrastruttura informatica dell’edificio.\nL’intero edificio sarà dotato di un’infrastruttura di rete moderna, basata su cablaggio strutturato e fibra ottica, progettata per garantire prestazioni elevate, sicurezza e possibilità di espansione futura. La rete permetterà la gestione di diverse attività didattiche, la separazione del traffico tramite VLAN e la simulazione di ambienti di rete reali. In questo modo lo stabile verrà trasformato da edificio storico inutilizzato a spazio innovativo dedicato alla formazione tecnologica e allo sviluppo di competenze digitali.",
        [
            FabLabTag.TECH_NETWORKS,
            FabLabTag.TECH_ELECTRONICS,
            FabLabTag.TECH_WEB
        ],
        FabLabState.READY,
        "/app_data/resources/fablabs/6/banner/banner.png",
        [
            "/app_data/resources/fablabs/6/photos/1.jpeg"
        ],
        [
            new FileReference("Documentazione", "/app_data/resources/fablabs/6/files/Progetto sistemi upgrade.pdf", FileType.DOCUMENT)
        ],
        45.7047,
        9.0922
    ),
    // endregion
    // region Programmiamoci
    new FabLab(
        7,
        "Programmiamoci",
        "Piazza La Torre 22",
        "Centro Valle Intelvi",
        "Como(ITALIA)",
        22023,
        "Il progetto “Programmiamoci” prevede la realizzazione di un laboratorio dedicato all’introduzione alla programmazione per i ragazzi della Valle Intelvi. L’obiettivo è creare uno spazio educativo dotato di postazioni informatiche e connessione di rete, dove gli studenti possano imparare le basi del coding attraverso attività pratiche, sviluppando logica, creatività e capacità di problem solving.",
        "Il progetto “Programmiamoci” riguarda la creazione di un laboratorio educativo pensato per avvicinare i giovani della Valle Intelvi al mondo della programmazione. L’obiettivo è offrire uno spazio moderno e attrezzato in cui studenti e educatori possano svolgere attività didattiche legate al coding, alla logica e alle tecnologie digitali. All’interno del laboratorio saranno presenti diverse postazioni informatiche che permetteranno ai partecipanti di sperimentare in modo pratico lo sviluppo di piccoli programmi e progetti. Il laboratorio è progettato per favorire l’apprendimento collaborativo, stimolare la curiosità verso l’informatica e sviluppare competenze come il pensiero logico, la creatività e il problem solving, creando un ambiente dinamico e coinvolgente dedicato alla formazione tecnologica.",
        [
            FabLabTag.TECH_INFO,
            FabLabTag.TECH_ELECTRONICS,
            FabLabTag.TECH_WEB
        ],
        FabLabState.READY,
        "/app_data/resources/fablabs/7/banner/banner.png",
        [
            "/app_data/resources/fablabs/7/photos/1.jpeg"
        ],
        [
            new FileReference("Documentazione", "/app_data/resources/fablabs/7/files/GABRIELE DE NICOLA - consegna cablaggio 1.pdf", FileType.DOCUMENT)
        ],
        45.95485,
        9.09015
    ),
    // endregion
    // region Au Lac
    new FabLab(
        16,
        "Au Lac",
        "Via Vecchia Regina Teodolinda 101",
        "Laglio",
        "Como (IT)",
        22010,
        "Il FabLab realizzato all’interno dell’ex Hotel Plinio Au Lac, situato a Laglio, è un laboratorio tecnologico organizzato su quattro piani dedicati alla produzione e alla lavorazione di diversi materiali. Gli spazi sono suddivisi in aree specifiche per incisione su legno e metalli, lavorazione del legno, lavorazione del metallo e assemblaggio finale. Ogni piano è dotato di postazioni informatiche, macchinari di lavorazione e strumenti necessari per lo sviluppo e la realizzazione di progetti tecnologici e artigianali.",
        "Il FabLab situato nell’edificio dell’ex Hotel Plinio Au Lac, nel comune di Laglio, è uno spazio tecnologico progettato per ospitare attività di progettazione, lavorazione dei materiali e realizzazione di prodotti. La struttura è organizzata su quattro piani, ognuno destinato a una specifica fase del processo produttivo, in modo da creare un percorso di lavoro progressivo dalla lavorazione iniziale dei materiali fino all’assemblaggio finale.\n\nIl primo piano è dedicato all’incisione su legno e metalli. In questa area sono presenti macchinari controllati da computer che permettono di incidere e lavorare i materiali con precisione, realizzando componenti personalizzati e dettagli tecnici.\n\nIl secondo piano ospita la zona di lavorazione del legno, dove vengono effettuate operazioni di taglio, modellazione e lavorazione delle parti in legno. Questo spazio è destinato alla produzione di elementi strutturali o decorativi che potranno essere utilizzati nelle fasi successive del processo.\n\nIl terzo piano è dedicato alla lavorazione del metallo. In quest’area sono presenti attrezzature e postazioni informatiche utilizzate per la gestione delle lavorazioni e per il controllo delle macchine impiegate nella produzione di componenti metallici.\n\nIl quarto piano è destinato all’assemblaggio e alla rifinitura dei prodotti. Qui vengono montati i componenti realizzati nei piani inferiori e completati i progetti. L’ambiente è organizzato con diverse postazioni di lavoro che permettono la collaborazione tra gli operatori e la realizzazione delle fasi finali di produzione.\n\nNel complesso il FabLab rappresenta uno spazio di lavoro strutturato che integra tecnologia, lavorazione dei materiali e attività collaborative, permettendo la realizzazione di progetti tecnici e prodotti attraverso un’organizzazione degli spazi distribuita su più livelli dell’edificio.",
        [FabLabTag.CRAFTSMANSHIP_WOOD, FabLabTag.CRAFTSMANSHIP_METAL],
        FabLabState.READY,
        "/app_data/resources/fablabs/16/banner/banner.jpeg",
        ["/app_data/resources/fablabs/16/photos/1.jpeg"],
        [new FileReference("Documentazione","/app_data/resources/fablabs/16/files/FabLab Au Lac.docx",FileType.DOCUMENT)],
        45.5318,
        9.0835
    ),
    // endregion
    // region GeLAN
    new FabLab(
        18,
        "GeLAN",
        "Piazza Castello 5/B, 22060 Carimate (CO)",
        "Carimate",
        "Como",
        22060,
        "Il progetto prevede la realizzazione di un’infrastruttura di rete per la riqualificazione dell’ex gelateria “Zia Nelly” situata a Carimate.\nLa rete sarà progettata con cablaggio strutturato Cat.6, topologia a stella e uno switch centrale, in modo da collegare i principali dispositivi del locale come cassa, PC gestionale, stampante, telecamere di videosorveglianza e access point Wi-Fi.\nL’obiettivo è creare una rete affidabile, sicura e scalabile, adatta alle esigenze di una piccola attività commerciale.",
        "Il progetto riguarda la progettazione e la realizzazione di un’infrastruttura di rete per la riqualificazione dell’ex gelateria “Zia Nelly”, situata nel comune di Carimate. L’obiettivo è trasformare il locale in una nuova attività commerciale dotata di una rete moderna, efficiente e sicura, in grado di supportare i principali servizi informatici necessari al funzionamento della gelateria.\n\nLa rete sarà realizzata tramite cablaggio strutturato in categoria 6, che garantisce velocità fino a 1 Gbps e un buon livello di affidabilità. L’architettura scelta è una topologia a stella, con uno switch centrale che collega tutti i dispositivi della rete, tra cui il sistema di cassa e POS, il computer gestionale, la stampante di rete, le telecamere IP di videosorveglianza e un access point Wi-Fi per la connessione wireless.\n\nAll’interno del locale tecnico sarà installato un armadio rack da muro da 12U, contenente router, switch, patch panel e un gruppo di continuità UPS, utile per garantire il funzionamento della rete anche in caso di brevi interruzioni della corrente elettrica. L’infrastruttura prevede inoltre misure di sicurezza come messa a terra certificata, protezione da sovratensioni e sistema di videosorveglianza collegato alla rete.\n\nIl progetto include anche la pianificazione del cablaggio orizzontale con 14 prese RJ45, distribuite tra area vendita, laboratorio e dispositivi di sicurezza. La rete sarà dimensionata per circa 12 dispositivi attivi, con possibilità di espansione fino a 25–30 host, permettendo eventuali futuri ampliamenti dell’attività.",
        [FabLabTag.TECH_INFO, FabLabTag.TECH_NETWORKS],
        FabLabState.READY,
        "/app_data/resources/fablabs/18/banner/banner.png",
        ["/app_data/resources/fablabs/18/photos/1.png", "/app_data/resources/fablabs/18/photos/2.png"],
        [new FileReference("Documentazione","/app_data/resources/fablabs/18/files/SCHEDA DI CABLAGGIO.pdf",FileType.DOCUMENT)],
        45.70255,
        9.11506
    ),
    // endregion
    // region Water Center
    new FabLab(
        19,
        "Water Center",
        "Via lega lombarda, snc",
        "Albavilla",
        "Como (IT)",
        22031,
        "Punto di raccolta per le acque piovane e zona di erogazione di acqua potabile.",
        "Il Water Center nasce dalla riqualifica del lavatoio di Carcano con lo scopo di fornire, agli abitanti della zona, un luogo in cui rifornirsi di acqua potabile gasata o naturale.\nL'acqua impiegata proviene direttamente dalle fonti sottostanti alla zona e, prima di essere resa disponibile, subisce un processo di depurazione.\nIl Water Center offre anche un servizio di raccolta delle acque piovane, il quale viene messo a disposizione: al pronto intervento in caso di necessità, principalmente con lo scopo di estinguere incendi dolosi, oppure a servizio degli altri FabLab improntati all'attività agricola.",
        [FabLabTag.AGRICOLTURE_VEGETABLE_GARDENS, FabLabTag.AGRICOLTURE_HYDROPONIC_GREENHOUSES, FabLabTag.AGRICOLTURE_FLORICOLTURE, FabLabTag.AGRICOLTURE_OFFICINAL],
        FabLabState.READY,
        "/app_data/resources/fablabs/19/banner/banner.jpg",
        ["/app_data/resources/fablabs/19/photos/1.jpg"],
        [new FileReference("Documentazione","/app_data/resources/fablabs/19/files/Documentazione riqualifica luogo per progetto Rotari.pdf",FileType.DOCUMENT)],
        45.4725,
        9.1203
    ),
    // endregion
    new FabLab(
        10,
        "Bocciodromo",
        "",
        "Albese con Cassano",
        "Como (IT)",
        0,
        "Un vecchio Bocciodromo abbandonato che viene riqualificato come \"centro civico\" così da ottenere uno spazio per ragazzi aperto il più tempo possibile così da ricavare un luogo di ritrovo dove svagarsi.",
        "",
        [FabLabTag.TECH_INFO, FabLabTag.TECH_NETWORKS, FabLabTag.ART_PAINT, FabLabTag.ART_MUSIC, FabLabTag.AGRICOLTURE_VEGETABLE_GARDENS, FabLabTag.AGRICOLTURE_FLORICOLTURE],
        FabLabState.READY,
        "/app_data/resources/fablabs/10/banner/banner.png",
        ["/app_data/resources/fablabs/10/photos/1.png"],
        [new FileReference("Documentazione","/app_data/resources/fablabs/10/files/SCHEDA DI RIQUALIFICAZIONE DEL BOCCIODROMO DI ALBESE CON CASSANO.pdf",FileType.DOCUMENT)],
        0.0,
        0.0
    ),
];