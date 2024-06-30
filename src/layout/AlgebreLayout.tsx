import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function AlgebreLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
