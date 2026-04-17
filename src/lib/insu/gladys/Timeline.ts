export type Era = "preistoria" | "antica" | "medioevo" | "moderna" | "contemporanea";
export type Territory = "como" | "varese" | "ticino";

export type EventItem = {
    year: number;
    title: string;
    territory: Territory;
    era: Era;
    detail: string;
    img: string;
};

export const eventsData: EventItem[] = [
    {
        year: -10000,
        title: "Popolazioni preistoriche e siti neolitici (Como)",
        territory: "como",
        era: "preistoria",
        detail:
            "Nella preistoria il lago di Como e le colline circostanti erano frequentati da cacciatori-raccoglitori. Reperti litici e ceramici del Neolitico (V millennio a.C.) sono emersi a Pian di Spagna e sul Monte Baradello, testimoniando i primi insediamenti stabili.",
        img: "https://2.bp.blogspot.com/-q4DUAROPayA/Wc1ihDiemvI/AAAAAAAAdw4/mYNoEY10XiUiRIh4_b3QOIko9YzwrGH6gCLcBGAs/w1200-h630-p-k-no-nu/paleolitici-min.jpg",
    },
    {
        year: -10000,
        title: "Villaggi palafitticoli e cultura di Golasecca (Varese)",
        territory: "varese",
        era: "preistoria",
        detail:
            "Area varesina ricca di insediamenti palafitticoli dell'età del Bronzo (patrimonio UNESCO Lago di Varese). In età del Ferro si sviluppa la cultura di Golasecca (VII-IV sec a.C.) con necropoli e traffici commerciali verso l'Europa.",
        img: "https://storiearcheostorie.com/wp-content/uploads/2021/11/pfahlbauten_unteruhldingen_2005_05.jpg",
    },
    {
        year: -10000,
        title: "Leponti e culture pre-romane (Ticino)",
        territory: "ticino",
        era: "preistoria",
        detail:
            "Il Ticino conserva tracce di stazioni neolitiche e ripari sottoroccia. I Leponti, popolazione celtico-ligure, dominano la regione prima dell'arrivo romano, lasciando iscrizioni leponzie e necropoli a Solduno e Giubiasco.",
        img: "https://archeologiagalliacisalpina.wordpress.com/wp-content/uploads/2025/04/cropped-img202302251146057200273015903453017.webp",
    },
    {
        year: -600,
        title: "Cultura di Golasecca (insediamenti protourbani)",
        territory: "varese",
        era: "preistoria",
        detail:
            "Tra VI e IV sec a.C. la cultura di Golasecca, attorno ai laghi di Varese e Comabbio, raggiunge il suo apice con centri come Castelletto sopra Ticino. Produzione di ceramica e metalli, contatti con gli Etruschi.",
        img: "https://www.lagomaggiore.net/blog/wp-content/uploads/2014/07/cultura-di-golasecca.jpg",
    },
    {
        year: -196,
        title: "Conquista romana e Novum Comum (Como)",
        territory: "como",
        era: "antica",
        detail:
            "Nel 196 a.C. Como viene sottomessa dai Romani. Sotto Cesare (59 a.C.) rifondata come Novum Comum, diventa municipium della Regio XI. Fioriscono commerci, terme e una cinta muraria.",
        img: "https://edoardonoseda.com/wp-content/uploads/2018/02/img_1546.jpg?w=584",
    },
    {
        year: -150,
        title: "Vicus e strade romane nel varesotto (Varese)",
        territory: "varese",
        era: "antica",
        detail:
            "Dopo la conquista (II sec a.C.), l'ager di Varese è costellato da vici come Velate e Castelseprio. La via Mediolanum-Verbannus attraversa l'area, favorendo l'integrazione con Milano e i valichi alpini.",
        img: "https://viestoriche.net/indexold/sacrimonti/sm-viabilita/mappa-acridotta.jpg",
    },
    {
        year: -150,
        title: "Vie alpine e centro di Bellinzona (Ticino)",
        territory: "ticino",
        era: "antica",
        detail:
            "Il Ticino diventa crocevia di strade romane. Bellinzona (castelli antichi) e Locarno diventano stazioni strategiche lungo il percorso del Gottardo. Numerosi ritrovamenti di epigrafi e monete.",
        img: "https://hls-dhs-dss.ch/download/Articles/008569/2013-07-17/med008569-00017/00017_it.svg?width=450&rev=1.2",
    },
    {
        year: -77,
        title: "Fondazione di Novum Comum per volere di Cesare",
        territory: "como",
        era: "antica",
        detail:
            "Gaio Giulio Cesare rifonda Como come 'Novum Comum', concedendo a 5000 coloni diritti latini. La città diventa un importante centro strategico e commerciale sul lago.",
        img: "https://archeologicacomo.com/wp-content/uploads/2020/11/novumcomum.jpg",
    },
    {
        year: 69,
        title: "Anno dei quattro imperatori: Como e Varese nel caos",
        territory: "varese",
        era: "antica",
        detail:
            "Durante la guerra civile romana, i territori di Como e Varese subiscono saccheggi e requisizioni da parte delle legioni in lotta per il trono imperiale.",
        img: "https://antoniolombardi00.altervista.org/alterpages/annodei4imperatori-1574457324630.png",
    },
    {
        year: 312,
        title: "Battaglia di Ponte Milvio e diffusione cristiana (Como)",
        territory: "como",
        era: "antica",
        detail:
            "Nel IV secolo Como abbraccia il cristianesimo. La tradizione attribuisce a San Felice e San Carpoforo il martirio. La città possiede una delle prime diocesi della Transpadana.",
        img: "https://www.ordinecostantinianoitalia.org/wp-content/uploads/2025/10/BATTAGLIA-DI-PONTE-MILVIO_01.jpg",
    },
    {
        year: 452,
        title: "Invasione degli Unni di Attila (Como e Varese)",
        territory: "como",
        era: "antica",
        detail:
            "Attila e i suoi Unni devastano l'Italia settentrionale. Como e i centri del varesotto vengono saccheggiati e molte popolazioni cercano rifugio sulle isole del lago.",
        img: "https://www.summagallicana.it/lessico/l/Longobardi%20principali%20tappe%20migrazione.jpg",
    },
    {
        year: 569,
        title: "Dominio longobardo (Como e Varese)",
        territory: "como",
        era: "medioevo",
        detail:
            "Dopo la calata dei Longobardi, Como e gran parte del varesotto entrano nel Ducato di Milano. Castelseprio diviene un importante gastaldato longobardo (Patrimonio UNESCO).",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Castelseprio_ruins.jpg",
    },
    {
        year: 774,
        title: "Carlo Magno e Sacro Romano Impero (Ticino)",
        territory: "ticino",
        era: "medioevo",
        detail:
            "Carlo Magno conquista il Regno longobardo; il Ticino viene integrato nel Sacro Romano Impero. Pieve e monasteri si sviluppano a San Pietro (Bellinzona) e a San Vittore.",
        img: "https://static.oilproject.org/content/17660/forlin_immagine_1_bis.jpg",
    },
    {
        year: 840,
        title: "Incursioni ungare e saracene (Ticino e Varese)",
        territory: "ticino",
        era: "medioevo",
        detail:
            "Nel IX secolo, orde di Ungari e Saraceni saccheggiano le valli alpine. Il Ticino subisce devastazioni; vengono erette torri di avvistamento e fortificazioni difensive.",
        img: "https://www.atuttascuola.it/wp-content/uploads/2019/01/sez02_09_normanni.jpg",
    },
    {
        year: 1120,
        title: "Guerra decennale Como vs Milano",
        territory: "como",
        era: "medioevo",
        detail:
            "Aspra lotta tra il libero Comune di Como e Milano (1118–1127). Nel 1127 Como viene rasa al suolo, ma risorge decenni dopo con l'appoggio di Federico Barbarossa.",
        img: "https://www.ilgiornaledelricordo.it//img/post-gallery/691__il_ba_2103200632.jpeg",
    },
    {
        year: 1158,
        title: "Federico Barbarossa e la Lega Lombarda",
        territory: "como",
        era: "medioevo",
        detail:
            "Barbarossa scende in Italia. Como, fedele all'imperatore, ottiene privilegi e la ricostruzione delle mura. Il territorio partecipa alle lotte contro Milano.",
        img: "https://www.ousia.it/stodoku/lib/exe/fetch.php?media=volume_1:barbarossa:640px-milan_leaders_surrender_to_barbarossa_year1162.jpg",
    },
    {
        year: 1287,
        title: "Distruzione di Castelseprio e ascesa di Varese",
        territory: "varese",
        era: "medioevo",
        detail:
            "Il potente borgo di Castelseprio viene distrutto dai milanesi (1287). Varese, centro minore fino ad allora, inizia ad assumere rilievo amministrativo e militare.",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Castelseprio%2C_area_archeologica%2C_basilica_di_san_giovanni_evangelista_04.jpg",
    },
    {
        year: 1335,
        title: "Signoria Viscontea (Como e Varese)",
        territory: "como",
        era: "medioevo",
        detail:
            "Azzone Visconti conquista Como e Varese, incorporandole nel Ducato di Milano. Vengono costruite fortificazioni e il castello di Baradello diventa baluardo.",
        img: "https://libropiuweb.mondadorieducation.it/media/libropiu/contenuti/978882474434_calvani_storiemondi/vol1/cap16/03carta/media/immagine1.jpg",
    },
    {
        year: 1422,
        title: "Battaglia di Arbedo (Ticino conteso)",
        territory: "ticino",
        era: "medioevo",
        detail:
            "Le truppe ducali milanesi sconfiggono i confederati svizzeri ad Arbedo. Il Ticino resta al Ducato fino alla fine del XV secolo, quando i cantoni iniziano a premere sui baliaggi.",
        img: "https://naufraghi.ch/wp-content/uploads/2022/06/Arbedo1422.jpg",
    },
    {
        year: 1478,
        title: "Battaglia di Giornico (Ticino)",
        territory: "ticino",
        era: "medioevo",
        detail:
            "28 dicembre 1478: i confederati svizzeri sconfiggono le truppe milanesi nella val Leventina. La vittoria consolida l'influenza svizzera sul Ticino.",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Giornico_Schilling_1478.jpg",
    },
    {
        year: 1513,
        title: "Battaglia di Novara e conquista svizzera (Ticino)",
        territory: "ticino",
        era: "moderna",
        detail:
            "Nel 1513 la Confederazione Svizzera conquista stabilmente il Ticino dopo la battaglia di Novara. Bellinzona, Locarno, Lugano e Mendrisio diventano baliaggi soggetti ai cantoni svizzeri.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Schlacht_bei_Novara_1513.jpg",
    },
    {
        year: 1521,
        title: "Dominio spagnolo su Como e Varese",
        territory: "como",
        era: "moderna",
        detail:
            "Carlo V conquista il Ducato di Milano. Como e Varese subiscono la dominazione spagnola (1521–1706). Vengono erette nuove mura e la città di Como vive una fase di declino economico.",
        img: "https://images.treccani.it/ext-tool/intra/images/d/d1/Storia_im_carlo_v_fig_vol1_014730_002.jpg",
    },
    {
        year: 1555,
        title: "Riforma protestante nel Ticino",
        territory: "ticino",
        era: "moderna",
        detail:
            "La Riforma protestante si diffonde in alcune valli ticinesi (Valle Maggia, Val Bavona). Nascono comunità riformate, ma la Controriforma cattolica prevale nel secolo successivo.",
        img: "https://www.worldhistory.org/img/c/p/1200x627/14972.png",
    },
    {
        year: 1630,
        title: "Peste manzoniana (Como e Varese)",
        territory: "varese",
        era: "moderna",
        detail:
            "La terribile epidemia di peste del 1630 colpisce duramente i territori lariani. Il lago di Como e Varese vedono decimata la popolazione, come raccontato ne I Promessi Sposi.",
        img: "https://www.lestoriedimonteviale.it/wp-content/uploads/2020/03/promessi-sposi-la-peste.jpg",
    },
    {
        year: 1706,
        title: "Passaggio agli Asburgo (Como e Varese)",
        territory: "como",
        era: "moderna",
        detail:
            "Dopo l'assedio di Torino, il Ducato di Milano passa agli Asburgo d'Austria. Como e Varese entrano nella Lombardia austriaca, vivendo un periodo di riforme e sviluppo.",
        img: "https://www.milanocittastato.it/wp-content/uploads/2020/12/ferdinando.jpg",
    },
    {
        year: 1765,
        title: "Feudo estense a Varese (età teresiana)",
        territory: "varese",
        era: "moderna",
        detail:
            "Maria Teresa d'Austria concede Varese in feudo a Francesco III d'Este. La città vive un rinnovamento urbanistico con la costruzione di ville patrizie (Villa Recalcati).",
        img: "https://www.timetravel-vienna.at/wp-content/uploads/2025/12/kaiserin-maria-theresia.jpg",
    },
    {
        year: 1798,
        title: "Invasione francese e Repubblica Cisalpina (Como)",
        territory: "como",
        era: "moderna",
        detail:
            "Napoleone invade l'Italia settentrionale. Como e Varese entrano nella Repubblica Cisalpina (1797-1802). Vengono soppressi gli ordini religiosi e incamerati i beni ecclesiastici.",
        img: "https://www.worldhistory.org/img/r/p/750x750/17286.jpg?v=1713152285-1681889252",
    },
    {
        year: 1803,
        title: "Atto di Mediazione — Nascita Cantone Ticino",
        territory: "ticino",
        era: "contemporanea",
        detail:
            "Napoleone promulga l'Atto di Mediazione: il Canton Ticino nasce come cantone sovrano della Confederazione Svizzera, unendo i baliaggi italiani.",
        img: "https://naxos-cdn01.gruppocdt.ch/cdt/stories/historical/960x640/dd554d52-def6-49a3-93d6-fa34279928db.jpg",
    },
    {
        year: 1815,
        title: "Congresso di Vienna e nuova stabilità (Ticino)",
        territory: "ticino",
        era: "contemporanea",
        detail:
            "Il Congresso di Vienna riconosce il Canton Ticino come membro della Confederazione Svizzera. Vengono definiti i confini con il Regno Lombardo-Veneto.",
        img: "https://cdn.studenti.stbm.it/images/2016/10/20/congresso-di-vienna-orig.jpeg",
    },
    {
        year: 1848,
        title: "Cinque Giornate e partecipazione (Como-Varese)",
        territory: "como",
        era: "contemporanea",
        detail:
            "Durante il Risorgimento, Como e Varese partecipano ai moti del '48. Giuseppe Garibaldi raccoglie volontari nella zona; scontri con gli austriaci sui monti.",
        img: "https://www.raicultura.it/dl/img/2019/05/28/1559041737185_5giornate.jpg",
    },
    {
        year: 1859,
        title: "Battaglia di Varese e Unità d'Italia",
        territory: "varese",
        era: "contemporanea",
        detail:
            "26 maggio 1859: Garibaldi sconfigge gli austriaci a Varese, aprendo la strada all'armistizio di Villafranca e successiva annessione al Regno di Sardegna. Momento cardine per l'Unità.",
        img: "https://www.librirarieantichi.it/wp-content/uploads/2023/02/GUSTAVE_DORE_Combat_de_Vareze_Battaglia_di_Varese_26_maggio_1859_litografia-Copia.jpg",
    },
    {
        year: 1866,
        title: "Terza Guerra d'Indipendenza: Veneto e Trentino",
        territory: "varese",
        era: "contemporanea",
        detail:
            "Volontari comaschi e varesini partecipano alla campagna contro l'Austria. Il Veneto viene annesso all'Italia, mentre il Trentino resta austriaco fino al 1918.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/San_Martino_della_Battaglia_-_Fresco_1866_Custoza_1.jpg/1280px-San_Martino_della_Battaglia_-_Fresco_1866_Custoza_1.jpg",
    },
    {
        year: 1871,
        title: "Industrializzazione serica (Como)",
        territory: "como",
        era: "contemporanea",
        detail:
            "Introduzione del telaio meccanico a Como (1871): la seteria diventa fiore all'occhiello della città. Nascita di manifatture e sviluppo del turismo sul lago.",
        img: "https://www.madeinitalyfor.me/img/cms/Blog/Seta/Seta%20blog%2016.jpg",
    },
    {
        year: 1885,
        title: "Ferrovie e sviluppo (Varese e Ticino)",
        territory: "varese",
        era: "contemporanea",
        detail:
            "Apertura della ferrovia Varese-Porto Ceresio e collegamenti con la Svizzera (Ferrovia del Gottardo 1882). I collegamenti favoriscono turismo e commerci transfrontalieri.",
        img: "https://museo.ferrovienord.it/media/filer_public_thumbnails/filer_public/da/5c/da5ceef9-a69f-4e48-9c31-08ae4bdbcffe/varese-piazzale-della-ferrovia-nord-milano.jpg__1501.0x961.0_q85_subsampling-2.jpg",
    },
    {
        year: 1915,
        title: "Prima Guerra Mondiale: trincee al confine",
        territory: "como",
        era: "contemporanea",
        detail:
            "L'Italia entra in guerra. Il confine tra Como e il Ticino diventa zona strategica: feriti e profughi trovano riparo in Svizzera. Molti giovani partono per il fronte.",
        img: "https://www.quicomo.it/~media/horizontal-hi/39528399594195/trincee-como-3.jpg",
    },
    {
        year: 1940,
        title: "Seconda Guerra Mondiale e Resistenza",
        territory: "varese",
        era: "contemporanea",
        detail:
            "Durante il conflitto, Como e Varese subiscono bombardamenti alleati. Nascono formazioni partigiane che operano nelle valli prealpine.",
        img: "https://www.lombardiabeniculturali.it/assets/immagini/liv2/AF310RLSUP/SW/F/SWCT1/0000/F_SUP-SWCT1-0000685_IMG-0000000001.jpg",
    },
    {
        year: 1943,
        title: "Resistenza partigiana nelle Tre Valli",
        territory: "como",
        era: "contemporanea",
        detail:
            "Dopo l'armistizio, monti comaschi e varesini diventano roccaforti della Resistenza. La Brigata Fiamme Verdi e altre formazioni liberano molti paesi prima dell'arrivo alleato.",
        img: "https://ventodaprile.wordpress.com/wp-content/uploads/2014/01/partigiani-2.jpg",
    },
    {
        year: 1950,
        title: "Miracolo economico e sviluppo (Ticino)",
        territory: "ticino",
        era: "contemporanea",
        detail:
            "Nel dopoguerra il Ticino conosce una forte crescita: nasce il settore terziario avanzato, Lugano diventa piazza finanziaria. Espansione urbana e qualità della vita.",
        img: "https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_720/images.spreaker.com/original/2ed335073a516f18872f040ebd2c08d3.jpg",
    },
    {
        year: 1978,
        title: "Referendum sul Ticino (proposta di secessione)",
        territory: "ticino",
        era: "contemporanea",
        detail:
            "Nel 1978 si tiene un referendum consultivo sulla possibile secessione del Ticino dalla Svizzera per formare una repubblica indipendente. La proposta viene respinta con ampia maggioranza.",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Swiss_referendum.jpg",
    },
    {
        year: 1992,
        title: "Trattato di Schengen: libera circolazione",
        territory: "ticino",
        era: "contemporanea",
        detail:
            "La Svizzera aderisce agli accordi di Schengen. Il confine tra Ticino e Italia diventa sempre più permeabile, favorendo il pendolarismo e gli scambi economici.",
        img: "https://www.europarl.europa.eu/resources/library/images/20250121PHT26388/20250121PHT26388-cl.png",
    },
    {
        year: 2000,
        title: "Expo e grande turismo (Laghi)",
        territory: "como",
        era: "contemporanea",
        detail:
            "Como e Varese diventano mete del turismo internazionale, celebri per ville storiche (Villa Olmo, Villa Carlotta) e paesaggi lacustri. Il Ticino rafforza l'identità culturale con il LAC di Lugano.",
        img: "https://static.lespresso.it/hero/422/97b42070-d367-0f28-0e14-19713936d422.webp",
    },
    {
        year: 2016,
        title: "Apertura del LAC (Lugano Arte e Cultura)",
        territory: "ticino",
        era: "contemporanea",
        detail:
            "Viene inaugurato il LAC, centro culturale polifunzionale che diventa simbolo della rinascita culturale ticinese, ospitando mostre, concerti e spettacoli di fama internazionale.",
        img: "https://www.luganolac.ch/dam/jcr:c2bfd8a7-2561-4b14-8d9f-39b5dd7e3021/lac.jpg",
    },
    {
        year: 2020,
        title: "Como: seta, innovazione e lago",
        territory: "como",
        era: "contemporanea",
        detail:
            "Como oggi è capitale mondiale della seta, polo di design e turismo di élite. Il territorio unisce tradizione, arte contemporanea e sostenibilità ambientale.",
        img: "https://museosetacomo.com/contents/videos/02.jpg",
    },
    {
        year: 2020,
        title: "Varese: giardini, cultura e imprese",
        territory: "varese",
        era: "contemporanea",
        detail:
            "Varese eccelle come città dei giardini, con il Sacro Monte UNESCO, ville settecentesche e distretto aerospaziale. Polo culturale e naturale tra i laghi.",
        img: "https://varesesport.com/wp-content/uploads/2020/05/giardini-estensi-varese.jpg",
    },
    {
        year: 2024,
        title: "Ticino: ponte culturale tra Italia e Svizzera",
        territory: "ticino",
        era: "contemporanea",
        detail:
            "Il Canton Ticino è laboratorio di integrazione europea, eccellenza nella formazione, finanza e turismo. Festival cinematografici, architettura e sostenibilità.",
        img: "https://www.comunitaitalofona.org/wp-content/uploads/2024/12/Svizzera-e-Italia-due-bandiere-insieme-di-tessuto.jpg",
    },
];

