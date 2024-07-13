import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { invitedUserSchema } from "@/lib/zod-schemas";
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
import {
    Select,
    SelectItem,
    SelectValue,
    SelectTrigger,
    SelectContent,
} from "@/components/ui/select";
import { sendInvitedUserDataToBack } from "@/services/sendDataToBack";

export default function InvitedUserForm() {
    const form = useForm<z.infer<typeof invitedUserSchema>>({
        resolver: zodResolver(invitedUserSchema),
        defaultValues: {
            username: "",
            age: 0,
            level: "CP",
        },
    });

    const navigate = useNavigate();

    function onSubmit(values: z.infer<typeof invitedUserSchema>) {
        try {
            sendInvitedUserDataToBack({
                username: `invited_${values.username}`,
                age: values.age,
                level: values.level,
            });
            navigate("/jouer");
            console.log("Les données sont enregistrées", values );
        } catch (error) {
            console.error(error, "Erreur d'envoie des données au back");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4 py-4"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Pseudo</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Choisis ton pseudo"
                                    {...field}
                                    className="col-span-3"
                                    
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Age</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Saisis ton age"
                                    {...field}
                                    className="col-span-3"
                                    type="number"
                                    min={0}
                                    max={100}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Niveau</FormLabel>
                            <div className="col-span-3">
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choisi ton niveau" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="CP">CP</SelectItem>
                                        <SelectItem value="CE1">CE1</SelectItem>
                                        <SelectItem value="CE2">CE2</SelectItem>
                                        <SelectItem value="CM1">CM1</SelectItem>
                                        <SelectItem value="CM2">CM2</SelectItem>
                                        <SelectItem value="6e">6e</SelectItem>
                                        <SelectItem value="5e">5e</SelectItem>
                                        <SelectItem value="4e">4e</SelectItem>
                                        <SelectItem value="3e">3e</SelectItem>
                                        <SelectItem value="Lycée">
                                            Lycée
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-4">
                <span className="col-span-2"></span>
                    <Button type="submit" className="col-span-2 place-items-end">
                        Sauvegarder
                    </Button>
                </div>
            </form>
        </Form>
    );
}
