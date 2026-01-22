import { state } from "../state/state.js";
import { createNote, updateNote } from "../services/notes.js";
import { renderNotesList } from "./noteList.js";
import { renderNoteView } from "./noteView.js";

let initialized = false;

export function initEditor() {
  const form = document.getElementById("noteForm");
  if (!form) return;

  if (!initialized) {
    form.addEventListener("submit", handleSubmit);
    initialized = true;
  }

  if (state.ui.view === "edit") {
    fillFormForEdit(form);
  } else {
    form.reset();
  }
}

function fillFormForEdit(form) {
  const note = state.notes.find(n => n.id === state.ui.selectedNoteId);
  if (!note) return;

  form.title.value = note.title;
  form.category.value = note.categoryId;
  form.content.value = note.content;
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const title = form.title.value.trim();
  const categoryId = form.category.value;
  const content = form.content.value;

  if (!title) return;

  if (state.ui.view === "edit") {
    updateNote(state.ui.selectedNoteId, {
      title,
      categoryId,
      content,
      tags: []
    });

    state.ui.view = "view";
    renderNotesList();
    renderNoteView();
    return;
  }

  createNote({
    title,
    categoryId,
    tags: [],
    content
  });

  renderNotesList();
  form.reset();
}
