"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BqQuestionaryAnswers, calcolaBQ, Result, ResultType } from "@/lib/insu/bq-index/BqIndex";

type Question = {
    id: string;
    title: string;
};

type Answers = Record<string, number>;
type Step = "start" | "questions" | "result";

const QUESTIONS: Question[] = [
    { id: "1", title: "Quanto ti senti sicuro nel tuo quartiere?" },
    { id: "2", title: "Qual è il livello di aree verdi pubbliche presenti?" },
    { id: "3", title: "Qual è il livello di aree verdi private presenti?" },
    { id: "4", title: "Qual è il livello di innovazione tecnologica?" },
    { id: "5", title: "Qual è il livello dei servizi presenti?" },
    { id: "6", title: "Qual è il livello dei luoghi di ritrovo presenti?" },
    { id: "7", title: "Quanto è vicino al centro?" },
    { id: "8", title: "Quanto è sostenibile?" },
    { id: "9", title: "La presenza di aree ristoro soddisfa la tua richiesta?" },
    { id: "10", title: "Quanto è vasta la selezione della vendita al dettaglio?" },
    { id: "11", title: "Qualità punti di ritrovo interni?" },
    { id: "12", title: "Qualità dei punti di ritrovo esterni (es. parchi)?" },
    { id: "13", title: "Qualità e presenza dei servizi igienici pubblici?" },
    { id: "14", title: "Qualità e presenza fermate mezzi pubblici?" },
    { id: "15", title: "Qualità tecnologie ambientali pubbliche?" },
    { id: "16", title: "Qualità tecnologie ambientali private?" },
    { id: "17", title: "Quanto è energeticamente affidabile?" },
    { id: "18", title: "Quanto sono inclusivi e rispettosi i residenti?" },
    { id: "19", title: "Quanto è facile raggiungere la struttura sanitaria?" },
    { id: "20", title: "Quanto può essere migliorato il quartiere?" },
];

const calculateResult = (answers: Answers): Result => {
    const values = Object.values(answers);

    const questionary: BqQuestionaryAnswers = {
        sicurezza_pulizia: values[0],
        ambiente_pub: values[1],
        ambiente_priv: values[2],
        tecnologia: values[3],
        servizi: values[4],
        socialita: values[5],
        posizione: values[6],
        sostenibilita: values[7],
        ristorazione: values[8],
        vendita_dettaglio: values[9],
        ritrovo_interni: values[10],
        ritrovo_esterni: values[11],
        servizi_igienici: values[12],
        mezzi_pubblici: values[13],
        tecnologie_pubbliche: values[14],
        tecnologie_private: values[15],
        energia: values[16],
        sociale: values[17],
        sanita: values[18],
        probabilita: values[19],
    };

    return calcolaBQ(questionary);
};

// ---------------- ANIMAZIONI ----------------

const screenVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
};

const questionVariants = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
};

