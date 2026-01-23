import { state } from "../state/state.js";
import { saveNotes } from "../storage/storage.js";

export function updateNote(noteId, updatedData) {
    const note = state.notes.find(n => n.id === noteId);
    if (!note) return;

    note.title = updatedData.title;
    note.categoryId = updatedData.categoryId;
    note.tags = updatedData.tags;
    note.content = updatedData.content;
    note.updatedAt = Date.now();

    saveNotes(state.notes);
}

export function createNote(noteData) {

    const newNote = {
        id: crypto.randomUUID(),
        title: noteData.title,
        categoryId: noteData.categoryId,
        tags: noteData.tags,
        content: noteData.content,
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    state.notes.push(newNote);
    saveNotes(state.notes);

    return newNote;
}


export function deleteNote(noteId) {
    const index = state.notes.findIndex(n => n.id ===noteId);
    if (index === -1 ) return;

    state.notes.splice(index, 1);
    saveNotes(state.notes);
}
