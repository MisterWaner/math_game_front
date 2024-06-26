import { DesktopNavButton } from "./NavButtons"
import menuLinks from "@/lib/menu-links"

export default function DeskNav() {
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
