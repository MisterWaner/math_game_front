import Cookies from "js-cookie";

const username = Cookies.get("username");

export const menuLinks: { id: number, label: string, path: string }[] = [
    {
        id: 1,
        label: "Accueil",
        path: "/"
    },
    {
        id: 2,
        label: "Se Connecter",
        path: "/connexion"
    },
    {
        id: 3,
        label: "Jouer",
        path: "/jouer"
    },
    {
        id: 4,
        label: "Classements",
        path: "/classements"
    }
]


export const userMenuLinks: { id: number, label: string, path: string}[] = [
    {
        id: 1,
        label: "Mon compte",
        path: `/compte/${username}`
    },
    {
        id: 2,
        label: "Classements",
        path: `/compte/${username}/classements`
    }
]
