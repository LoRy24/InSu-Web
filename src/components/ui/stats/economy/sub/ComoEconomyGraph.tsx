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
    { year: 2000, primario: 3, secondario: 35, terziario: 62 },
    { year: 2001, primario: 3, secondario: 35, terziario: 62 },
    { year: 2002, primario: 3, secondario: 35, terziario: 62 },
    { year: 2003, primario: 3, secondario: 36, terziario: 61 },
    { year: 2004, primario: 3, secondario: 36, terziario: 61 },
    { year: 2005, primario: 3, secondario: 36, terziario: 61 },
    { year: 2006, primario: 3, secondario: 36, terziario: 61 },
    { year: 2007, primario: 3, secondario: 36, terziario: 61 },
    { year: 2008, primario: 3, secondario: 36, terziario: 61 },
    { year: 2009, primario: 3, secondario: 35, terziario: 62 },
    { year: 2010, primario: 2.5, secondario: 35, terziario: 62.5 },
    { year: 2011, primario: 2.5, secondario: 34.5, terziario: 63 },
    { year: 2012, primario: 2.5, secondario: 34, terziario: 63.5 },
    { year: 2013, primario: 2.5, secondario: 34, terziario: 63.5 },
    { year: 2014, primario: 2.5, secondario: 33.5, terziario: 64 },
    { year: 2015, primario: 2.5, secondario: 33, terziario: 64.5 },
    { year: 2016, primario: 2.5, secondario: 32.5, terziario: 65 },
    { year: 2017, primario: 2.5, secondario: 32, terziario: 65.5 },
    { year: 2018, primario: 2.5, secondario: 31.5, terziario: 66 },
    { year: 2019, primario: 2.5, secondario: 31, terziario: 66.5 },
    { year: 2020, primario: 2.3, secondario: 30.5, terziario: 67.2 },
    { year: 2021, primario: 2.2, secondario: 30, terziario: 67.8 },
    { year: 2022, primario: 2.1, secondario: 29.5, terziario: 68.4 },
    { year: 2023, primario: 2, secondario: 29, terziario: 69 },
    { year: 2024, primario: 2, secondario: 28.8, terziario: 69.2 },
    { year: 2025, primario: 2, secondario: 28.5, terziario: 69.5 },

];

export function ComoEconomyGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Como
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
