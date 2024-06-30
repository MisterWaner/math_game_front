import ContentSection from "@/components/ContentSection";
import ScoreCard from "@/components/Cards/ScoreCard";
import WeeklyRankingTable from "@/components/RankingTables/WeeklyRankingTable";
import MonthlyRankingTable from "@/components/RankingTables/MonthlyRankingTable";
import DailyRankingTable from "@/components/RankingTables/DailyRankingTable";

export default function RankingPage() {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">
                Les classements
            </h2>
            <ContentSection>
                <ScoreCard title="Classement journalier">
                    <DailyRankingTable />
                </ScoreCard>
            </ContentSection>
            <ContentSection>
                <ScoreCard title="Classement hebdomadaire">
                    <WeeklyRankingTable />
                </ScoreCard>
            </ContentSection>
            <ContentSection>
                <ScoreCard title="Classement mensuel">
                    <MonthlyRankingTable />
                </ScoreCard>
            </ContentSection>
        </>
    );
}
