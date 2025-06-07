import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const newContact = createFakeContact();
        const existContacts = await readContacts();
        const updContacts = [...existContacts, newContact];
        await writeContacts(updContacts);

        console.log('New contact add successful');
    } catch (error) {
        console.error('Failed adding new contact', error);
        throw error;
    }
};

addOneContact();
