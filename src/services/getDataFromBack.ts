const BASE_URL = "http://localhost:3001";

import { User } from "@/lib/types";

export const getDailyScores = async (): Promise<User[]> => {
    try {
        const response = await fetch(`${BASE_URL}/scores/daily-score`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

export const getWeeklyScores = async (): Promise<User[]> => {
    try {
        const response = await fetch(`${BASE_URL}/scores/weekly-score`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

export const getMonthlyScores = async (): Promise<User[]> => {
    try {
        const response = await fetch(`${BASE_URL}/scores/monthly-score`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

export const getTop5Scores = async (): Promise<User[]> => {
    try {
        const response = await fetch(`${BASE_URL}/scores/top-five`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }   
};