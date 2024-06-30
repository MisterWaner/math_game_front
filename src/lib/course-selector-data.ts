import { Course } from "./types";

type CourseSeclectorData = {
    label: string;
    courses: Course[];
};

export const courseSelectorData: CourseSeclectorData[] = [
    {
        label: "Algèbre",
        courses: [
            {
                id: 1,
                title: "Addition",
                path: "jeu/addition",
                type: "addition",
            },
            {
                id: 2,
                title: "Soustraction",
                path: "jeu/soustraction",
                type: "soustraction",
            },
            {
                id: 3,
                title: "Multiplication",
                path: "jeu/multiplication",
                type: "multiplication",
            },
        ],
    },
    {
        label: "Géometrie",
        courses: [
            {
                id: 4,
                title: "Cercle",
                path: "jeu/cercle",
                type: "cercle",
            },
            {
                id: 5,
                title: "Cylindre",
                path: "jeu/cylindre",
                type: "cylindre",
            },
            {
                id: 6,
                title: "Sphere",
                path: "jeu/sphere",
                type: "sphere",
            },
        ],
    },
];
