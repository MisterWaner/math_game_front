import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { loginSchema } from "@/lib/zod-schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignupModal from "../Modals/SignupModal";
import { User } from "@/lib/types";

const BASE_URL = "http://localhost:3001";

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema)
    });

    const navigate = useNavigate();

    async function handleLogin(data: z.infer<typeof loginSchema>) {
        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            
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

                navigate(`/compte/${username}`);
            } else {
                throw new Error("Une erreur est survenue lors de la connexion");
            }
        } catch (error) {
            console.error(error, "Erreur d'envoie des données au back");
            throw error;
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleLogin)}
                className="space-y-6"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pseudo</FormLabel>
                            <FormControl>
                                <Input placeholder="pseudo" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Mot de passe"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Se connecter</Button>

                <div className="text-sm text-slate-500 dark:text-slate-400">
                    Pas encore de compte ?{" "}
                    <SignupModal
                        className="text-sky-500 hover:bg-transparent underline underline-offset-4"
                        label="Inscris - toi !"
                    />
                </div>
            </form>
        </Form>
    );
}
