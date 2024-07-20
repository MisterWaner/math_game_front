import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import {
    Sheet,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetClose,
    SheetDescription
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { MobileNavButton } from "./NavButtons";
import { menuLinks, userMenuLinks } from "@/lib/menu-links";

export function MobileNav() {
    const links = menuLinks;
    
    return (
        <nav className="md:hidden">
            <Sheet >
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent aria-description="Menu principal" side={"top"}>
                    <SheetDescription className="flex flex-row justify-between items-center space-y-0"></SheetDescription>
                    <SheetTitle className="flex flex-row justify-between items-center space-y-0"></SheetTitle>
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

    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("username");
        Cookies.remove("level");
        Cookies.remove("age");
        Cookies.remove("id");
        navigate("/connexion");
    };
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"top"} aria-description="Menu principal">
                    <SheetDescription className="flex flex-row justify-between items-center space-y-0"></SheetDescription>
                    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
                        <SheetTitle className="flex flex-row justify-between items-center space-y-0"></SheetTitle>
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
                        <li>
                            <SheetClose asChild>
                                <Button
                                    variant="ghost"
                                    className="uppercase"
                                    onClick={handleLogout}
                                >
                                    Se Déconnecter
                                </Button>
                            </SheetClose>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
