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
    { year: 2000, primario: 2.0, secondario: 39.0, terziario: 59.0 },
    { year: 2001, primario: 2.0, secondario: 39.0, terziario: 59.0 },
    { year: 2002, primario: 2.0, secondario: 39.0, terziario: 59.0 },
    { year: 2003, primario: 2.0, secondario: 40.0, terziario: 58.0 },
    { year: 2004, primario: 2.0, secondario: 40.0, terziario: 58.0 },
    { year: 2005, primario: 2.0, secondario: 40.0, terziario: 58.0 },
    { year: 2006, primario: 2.0, secondario: 40.0, terziario: 58.0 },
    { year: 2007, primario: 2.0, secondario: 39.0, terziario: 59.0 },
    { year: 2008, primario: 2.0, secondario: 39.0, terziario: 59.0 },
    { year: 2009, primario: 2.0, secondario: 38.0, terziario: 60.0 },
    { year: 2010, primario: 1.8, secondario: 38.0, terziario: 60.2 },
    { year: 2011, primario: 1.8, secondario: 37.0, terziario: 61.2 },
    { year: 2012, primario: 1.8, secondario: 36.5, terziario: 61.7 },
    { year: 2013, primario: 1.8, secondario: 36.0, terziario: 62.2 },
    { year: 2014, primario: 1.8, secondario: 35.5, terziario: 62.7 },
    { year: 2015, primario: 1.8, secondario: 35.0, terziario: 63.2 },
    { year: 2016, primario: 1.8, secondario: 34.5, terziario: 63.7 },
    { year: 2017, primario: 1.8, secondario: 34.0, terziario: 64.2 },
    { year: 2018, primario: 1.8, secondario: 33.5, terziario: 64.7 },
    { year: 2019, primario: 1.8, secondario: 33.0, terziario: 65.2 },
    { year: 2020, primario: 1.7, secondario: 32.0, terziario: 66.3 },
    { year: 2021, primario: 1.6, secondario: 31.0, terziario: 67.4 },
    { year: 2022, primario: 1.5, secondario: 30.0, terziario: 68.5 },
    { year: 2023, primario: 1.5, secondario: 29.0, terziario: 69.5 },
    { year: 2024, primario: 1.5, secondario: 28.5, terziario: 70.0 },
    { year: 2025, primario: 1.5, secondario: 28.0, terziario: 70.5 },
];

export function VareseEconomyGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Varese
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
