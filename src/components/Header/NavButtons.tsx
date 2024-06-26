import { NavLink as Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

type NavButtonsProps = {
    label: string;
    path: string;
    id: number;
};

export function MobileNavButton({ label, path, id }: NavButtonsProps) {
    return (
        <li key={id}>
            <Link to={path} >
                <SheetClose asChild>
                    <Button>{label.toUpperCase()}</Button>
                </SheetClose>
            </Link>
        </li>
    );
}

export function DesktopNavButton({ label, path, id }: NavButtonsProps) {
    return (
        <li key={id}>
            <Link to={path} >
                <Button>{label.toUpperCase()}</Button>
            </Link>
        </li>
    );
}
