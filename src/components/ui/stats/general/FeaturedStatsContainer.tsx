"use client";

import FeaturedStatCard from "@/components/ui/stats/general/FeaturedStatCard";
import {featuredStats} from "@/lib/insu/stats/GeneralDataset";

export default function FeaturedStatsContainer() {
    return (
        <div
            id={"featured-content"}
            className="w-full grid grid-cols-3 gap-6 max-[1200px]:grid-cols-1 mb-8"
        >
            {featuredStats.map((stat) => (
                <FeaturedStatCard
                    key={stat.id}
                    title={stat.title}
                    description={stat.description}
                    buttonText={stat.buttonText}
                    accent={stat.accent}
                    href={stat.href}
                />
            ))}
        </div>
    );
}