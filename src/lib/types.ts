export type Course = {
    id: number;
    title: string;
    path: string;
    type: string;
}

export type User = {
    id?: number;
    username: string;
    password?: string;
    confirmation?: string;
    age?: number;
    level?: string;
    score?: number;
    daily_score?: number;
    weekly_score?: number;
    monthly_score?: number;
    global_score?: number;
}  

export type InvitedUser = {
    id?: number;
    username: string;
    age?: number;
    level?: string;
    score?: number;
    daily_score?: number;
    weekly_score?: number;
    monthly_score?: number;
    global_score?: number;
}

