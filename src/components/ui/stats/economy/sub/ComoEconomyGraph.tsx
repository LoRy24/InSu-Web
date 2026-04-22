"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ECONOMY_COLORS } from "@/lib/insu/stats/GraphsColors";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
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

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;

    return (
        <div className="rounded-xl border border-white/10 bg-[#0d0d0d]/95 px-4 py-3 shadow-2xl backdrop-blur-sm">
            <p className="mb-2 text-sm font-semibold text-white">{label}</p>
            <div className="space-y-1.5">
                {payload.map((entry: any) => (
                    <div key={entry.name} className="flex justify-between gap-5">
                        <span className="text-sm text-neutral-300">{entry.name}</span>
                        <span className="text-sm font-semibold text-white">
                            {entry.value.toFixed(1)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CustomLegend = () => {
    const items = [
        { value: "Settore Primario (%)", color: ECONOMY_COLORS.primario },
        { value: "Settore Secondario (%)", color: ECONOMY_COLORS.secondario },
        { value: "Settore Terziario (%)", color: ECONOMY_COLORS.terziario },
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            {items.map((entry) => (
                <div
                    key={entry.value}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                >
                    <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm font-medium text-neutral-200">
                        {entry.value}
                    </span>
                </div>
            ))}
        </div>
    );
};

export function ComoEconomyGraph() {
    return (
        <Card className="rounded-2xl border border-white/10 bg-[#111111] shadow-xl">
            <CardContent className="p-6">
                <h2 className="mb-4 text-center text-2xl font-bold text-white">
                    Como
                </h2>

                <div className="mb-6">
                    <CustomLegend />
                </div>

                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
                            <CartesianGrid
                                stroke="#262626"
                                strokeDasharray="4 4"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="year"
                                stroke="#A3A3A3"
                                tick={{ fill: "#A3A3A3", fontSize: 12 }}
                                axisLine={{ stroke: "#404040" }}
                                tickLine={{ stroke: "#404040" }}
                            />

                            <YAxis
                                domain={[0, 100]}
                                ticks={[0, 20, 40, 60, 80, 100]}
                                stroke="#A3A3A3"
                                tick={{ fill: "#A3A3A3", fontSize: 12 }}
                                axisLine={{ stroke: "#404040" }}
                                tickLine={{ stroke: "#404040" }}
                                tickFormatter={(value) => `${value}%`}
                            />

                            <Tooltip content={<CustomTooltip />} />

                            <Line
                                type="monotone"
                                dataKey="primario"
                                name="Settore Primario (%)"
                                stroke={ECONOMY_COLORS.primario}
                                strokeWidth={3}
                                dot={{ r: 3, fill: ECONOMY_COLORS.primario, strokeWidth: 0 }}
                                activeDot={{ r: 6, fill: ECONOMY_COLORS.primario, stroke: "#111111", strokeWidth: 2 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="secondario"
                                name="Settore Secondario (%)"
                                stroke={ECONOMY_COLORS.secondario}
                                strokeWidth={3}
                                dot={{ r: 3, fill: ECONOMY_COLORS.secondario, strokeWidth: 0 }}
                                activeDot={{ r: 6, fill: ECONOMY_COLORS.secondario, stroke: "#111111", strokeWidth: 2 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="terziario"
                                name="Settore Terziario (%)"
                                stroke={ECONOMY_COLORS.terziario}
                                strokeWidth={3}
                                dot={{ r: 3, fill: ECONOMY_COLORS.terziario, strokeWidth: 0 }}
                                activeDot={{ r: 6, fill: ECONOMY_COLORS.terziario, stroke: "#111111", strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}