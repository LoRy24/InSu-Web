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
    { year: 2000, popolazione: 306846},
    { year: 2001, popolazione: 312500},
    { year: 2002, popolazione: 315000},
    { year: 2003, popolazione: 318000},
    { year: 2004, popolazione: 321000},
    { year: 2005, popolazione: 323000},
    { year: 2006, popolazione: 325500},
    { year: 2007, popolazione: 328000},
    { year: 2008, popolazione: 330500},
    { year: 2009, popolazione: 333000},
    { year: 2010, popolazione: 334000},
    { year: 2011, popolazione: 335000},
    { year: 2012, popolazione: 337000},
    { year: 2013, popolazione: 338500},
    { year: 2014, popolazione: 340000},
    { year: 2015, popolazione: 341000},
    { year: 2016, popolazione: 343000},
    { year: 2017, popolazione: 345000},
    { year: 2018, popolazione: 347000},
    { year: 2019, popolazione: 349000},
    { year: 2020, popolazione: 350986},
    { year: 2021, popolazione: 352181},
    { year: 2022, popolazione: 354023},
    { year: 2023, popolazione: 357720},
    { year: 2024, popolazione: 358903},
    { year: 2025, popolazione: 359500},

];

export function TicinoUrbanGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Popolazione del Ticino
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
