const BASE_URL = "http://localhost:3001";

export const sendUSerDataToBack = async (formData: FormData) => {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        console.log(response);

        if (response.ok && response.status === 200) {
            console.log(response.formData, "Les données sont enregistrées");
            return response.json();
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}