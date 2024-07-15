import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
import { handleLogin } from "@/services/auth";

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const navigate = useNavigate();

    const username = Cookies.get("username");

    function onSubmit(values: z.infer<typeof loginSchema>) {
        try {
            handleLogin(values);
            
            navigate(`/compte/:${username}`);
        } catch (error) {
            console.error(error, "Erreur d'envoie des données au back");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
