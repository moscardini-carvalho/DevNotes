import { state } from "../state/state.js";
import { renderNoteView } from "./noteView.js";

const notesList = document.getElementById("notesList");

export function renderNotesList() {
  notesList.innerHTML = "";

  if (state.notes.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No notes available";
    notesList.appendChild(li);
    return;
  }

  state.notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note.title;

    li.onclick = () => {
      state.ui.selectedNoteId = note.id;
      state.ui.view = "view";
      renderNotesList();
      renderNoteView();
    };

    notesList.appendChild(li);
  });
}
