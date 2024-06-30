import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
} from "@/components/ui/table";

export default function Top5Table() {
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
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>100</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>100</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>100</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>100</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>100</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
