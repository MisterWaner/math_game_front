import { useMediaQuery } from "usehooks-ts";    
import { UserMobileNav } from "./MobileNav";
import { UserDeskNav } from "./DeskNav";

export default function UserHeader() {
    return (
        <header className="flex items-center justify-between p-4 fixed z-50 top-0 w-full h-28 bg-primary border border-b-sky-950">
            <h1 className="w-full text-center md:text-start text-xl font-bold">
                MathémaQuiz
            </h1>
            <NavChoose />
        </header>
    );
}

function NavChoose() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return isMobile ? <UserMobileNav /> : <UserDeskNav />;
}