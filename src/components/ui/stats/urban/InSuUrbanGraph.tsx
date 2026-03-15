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
    { year: 2000, popolazione: 1970846},
    { year: 2001, popolazione: 1981452},
    { year: 2002, popolazione: 1993183},
    { year: 2003, popolazione: 2005324},
    { year: 2004, popolazione: 2018150},
    { year: 2005, popolazione: 2032039},
    { year: 2006, popolazione: 2047510},
    { year: 2007, popolazione: 2064607},
    { year: 2008, popolazione: 2080920},
    { year: 2009, popolazione: 2093912},
    { year: 2010, popolazione: 2102167},
    { year: 2011, popolazione: 2147322},
    { year: 2012, popolazione: 2164425},
    { year: 2013, popolazione: 2165314},
    { year: 2014, popolazione: 2163251},
    { year: 2015, popolazione: 2160254},
    { year: 2016, popolazione: 2159238},
    { year: 2017, popolazione: 2158384},
    { year: 2018, popolazione: 2157384},
    { year: 2019, popolazione: 2152554},
    { year: 2020, popolazione: 2148947},
    { year: 2021, popolazione: 2144750},
    { year: 2022, popolazione: 2143480},
    { year: 2023, popolazione: 2145990},
    { year: 2024, popolazione: 2146553},
    { year: 2025, popolazione: 2163500},
];

export function InsubricaUrbanGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Popolazione area Insubrica
                </h2>
                <div className="h-125 pr-10">
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
                                dataKey="popolazione"
                                stroke="#84cc16"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                name="Popolazione"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
