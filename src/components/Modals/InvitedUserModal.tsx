import InvitedUserForm from "@/components/Forms/InvitedUserForm";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
                <InvitedUserForm />
            </DialogContent>
        </Dialog>
    );
}
