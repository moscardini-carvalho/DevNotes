import { state } from "../state/state.js";
import { initEditor } from "./editor.js";

const noteView = document.getElementById("noteView");
const noteForm = document.getElementById("noteForm");

export function renderNoteView() {
  const noteId = state.ui.selectedNoteId;
  if (!noteId) return;

  const note = state.notes.find(n => n.id === noteId);
  if (!note) return;

  noteForm.hidden = true;
  noteView.hidden = false;

  noteView.innerHTML = `
    <h2>${note.title}</h2>

    <div class="note-meta">
      <span class="note-category">${note.categoryId}</span>
    </div>

    <div class="note-content">
      <p>${note.content}</p>
    </div>

    <div class="note-actions">
      <button class="btn-secondary" id="backBtn">Voltar</button>
      <button class="btn-primary" id="editBtn">Editar</button>
      <button class="btn-danger" id="deleteBtn">Excluir</button>
    </div>
  `;

  bindNoteViewActions();
}

function bindNoteViewActions() {
  document.getElementById("backBtn").onclick = () => {
    state.ui.view = "list";
    state.ui.selectedNoteId = null;
    noteView.hidden = true;
    noteForm.hidden = false;
    noteView.innerHTML = "";
  };

  document.getElementById("editBtn").onclick = () => {
    state.ui.view = "edit";
    noteView.hidden = true;
    noteForm.hidden = false;
    initEditor();
  };
}
