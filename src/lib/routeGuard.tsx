import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

export default function RouteGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const [username, setUsername] = useState<string | undefined>("");

    useEffect(() => {
        const storedUsername = Cookies.get("username");
        setUsername(storedUsername);
    }, []);

    if (!username) {
        return <Navigate to="/connexion" />;
    }

    return <>{children}</>;
}
