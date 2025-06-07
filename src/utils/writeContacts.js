import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {
    try {
        const newData = JSON.stringify(updatedContacts, null, 2);
        await fs.writeFile(PATH_DB, newData, 'utf-8');
        console.log('Adding new list successful');
        return updatedContacts;
    } catch (error) {
        console.error('Adding new list failed');
        throw error;
    }
};
