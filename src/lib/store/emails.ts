import { derived, writable } from 'svelte/store';
import emailsFile from './emails.json';
import { emailTimer } from './timer';
import { v4 as uuidv4 } from 'uuid';

const rawEmails = emailsFile.map((email) => ({ ...email, time: email.time || -1, uuid: uuidv4() })).sort((a, b) => b.time - a.time)

export const emails = writable(rawEmails);

export const filteredEmails = derived([emailTimer, emails], ([$emailTimer, $emails]) => $emails.filter(e => e.time == -1 || e.time * 60 < $emailTimer))

export const readEmails = writable(rawEmails.map(_e => false))