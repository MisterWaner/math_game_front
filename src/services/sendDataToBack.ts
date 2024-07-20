const BASE_URL = "http://localhost:3001";

import { User, InvitedUser } from "@/lib/types";

export const sendUSerDataToBack = async (data: User) => {

    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData, "Les données sont enregistrées");
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

export const sendInvitedUserDataToBack = async (data: InvitedUser) => {
    try {
        const response = await fetch(`${BASE_URL}/users/invited`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData, "Les données sont enregistrées");
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

export const sendScoreDataToBack = async (data: User | InvitedUser) => {
    try {
        const response = await fetch(`${BASE_URL}/username/update-score`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData, "Les données sont enregistrées");
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};
