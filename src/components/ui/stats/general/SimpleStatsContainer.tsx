import SimpleStatCard from "@/components/ui/stats/general/SimpleStatCard";

type Stat = {
    id: string;
    title: string;
    description: string;
    buttonText: string;
    href: string;
};

export default function SimpleStatsContainer({
                                                 stats,
                                             }: {
    stats: Stat[];
}) {
    return (
        <div
            className="w-full grid grid-cols-4 gap-4 max-[1400px]:grid-cols-3 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1"
        >
            {stats.map((stat) => (
                <SimpleStatCard
                    key={stat.id}
                    title={stat.title}
                    description={stat.description}
                    buttonText={stat.buttonText}
                    href={stat.href}
                />
            ))}
        </div>
    );
}