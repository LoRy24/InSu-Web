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
    { year: 2000, popolazione: 816000},
    { year: 2001, popolazione: 818500},
    { year: 2002, popolazione: 821000},
    { year: 2003, popolazione: 823500},
    { year: 2004, popolazione: 827000},
    { year: 2005, popolazione: 832000},
    { year: 2006, popolazione: 837500},
    { year: 2007, popolazione: 843000},
    { year: 2008, popolazione: 848000},
    { year: 2009, popolazione: 852000},
    { year: 2010, popolazione: 854000},
    { year: 2011, popolazione: 877000},
    { year: 2012, popolazione: 890000},
    { year: 2013, popolazione: 888000},
    { year: 2014, popolazione: 886000},
    { year: 2015, popolazione: 884000},
    { year: 2016, popolazione: 882000},
    { year: 2017, popolazione: 880000},
    { year: 2018, popolazione: 878000},
    { year: 2019, popolazione: 876000},
    { year: 2020, popolazione: 873000},
    { year: 2021, popolazione: 871000},
    { year: 2022, popolazione: 870000},
    { year: 2023, popolazione: 869000},
    { year: 2024, popolazione: 868000},
    { year: 2025, popolazione: 867000},
];

export function VareseUrbanGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Popolazione di Varese
                </h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 48, left: 30, bottom: 0 }}>
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
