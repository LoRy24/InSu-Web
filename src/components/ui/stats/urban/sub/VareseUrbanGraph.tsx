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
    { year: 2000, popolazione: 816000 },
    { year: 2001, popolazione: 818500 },
    { year: 2002, popolazione: 821000 },
    { year: 2003, popolazione: 823500 },
    { year: 2004, popolazione: 827000 },
    { year: 2005, popolazione: 832000 },
    { year: 2006, popolazione: 837500 },
    { year: 2007, popolazione: 843000 },
    { year: 2008, popolazione: 848000 },
    { year: 2009, popolazione: 852000 },
    { year: 2010, popolazione: 854000 },
    { year: 2011, popolazione: 877000 },
    { year: 2012, popolazione: 890000 },
    { year: 2013, popolazione: 888000 },
    { year: 2014, popolazione: 886000 },
    { year: 2015, popolazione: 884000 },
    { year: 2016, popolazione: 882000 },
    { year: 2017, popolazione: 880000 },
    { year: 2018, popolazione: 878000 },
    { year: 2019, popolazione: 876000 },
    { year: 2020, popolazione: 873000 },
    { year: 2021, popolazione: 871000 },
    { year: 2022, popolazione: 870000 },
    { year: 2023, popolazione: 869000 },
    { year: 2024, popolazione: 868000 },
    { year: 2025, popolazione: 867000 },
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

export function VareseUrbanGraph() {
    return (
        <Card className={`bg-[#111111] border rounded-2xl shadow-xl ${URBAN_GRAPH_COLORS.cardBorder}`}>
            <CardContent className="p-6">
                <h2 className="mb-4 text-center text-2xl font-bold text-white">
                    Popolazione di Varese
                </h2>

                <div className="mb-6">
                    <CustomLegend />
                </div>

                <div className="h-64">
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
                                width={90}
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