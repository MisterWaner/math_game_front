import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
} from "@/components/ui/table";
import { User } from "@/lib/types";
import { getWeeklyScores } from "@/services/getDataFromBack";
import { useEffect, useState } from "react";

export default function WeeklyRankingTable() {
    const [weeklyScores, setWeeklyScores] = useState<User[]>([]);

    useEffect(() => {
        const scores: Promise<User[]> = getWeeklyScores();
        scores
            .then((data) => {
                setWeeklyScores(data);
            })
            .catch((error) => {
                console.error(
                    error,
                    "Une erreur est survenue lors de la récupération des données"
                );
            });
    }, []);

    return (
        <Table>
            <TableHeader className="bg-sky-400">
                <TableRow>
                    <TableHead>Rang</TableHead>
                    <TableHead>Pseudo</TableHead>
                    <TableHead>Score</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {weeklyScores.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.weekly_score}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
