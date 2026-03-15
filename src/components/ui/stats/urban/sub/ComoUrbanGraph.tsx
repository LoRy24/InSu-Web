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
    { year: 2000, popolazione: 537000},
    { year: 2001, popolazione: 539000},
    { year: 2002, popolazione: 542000},
    { year: 2003, popolazione: 545000},
    { year: 2004, popolazione: 548000},
    { year: 2005, popolazione: 552000},
    { year: 2006, popolazione: 557000},
    { year: 2007, popolazione: 562000},
    { year: 2008, popolazione: 567000},
    { year: 2009, popolazione: 571000},
    { year: 2010, popolazione: 574000},
    { year: 2011, popolazione: 594000},
    { year: 2012, popolazione: 599000},
    { year: 2013, popolazione: 598000},
    { year: 2014, popolazione: 597000},
    { year: 2015, popolazione: 596000},
    { year: 2016, popolazione: 595000},
    { year: 2017, popolazione: 594000},
    { year: 2018, popolazione: 593000},
    { year: 2019, popolazione: 592000},
    { year: 2020, popolazione: 590000},
    { year: 2021, popolazione: 588000},
    { year: 2022, popolazione: 587000},
    { year: 2023, popolazione: 586000 },
    { year: 2024, popolazione: 585000 },
    { year: 2025, popolazione: 584000},

];

export function ComoUrbanGraph() {
    return (
        <Card className="bg-[#111111] border border-lime-500/20 rounded-2xl shadow-xl">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-12 text-center">
                    Popolazione di Como
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
