import { Outlet } from "react-router-dom";
import RouteGuard from "../lib/routeGuard";

export default function UserLayout() {
    return (
        <>
            <RouteGuard>
                <Outlet />
            </RouteGuard>
        </>
    );
}
