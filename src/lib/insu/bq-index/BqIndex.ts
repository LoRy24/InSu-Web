export type BqQuestionaryAnswers = {
    sicurezza_pulizia: number;
    ambiente_pub: number;
    ambiente_priv: number;
    tecnologia: number;
    servizi: number;
    socialita: number;
    posizione: number;
    sostenibilita: number;
    ristorazione: number;
    vendita_dettaglio: number;
    ritrovo_interni: number;
    ritrovo_esterni: number;
    servizi_igienici: number;
    mezzi_pubblici: number;
    tecnologie_pubbliche: number;
    tecnologie_private: number;
    energia: number;
    sociale: number;
    sanita: number;
    probabilita: number;
};

export type Result = {
    punteggio: number;
    massimo: number;
    risultato: ResultType;
};

export enum ResultType {
    CRITIC,
    LOW,
    AVERAGE,
    GOOD,
    EXCELLENT,
    PERFECT,
}

export function calcolaBQ(answers: BqQuestionaryAnswers): Result {
    let BQ = 0;
    const BQ_perfect = 200; // 20 domande * 10

    BQ += answers.sicurezza_pulizia;
    BQ += answers.ambiente_pub;
    BQ += answers.ambiente_priv;
    BQ += answers.tecnologia;
    BQ += answers.servizi;
    BQ += answers.socialita;
    BQ += answers.posizione;
    BQ += answers.sostenibilita;
    BQ += answers.ristorazione;
    BQ += answers.vendita_dettaglio;
    BQ += answers.ritrovo_interni;
    BQ += answers.ritrovo_esterni;
    BQ += answers.servizi_igienici;
    BQ += answers.mezzi_pubblici;
    BQ += answers.tecnologie_pubbliche;
    BQ += answers.tecnologie_private;
    BQ += answers.energia;
    BQ += answers.sociale;
    BQ += answers.sanita;
    BQ += answers.probabilita;

    let tipo_quartiere : ResultType;

    if (BQ >= 0 && BQ <= 35) {
        tipo_quartiere = ResultType.CRITIC;
    } else if (BQ <= 110) {
        tipo_quartiere = ResultType.LOW;
    } else if (BQ <= 130) {
        tipo_quartiere = ResultType.AVERAGE;
    } else if (BQ <= 150) {
        tipo_quartiere = ResultType.GOOD;
    } else if (BQ <= 175) {
        tipo_quartiere = ResultType.EXCELLENT;
    } else {
        tipo_quartiere = ResultType.PERFECT;
    }

    return {
        punteggio: BQ,
        massimo: BQ_perfect,
        risultato: tipo_quartiere
    };
}