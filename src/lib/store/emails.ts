import { derived, writable } from 'svelte/store';
import emailsFile from './emails.json';
import hintEmails from './hintEmails.json'
import { emailTimer } from './timer';
import { v4 as uuidv4 } from 'uuid';

const RAW_EMAILS = emailsFile.map((email) => ({ ...email, time: email.time || -1, uuid: uuidv4() })).sort((a, b) => b.time - a.time)
const READ_EMAILS_RAW = RAW_EMAILS.map(_e => false)

export const emails = writable(RAW_EMAILS);

export const filteredEmails = derived([emailTimer, emails], ([$emailTimer, $emails]) => $emails.filter(e => e.time == -1 || e.time * 60 < $emailTimer))

export const readEmails = writable(READ_EMAILS_RAW)

export const resetEmails = () => {
    emails.set(RAW_EMAILS)
    readEmails.set(READ_EMAILS_RAW)
}

export const addHint = (c: string) => {
    const i = Number(c) - 1
    const hintEmail = hintEmails[i]
    if (hintEmail) {
        emails.update(e => [hintEmail, ...e])
        readEmails.update(e => [false, ...e])
    }
}