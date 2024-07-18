import { Navigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

export default function RouteGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const username = Cookies.get("username");
    const urlUsername = useParams().username;
    if (!username || username !== urlUsername) {
        return <Navigate to="/connexion" />;
    }

    return <>{children}</>;
}
