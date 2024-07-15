const BASE_URL = "http://localhost:3001";
import { User } from "@/lib/types";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

//import { User } from "@/lib/types";

export const handleLogin = async (data: {
    username: string;
    password: string;
}) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response);

        if (response.status === 200) {
            const responseData = await response.json();
            const { token } = responseData;
            const username = jwtDecode<User>(token).username;
            const level = jwtDecode<User>(token).level;
            const age = jwtDecode<User>(token).age;
            const id = jwtDecode<User>(token).id;

            console.log(username);

            Cookies.set("token", token, {
                secure: true,
                sameSite: "None",
                expires: 1,
            });
            Cookies.set("username", username, {
                secure: true,
                sameSite: "None",
                expires: 1,
            });
            Cookies.set("level", level, {
                secure: true,
                sameSite: "None",
                expires: 1,
            });
            Cookies.set("age", String(age), {
                secure: true,
                sameSite: "None",
                expires: 1,
            });
           Cookies.set("id", String(id), {
                secure: true,
                sameSite: "None",
                expires: 1,
            });

            return {
                token,
                username,
                level,
                age,
                id,
            };
        } else {
            throw new Error("Une erreur est survenue lors de la connexion");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};
