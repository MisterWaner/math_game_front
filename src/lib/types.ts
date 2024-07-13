export type Course = {
    id: number;
    title: string;
    path: string;
    type: string;
}

export type User = {
    id?: number;
    username: string;
    password: string;
    confirmation: string;
    age: number;
    level: string;
}  

export type InvitedUser = {
    id?: number;
    username: string;
    age: number;
    level: string;
}

