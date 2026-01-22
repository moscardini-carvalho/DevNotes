import { state } from "../state/state.js";
import { createNote } from "../services/notes.js";
import { renderNotesList } from "../ui/noteList.js";

const form = document.getElementById("noteForm");

export function initEditor() {
    form.addEventListener("submit", handleSubmit);
}

export function renderEditor() {
    const noteId = state.ui.selectedNoteId;

    if (!noteId) {
        form.reset();
        return;
    }

    const note = state.notes.find(n => n.id === noteId);

    if (!note) return;

    form.title.value = note.title;
    form.category.value = note.categoryId || "";
    form.content.value = note.content || "";
}

function handleSubmit(event) {

    //Evita reload e perda de estado
    event.preventDefault();

   const title = form.title.value.trim();
   const categoryId = form.category.value;
   const content = form.content.value;

    // validação MÍNIMA
    //Evita notas vazias e lixo no estado
    if (!title) return;

    if (state.ui.selectedNoteId) {
        
        return;
    }

    // fluxo correto
    createNote({
        title,
        categoryId,
        tags: [],
        content
    });

    renderNotesList();
    form.reset();
}