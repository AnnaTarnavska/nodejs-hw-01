import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log('All contacts deleted');
    } catch (error) {
        console.error('Deleting contacts failed', error);
        throw error;
    }
};

removeAllContacts();
