import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { DesktopNavButton } from "./NavButtons";
import { Button } from "@/components/ui/button";
import { menuLinks, userMenuLinks } from "@/lib/menu-links";

export function DeskNav() {
    const links = menuLinks;
    return (
        <nav className="w-full max-md:hidden">
            <ul className="w-full flex justify-end items-center gap-3">
                {links.map((link) => (
                    <DesktopNavButton key={link.id} {...link} />
                ))}
            </ul>
        </nav>
    );
}

export function UserDeskNav() {
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
        <nav className="w-full max-md:hidden">
            <ul className="w-full flex justify-end items-center gap-3">
                {links.map((link) => (
                    <DesktopNavButton key={link.id} {...link} />
                ))}

                <li>
                    <Button variant="ghost" className="uppercase" onClick={handleLogout}>
                        Se Déconnecter
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
