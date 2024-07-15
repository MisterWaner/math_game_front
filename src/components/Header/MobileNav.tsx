import {
    Sheet,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { MobileNavButton } from "./NavButtons";
import {menuLinks, userMenuLinks} from "@/lib/menu-links";

export function MobileNav() {
    const links = menuLinks;
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"top"}>
                    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
                        <span></span>
                        <SheetClose asChild>
                            <Button variant="ghost" className="">
                                <X className="h-4 w-4" />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                    <ul className="w-full flex flex-col items-center gap-3">
                        {links.map((link) => (
                            <MobileNavButton key={link.id} {...link} />
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}

export function UserMobileNav() {
    const links = userMenuLinks;
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"top"}>
                    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
                        <span></span>
                        <SheetClose asChild>
                            <Button variant="ghost" className="">
                                <X className="h-4 w-4" />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                    <ul className="w-full flex flex-col items-center gap-3">
                        {links.map((link) => (
                            <MobileNavButton key={link.id} {...link} />
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
