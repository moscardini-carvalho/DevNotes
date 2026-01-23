const NOTES_KEY = "devnotes:notes";

export function saveNotes(notes) {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function loadNotes() {
    const data = localStorage.getItem(NOTES_KEY);
    return data ? JSON.parse(data) : [];
}

export function clearNotes() {
    localStorage.removeItem(NOTES_KEY);
}