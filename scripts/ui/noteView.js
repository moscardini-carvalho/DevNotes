import { state } from "../state/state.js";

const editorSection = document.querySelector(".editor-section");

export function renderNoteView() {
    const noteId = state.ui.selectedNoteId;
    if (!noteId) return;

    const note = state.notes.find(n => n.id === noteId);

    if(!note) return;

    editorSection.innerHTML = `
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
    document.getElementById("backBtn").addEventListener("click", () => {
        state.ui.view = "list";
        state.ui.selectedNoteId = null;
        window.location.reload();
    });

    document.getElementById("editBtn").addEventListener("click", () => {
        state.ui.view = "edit";
        window.location.reload();
    });

    // Reload é temporário
}