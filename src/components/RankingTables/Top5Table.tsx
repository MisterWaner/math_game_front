import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
} from "@/components/ui/table";
import { User } from "@/lib/types";
import { getTop5Scores } from "@/services/getDataFromBack";
import { useEffect, useState } from "react";

export default function Top5Table() {
    const [top5Scores, setTop5Scores] = useState<User[]>([]);

    useEffect(() => {
        const scores: Promise<User[]> = getTop5Scores();
        scores
            .then((data) => {
                setTop5Scores(data);
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
                {top5Scores.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.monthly_score}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
