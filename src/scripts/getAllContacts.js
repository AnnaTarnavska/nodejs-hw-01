import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts;
    } catch (error) {
        console.error('Failed reading contacts', error);
        throw error;
    }
};

console.log(await getAllContacts());
