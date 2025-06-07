import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const generateContacts = async (number) => {
    try {
        const existContacts = await readContacts();
        const newContacts = Array.from({ length: number }, createFakeContact);
        const updContacts = [...existContacts, ...newContacts];
        await writeContacts(updContacts);

        console.log(`${number} new contacts successful added`);
    } catch (error) {
        console.error('Generating contacts list failed');
        throw error;
    }
};

generateContacts(5);
