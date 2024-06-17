import { writable } from 'svelte/store';
import emailsFile from './emails.json';

export const emails = writable(emailsFile.map((email) => ({ ...email, read: false })));
