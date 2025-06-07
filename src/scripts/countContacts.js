import { readContacts } from "../utils/readContacts.js";


export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        if (Array.isArray(contacts)) {
            return contacts.length;
        }
        return 0;
    } catch (error) {
        console.error('Failed to count contacts', error);
        throw error;
    }
};

console.log(await countContacts());
