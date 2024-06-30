import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

export default function InvitedUserModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="font-semibold" variant="outline">
                    Continue en tant qu&apos;invité
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-96">
                <DialogHeader>
                    <DialogTitle>Continue en tant qu&apos;invité</DialogTitle>
                    <DialogDescription>
                        Choisi un pseudo qui déchire
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Pseudo
                        </Label>
                        <Input
                            id="username"
                            placeholder="Ninja des maths"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="age" className="text-right">
                            Age
                        </Label>
                        <Input
                            id="age"
                            placeholder="Ninja des maths"
                            className="col-span-3"
                            type="number"
                            min={0}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="level" className="text-right">
                            Niveau
                        </Label>
                        <div className="col-span-3">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choisi ton niveau" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="CP">CP</SelectItem>
                                    <SelectItem value="CE1">CE1</SelectItem>
                                    <SelectItem value="CE2">CE2</SelectItem>
                                    <SelectItem value="CM1">CM1</SelectItem>
                                    <SelectItem value="CM2">CM2</SelectItem>
                                    <SelectItem value="6e">6e</SelectItem>
                                    <SelectItem value="5e">5e</SelectItem>
                                    <SelectItem value="4e">4e</SelectItem>
                                    <SelectItem value="3e">3e</SelectItem>
                                    <SelectItem value="Lycée">Lycée</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <DialogFooter className="grid grid-cols-4">
                    <span className="col-span-2"></span>
                    <Button
                        type="submit"
                        className="col-span-2 place-items-end"
                    >
                        Sauvegarder
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