export const eraLabels: Record<Era, string> = {
    preistoria: "Preistoria",
    antica: "Antica",
    medioevo: "Medioevo",
    moderna: "Moderna",
    contemporanea: "Contemporanea",
};

export const territoryLabels: Record<Territory, string> = {
    como: "Como",
    varese: "Varese",
    ticino: "Canton Ticino",
};

export const eraBadgeClasses: Record<Era, string> = {
    preistoria: "bg-[#C47A4A] text-[#1A1A1A]",
    antica: "bg-[#D4A84B] text-[#1A1A1A]",
    medioevo: "bg-[#4A8B9B] text-white",
    moderna: "bg-[#2E7D5E] text-white",
    contemporanea: "bg-[#9B6B8A] text-white",
};

export const territoryBorderClasses: Record<Territory, string> = {
    como: "border-l-[#E8925C]",
    varese: "border-l-[#6BA85A]",
    ticino: "border-l-[#5A9BA8]",
};

export const dotColors: Record<Era, string> = {
    preistoria: "#C47A4A",
    antica: "#D4A84B",
    medioevo: "#4A8B9B",
    moderna: "#2E7D5E",
    contemporanea: "#9B6B8A",
};

export function formatYear(year: number) {
    if (year < 0) return `${Math.abs(year)} a.C.`;
    if (year >= 0 && year < 500) return `${year} d.C.`;
    return `${year}`;
}