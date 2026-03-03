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
    { year: 2000, popolazione: 311000},
    { year: 2001, popolazione: 311452},
    { year: 2002, popolazione: 315183},
    { year: 2003, popolazione: 318824},
    { year: 2004, popolazione: 322150},
    { year: 2005, popolazione: 325039},
    { year: 2006, popolazione: 327510},
    { year: 2007, popolazione: 331607},
    { year: 2008, popolazione: 335420},
    { year: 2009, popolazione: 337912},
    { year: 2010, popolazione: 340167},
    { year: 2011, popolazione: 341322},
    { year: 2012, popolazione: 338425},
    { year: 2013, popolazione: 340814},
    { year: 2014, popolazione: 340251},
    { year: 2015, popolazione: 339254},
    { year: 2016, popolazione: 339238},
    { year: 2017, popolazione: 339384},
    { year: 2018, popolazione: 339384},
    { year: 2019, popolazione: 335554},
    { year: 2020, popolazione: 334961},
    { year: 2021, popolazione: 333569},
    { year: 2022, popolazione: 332457},
    { year: 2023, popolazione: 333270},
    { year: 2024, popolazione: 334650},
    { year: 2025, popolazione: 353000},

];

export function LeccoUrbanGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Popolazione di Lecco
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
