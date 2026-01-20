import { state } from "../state/state.js";

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

    return newNote;
}