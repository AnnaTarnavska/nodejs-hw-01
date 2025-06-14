import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (Array.isArray(contacts) && contacts.length > 0) {
            contacts.pop();
            await writeContacts(contacts);
            console.log('Last contact deleted successful');
        } else {
            console.log('Contacts list is empty, nothing to delete');
        }

    } catch (error) {
        console.error('Failed deleting last contact', error);
        throw error;

    }
};

removeLastContact();
