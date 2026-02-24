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
    { year: 2000, primario: 3.0, secondario: 30.0, terziario: 67.0 },
    { year: 2001, primario: 3.0, secondario: 30.0, terziario: 67.0 },
    { year: 2002, primario: 3.0, secondario: 30.0, terziario: 67.0 },
    { year: 2003, primario: 3.0, secondario: 30.0, terziario: 67.0 },
    { year: 2004, primario: 3.0, secondario: 30.0, terziario: 67.0 },
    { year: 2005, primario: 3.0, secondario: 29.0, terziario: 68.0 },
    { year: 2006, primario: 3.0, secondario: 29.0, terziario: 68.0 },
    { year: 2007, primario: 3.0, secondario: 29.0, terziario: 68.0 },
    { year: 2008, primario: 3.0, secondario: 29.0, terziario: 68.0 },
    { year: 2009, primario: 3.0, secondario: 28.0, terziario: 69.0 },
    { year: 2010, primario: 2.8, secondario: 28.0, terziario: 69.2 },
    { year: 2011, primario: 2.8, secondario: 27.5, terziario: 69.7 },
    { year: 2012, primario: 2.8, secondario: 27.0, terziario: 70.2 },
    { year: 2013, primario: 2.7, secondario: 27.0, terziario: 70.3 },
    { year: 2014, primario: 2.7, secondario: 26.5, terziario: 70.8 },
    { year: 2015, primario: 2.7, secondario: 26.0, terziario: 71.3 },
    { year: 2016, primario: 2.6, secondario: 25.5, terziario: 71.9 },
    { year: 2017, primario: 2.6, secondario: 25.0, terziario: 72.4 },
    { year: 2018, primario: 2.6, secondario: 24.5, terziario: 72.9 },
    { year: 2019, primario: 2.5, secondario: 24.0, terziario: 73.5 },
    { year: 2020, primario: 2.5, secondario: 23.5, terziario: 74.0 },
    { year: 2021, primario: 2.4, secondario: 23.0, terziario: 74.6 },
    { year: 2022, primario: 2.3, secondario: 22.5, terziario: 75.2 },
    { year: 2023, primario: 2.3, secondario: 22.0, terziario: 75.7 },
    { year: 2024, primario: 2.3, secondario: 21.8, terziario: 75.9 },
    { year: 2025, primario: 2.3, secondario: 21.5, terziario: 76.2 },

];

export function TicinoEconomyGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Ticino
                </h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 48, left: 0, bottom: 0 }}>
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
                            <Legend verticalAlign="bottom" align="center"/>
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
