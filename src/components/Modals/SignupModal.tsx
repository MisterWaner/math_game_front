import SignupForm from "@/components/Forms/SignupForm";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function SignupModal({
    label,
    className,
}: {
    label: string;
    className?: string;
}) {
    return (
        <div className={`${className} inline `}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        className={`${className} font-semibold text-primary`}
                        variant="ghost"
                    >
                        {label}
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-96">
                    <DialogHeader>
                        <DialogTitle>Créer ton compte</DialogTitle>
                        <DialogDescription>
                            Inscris-toi pour avoir accès à toutes les
                            fonctionnalités et devenir un Jedi des maths !
                        </DialogDescription>
                    </DialogHeader>
                    <SignupForm />
                </DialogContent>
            </Dialog>
        </div>
    );
}
