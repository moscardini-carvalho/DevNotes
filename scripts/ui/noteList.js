import { state } from "../state/state.js";
import { renderNoteView } from "./noteView.js";

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

        //Estado manda no visual
        if ( state.ui.selectedNoteId === note.id) {
            li.classList.add("active");
        }

        li.textContent = note.title;

        //Clique muda o estado
        li.addEventListener("click", () => {
            //Com isso, o sistema sabe qual nota está ativa
            state.ui.selectedNoteId = note.id;
            state.ui.view = "view";
            renderNotesList();
            renderNoteView();
        });
        notesList.appendChild(li);
    });
}