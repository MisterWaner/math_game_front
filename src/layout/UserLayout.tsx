import { Outlet } from "react-router-dom";
import RouteGuard from "../lib/routeGuard";
import UserHeader from "@/components/Header/UserHeader";
import Wrapper from "@/components/Wrapper";

export default function UserLayout() {
    return (
        <>
            <RouteGuard>
                <UserHeader />
                <Wrapper>
                    <Outlet />
                </Wrapper>
            </RouteGuard>
        </>
    );
}
