"use client";

import { Card, CardContent } from "@/components/ui/card";
import { URBAN_GRAPH_COLORS } from "@/lib/insu/stats/GraphsColors";
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
    { year: 2000, popolazione: 1970846 },
    { year: 2001, popolazione: 1981452 },
    { year: 2002, popolazione: 1993183 },
    { year: 2003, popolazione: 2005324 },
    { year: 2004, popolazione: 2018150 },
    { year: 2005, popolazione: 2032039 },
    { year: 2006, popolazione: 2047510 },
    { year: 2007, popolazione: 2064607 },
    { year: 2008, popolazione: 2080920 },
    { year: 2009, popolazione: 2093912 },
    { year: 2010, popolazione: 2102167 },
    { year: 2011, popolazione: 2147322 },
    { year: 2012, popolazione: 2164425 },
    { year: 2013, popolazione: 2165314 },
    { year: 2014, popolazione: 2163251 },
    { year: 2015, popolazione: 2160254 },
    { year: 2016, popolazione: 2159238 },
    { year: 2017, popolazione: 2158384 },
    { year: 2018, popolazione: 2157384 },
    { year: 2019, popolazione: 2152554 },
    { year: 2020, popolazione: 2148947 },
    { year: 2021, popolazione: 2144750 },
    { year: 2022, popolazione: 2143480 },
    { year: 2023, popolazione: 2145990 },
    { year: 2024, popolazione: 2146553 },
    { year: 2025, popolazione: 2163500 },
];

const formatPopulation = (value: number) => value.toLocaleString("it-IT");

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;

    const value = payload[0]?.value ?? 0;

    return (
        <div
            className="rounded-xl px-4 py-3 shadow-2xl backdrop-blur-sm"
            style={{
                backgroundColor: URBAN_GRAPH_COLORS.tooltipBg,
                border: `1px solid ${URBAN_GRAPH_COLORS.tooltipBorder}`,
            }}
        >
            <p className="mb-2 text-sm font-semibold text-white">{label}</p>
            <div className="flex items-center justify-between gap-5">
                <span className="text-sm text-neutral-300">Popolazione</span>
                <span className="text-sm font-semibold text-white">
                    {formatPopulation(value)}
                </span>
            </div>
        </div>
    );
};

const CustomLegend = () => {
    return (
        <div className="flex items-center justify-center">
            <div
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 transition-all duration-200 ${URBAN_GRAPH_COLORS.legendBg} ${URBAN_GRAPH_COLORS.legendBorder} ${URBAN_GRAPH_COLORS.legendHoverBg} ${URBAN_GRAPH_COLORS.legendHoverBorder}`}
            >
                <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: URBAN_GRAPH_COLORS.line }}
                />
                <span className="text-sm font-medium text-neutral-200">
                    Popolazione
                </span>
            </div>
        </div>
    );
};

export function InsubricaUrbanGraph() {
    return (
        <Card className={`bg-[#111111] border rounded-2xl shadow-xl ${URBAN_GRAPH_COLORS.cardBorder}`}>
            <CardContent className="p-6">
                <h2 className="mb-4 text-center text-2xl font-bold text-white">
                    Popolazione area Insubrica
                </h2>

                <div className="mb-6">
                    <CustomLegend />
                </div>

                <div className="h-125 pr-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 28, left: 12, bottom: 0 }}>
                            <CartesianGrid
                                stroke={URBAN_GRAPH_COLORS.grid}
                                strokeDasharray="4 4"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="year"
                                stroke={URBAN_GRAPH_COLORS.axis}
                                tick={{ fill: URBAN_GRAPH_COLORS.axis, fontSize: 12 }}
                                axisLine={{ stroke: URBAN_GRAPH_COLORS.axisLine }}
                                tickLine={{ stroke: URBAN_GRAPH_COLORS.axisLine }}
                            />

                            <YAxis
                                stroke={URBAN_GRAPH_COLORS.axis}
                                tick={{ fill: URBAN_GRAPH_COLORS.axis, fontSize: 12 }}
                                axisLine={{ stroke: URBAN_GRAPH_COLORS.axisLine }}
                                tickLine={{ stroke: URBAN_GRAPH_COLORS.axisLine }}
                                tickFormatter={formatPopulation}
                                width={95}
                            />

                            <Tooltip content={<CustomTooltip />} />

                            <Line
                                type="monotone"
                                dataKey="popolazione"
                                name="Popolazione"
                                stroke={URBAN_GRAPH_COLORS.line}
                                strokeWidth={3}
                                dot={{
                                    r: 3,
                                    fill: URBAN_GRAPH_COLORS.dot,
                                    strokeWidth: 0,
                                }}
                                activeDot={{
                                    r: 6,
                                    fill: URBAN_GRAPH_COLORS.lineHover,
                                    stroke: URBAN_GRAPH_COLORS.activeDotStroke,
                                    strokeWidth: 2,
                                }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}