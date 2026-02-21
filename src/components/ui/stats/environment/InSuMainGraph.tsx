"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

const data = [
    { year: 2000, primario: 2.5, secondario: 36.3, terziario: 61.3 },
    { year: 2001, primario: 2.5, secondario: 36.3, terziario: 61.3 },
    { year: 2002, primario: 2.5, secondario: 36.3, terziario: 61.3 },
    { year: 2003, primario: 2.5, secondario: 37.0, terziario: 60.5 },
    { year: 2004, primario: 2.5, secondario: 37.0, terziario: 60.5 },
    { year: 2005, primario: 2.5, secondario: 36.8, terziario: 60.8 },
    { year: 2006, primario: 2.5, secondario: 36.8, terziario: 60.8 },
    { year: 2007, primario: 2.5, secondario: 36.8, terziario: 60.8 },
    { year: 2008, primario: 2.5, secondario: 36.3, terziario: 61.3 },
    { year: 2009, primario: 2.5, secondario: 35.3, terziario: 62.3 },
    { year: 2010, primario: 2.3, secondario: 35.3, terziario: 62.4 },
    { year: 2011, primario: 2.2, secondario: 34.5, terziario: 63.6 },
    { year: 2012, primario: 2.2, secondario: 34.0, terziario: 64.1 },
    { year: 2013, primario: 2.2, secondario: 33.8, terziario: 64.1 },
    { year: 2014, primario: 2.2, secondario: 33.3, terziario: 64.5 },
    { year: 2015, primario: 2.2, secondario: 32.8, terziario: 65.0 },
    { year: 2016, primario: 2.2, secondario: 32.3, terziario: 65.5 },
    { year: 2017, primario: 2.2, secondario: 31.8, terziario: 66.0 },
    { year: 2018, primario: 2.2, secondario: 31.3, terziario: 66.5 },
    { year: 2019, primario: 2.2, secondario: 30.8, terziario: 67.0 },
    { year: 2020, primario: 2.1, secondario: 30.0, terziario: 67.6 },
    { year: 2021, primario: 2.0, secondario: 29.3, terziario: 68.2 },
    { year: 2022, primario: 1.9, secondario: 28.5, terziario: 69.0 },
    { year: 2023, primario: 1.9, secondario: 27.8, terziario: 69.6 },
    { year: 2024, primario: 1.8, secondario: 27.4, terziario: 70.0 },
    { year: 2025, primario: 1.8, secondario: 27.0, terziario: 70.2 },
];

export function InsubricaMainGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Distribuzione Settori Economici (2000–2025)
                </h2>
                <div className="h-[500px] pr-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid stroke="#1f1f1f" />
                            <XAxis
                                dataKey="year"
                                stroke="#84cc16"
                                tick={{ fill: "#84cc16" }}
                            />
                            <YAxis
                                stroke="#84cc16"
                                tick={{ fill: "#84cc16" }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#0a0a0a",
                                    border: "1px solid #84cc16",
                                }}
                                labelStyle={{ color: "#84cc16" }}
                            />
                            <Legend/>
                            <Line
                                type="monotone"
                                dataKey="primario"
                                stroke="#84cc16"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                name="Settore Primario (%)"
                            />
                            <Line
                                type="monotone"
                                dataKey="secondario"
                                stroke="#a3e635"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                name="Settore Secondario (%)"
                            />
                            <Line
                                type="monotone"
                                dataKey="terziario"
                                stroke="#bef264"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                name="Settore Terziario (%)"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
