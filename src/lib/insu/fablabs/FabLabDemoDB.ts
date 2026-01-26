// In futuro deve essere rimpiazzato con una chiamata API che mi ottiene i FabLabs registrati nella piattaforma

import {FabLab, FabLabTag} from "./FabLab";
import {FileReference, FileType} from "@/lib/insu/File";

export const FabLabsTestArray: FabLab[] = [
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
        false,
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
];