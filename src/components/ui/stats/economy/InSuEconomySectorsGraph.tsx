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
} from "recharts";
import {ECONOMY_COLORS} from "@/lib/insu/stats/GraphsColors";

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

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;

    return (
        <div className="rounded-xl border border-white/10 bg-[#0d0d0d]/95 px-4 py-3 shadow-2xl backdrop-blur-sm">
            <p className="mb-2 text-sm font-semibold text-white">{label}</p>
            <div className="space-y-1.5">
                {payload.map((entry: any) => (
                    <div key={entry.name} className="flex justify-between gap-5">
                        <span className="text-sm text-neutral-300">
                            {entry.name}
                        </span>
                        <span className="text-sm font-semibold text-white">
                            {entry.value.toFixed(1)}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CustomLegend = ({ payload }: any) => {
    if (!payload) return null;

    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            {payload.map((entry: any) => (
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

export function InsubricaEconomySectorsGraph() {
    return (
        <Card className="rounded-2xl border border-white/10 bg-[#111111] shadow-xl">
            <CardContent className="p-6">
                {/* Titolo più compatto */}
                <h2 className="mb-4 text-center text-2xl font-bold text-white">
                    Distribuzione Settori Economici (2000–2025)
                </h2>

                {/* Legenda separata */}
                <div className="mb-6">
                    <CustomLegend
                        payload={[
                            { value: "Settore Primario (%)", color: ECONOMY_COLORS.primario },
                            { value: "Settore Secondario (%)", color: ECONOMY_COLORS.secondario },
                            { value: "Settore Terziario (%)", color: ECONOMY_COLORS.terziario },
                        ]}
                    />
                </div>

                <div className="h-125 pr-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid
                                stroke="#262626"
                                strokeDasharray="4 4"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="year"
                                stroke="#A3A3A3"
                                tick={{ fill: "#A3A3A3", fontSize: 12 }}
                            />

                            <YAxis
                                domain={[0, 100]}
                                ticks={[0, 20, 40, 60, 80, 100]}
                                stroke="#A3A3A3"
                                tickFormatter={(value) => `${value}%`}
                            />

                            <Tooltip content={<CustomTooltip />} />

                            <Line
                                type="monotone"
                                dataKey="primario"
                                name="Settore Primario (%)"
                                stroke={ECONOMY_COLORS.primario}
                                strokeWidth={3}
                                dot={{ r: 3 }}
                                activeDot={{ r: 6 }}
                            />

                            <Line
                                type="monotone"
                                dataKey="secondario"
                                name="Settore Secondario (%)"
                                stroke={ECONOMY_COLORS.secondario}
                                strokeWidth={3}
                                dot={{ r: 3 }}
                                activeDot={{ r: 6 }}
                            />

                            <Line
                                type="monotone"
                                dataKey="terziario"
                                name="Settore Terziario (%)"
                                stroke={ECONOMY_COLORS.terziario}
                                strokeWidth={3}
                                dot={{ r: 3 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}