const resultBgVariants = {
    initial: { scale: 1.4, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
};

// ---------------- UI ----------------

function StartScreen({ onStart }: { onStart: () => void }) {
    return (
        <motion.div
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-full text-white"
        >
            <h1 className="text-[48px] font-semibold">
                Scopri il tuo <b>Indice BQ</b>!
            </h1>
            <h1 className="text-[16px] mb-6">
                Scopri ora il tuo indice BQ rispondendo alle prossime 20 domande!
            </h1>
            <button
                onClick={onStart}
                className="px-6 py-3 w-34 h-12 rounded-2xl bg-white text-black flex items-center justify-center transition-all duration-200 ease-out hover:scale-104 hover:bg-gray-200 active:scale-100 cursor-pointer"
            >
                Continua
            </button>
        </motion.div>
    );
}

function OptionGrid({ value, onChange }: { value?: number; onChange: (value: number) => void }) {
    return (
        <div className="flex flex-row justify-center gap-3 mt-6 w-full">
            {Array.from({ length: 11 }, (_, i) => {
                const hue = (i / 10) * 120;
                const bg = `hsl(${hue} 40% 70%)`;
                const text = `hsl(${hue} 30% 25%)`;

                return (
                    <button
                        key={i}
                        onClick={() => onChange(i)}
                        style={{ "--bg": bg, "--text": text } as React.CSSProperties}
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center text-sm transition-all ${value === i  ? "bg-(--bg) text-(--text) border-transparent"  : "border-gray-600 text-white hover:bg-(--bg) hover:text-(--text) hover:border-transparent cursor-pointer hover:scale-110"}`}
                    >
                        {i}
                    </button>
                );
            })}
        </div>
    );
}

function QuestionScreen(props: any) {
    const { question, value, onAnswer, onNext, onPrev, isLast } = props;

    return (
        <motion.div
            key={question.id}
            variants={questionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center h-full text-white p-6 w-full"
        >
            <h1 className="text-[42px] font-bold">Domanda {question.id}</h1>
            <h2 className="text-[20px] mb-1">{question.title}</h2>

            <OptionGrid value={value} onChange={onAnswer} />

            <div className="flex gap-4 mt-6">
                <button
                    onClick={onPrev || undefined}
                    disabled={!onPrev}
                    className="px-4 py-2 w-34 h-12 rounded-2xl border border-gray-600 flex items-center justify-center transition-all duration-200 ease-out hover:scale-104 hover:bg-[#202020] hover:border-gray-550 active:scale-100 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-transparent cursor-pointer"
                >
                    ← Indietro
                </button>

                <button
                    onClick={onNext}
                    disabled={value === undefined}
                    className=" px-4 py-2 w-34 h-12 rounded-2xl bg-white text-black flex items-center justify-center transition-all duration-200 ease-out hover:scale-104 hover:bg-gray-200 active:scale-100 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-white cursor-pointer"
                >
                    {isLast ? "Risultato" : "Avanti"} →
                </button>
            </div>
        </motion.div>
    );
}

// ---------------- RESULT ----------------

const resultStyles: Record<ResultType, any> = {
    [ResultType.CRITIC]: { title: "Invivibile", description: "Agire immediatamente per migliorare sicurezza, qualità dei servizi e sostenibilità dei quartieri.", color: "rgba(220,38,38,0.6)" },
    [ResultType.LOW]: { title: "Pessimo", description: " Consolidare le basi per quartieri più sicuri e sostenibili.", color: "rgba(249,115,22,0.6)" },
    [ResultType.AVERAGE]: { title: "Discreto", description: "Raggiunge e mantiene gli standard minimi richiesti, offrendo al contempo condizioni affidabili e coerenti con le aspettative.", color: "rgba(234,179,8,0.6)" },
    [ResultType.GOOD]: { title: "Buono", description: "Costituisce una buona base di partenza, ma presenta ancora margini di miglioramento significativi", color: "rgba(34,197,94,0.6)" },
    [ResultType.EXCELLENT]: { title: "Eccellente", description: "Mantiene un livello alto e costante, assicurando risultati di qualità superiore.", color: "rgba(59,130,246,0.6)" },
    [ResultType.PERFECT]: { title: "Perfetto", description: "Rappresenta il massimo livello possibile, senza compromessi in termini di qualità e prestazioni.", color: "rgba(139,92,246,0.6)" },
};

function BqIndexResult({ result, onRestart }: { result: Result; onRestart: () => void }) {
    const current = resultStyles[result.risultato];

    return (
        <motion.div
            variants={resultBgVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
            className="w-full h-full flex flex-col items-center justify-center text-center px-6"
            style={{
                background: `radial-gradient(circle at bottom center, ${current.color} 0%, rgba(0,0,0,0.9) 70%)`,
            }}
        >
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl text-white mb-4">
                {current.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-300 mb-8">
                {current.description}
            </motion.p>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onRestart}
                className="px-6 py-3 w-34 h-12 rounded-2xl bg-white text-black flex items-center justify-center transition-all duration-200 ease-out hover:scale-104 hover:bg-gray-200 active:scale-100 cursor-pointer"
            >
                Ricomincia
            </motion.button>
        </motion.div>
    );
}

function ResultScreen({ answers, onRestart }: any) {
    const result = calculateResult(answers);
    return <BqIndexResult result={result} onRestart={onRestart} />;
}

// ---------------- MAIN ----------------

export default function BqIndexCalculatorPrompt() {
    const [step, setStep] = useState<Step>("start");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});

    return (
        <div className="w-full bg-[#121212] h-160 rounded-2xl overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
                {step === "start" && (
                    <StartScreen key="start" onStart={() => setStep("questions")} />
                )}

                {step === "questions" && (
                    <QuestionScreen
                        key={QUESTIONS[currentIndex].id}
                        question={QUESTIONS[currentIndex]}
                        value={answers[QUESTIONS[currentIndex].id]}
                        onAnswer={(v: number) =>
                            setAnswers((prev) => ({
                                ...prev,
                                [QUESTIONS[currentIndex].id]: v,
                            }))
                        }
                        onNext={() =>
                            currentIndex < QUESTIONS.length - 1
                                ? setCurrentIndex((i) => i + 1)
                                : setStep("result")
                        }
                        onPrev={currentIndex === 0 ? null : () => setCurrentIndex((i) => i - 1)}
                        isLast={currentIndex === QUESTIONS.length - 1}
                    />
                )}

                {step === "result" && (
                    <ResultScreen
                        key="result"
                        answers={answers}
                        onRestart={() => {
                            setAnswers({});
                            setCurrentIndex(0);
                            setStep("start");
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}