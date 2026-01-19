import { state } from "../state/state.js";

const notesList = document.getElementById("notesList");

export function renderNotesList() {
    notesList.innerHTML = "";

    // Se tiver estado vaio...
    if (state.notes.length === 0) {
        const empty = document.createElement("li");
        empty.textContent = "No notes available.";
        empty.classList.add("empty-space");
        notesList.appendChild(empty);
        return;
    }

    // renderização de notas
    state.notes.forEach(note => {
        const li = document.createElement("li");
        li.classList.add("note-item");
        li.dataset.id = note.id;

        const title = document.createElement("strong");
        title.textContent = note.title;

        li.appendChild(title);
        notesList.appendChild(li);
    });
}