import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Account() {
    const [username, setUsername] = useState<string | undefined>("");

    useEffect(() => {
        const storedUsername = Cookies.get("username");
        setUsername(storedUsername);
    }, []);
    return (
        <div>
            <h1>Bonjour {username}</h1>
        </div>
    );
}
