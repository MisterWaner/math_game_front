import { useMediaQuery } from "usehooks-ts";
import MobileNav from "./MobileNav";
import DeskNav from "./DeskNav";

export default function Header() {
    return (
        <>
            <div>
                <NavChoose />
                Header
            </div>
        </>
    );
}

function NavChoose() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return isMobile ? <MobileNav /> : <DeskNav />;
}
