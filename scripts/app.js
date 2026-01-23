import { state } from "./state/state.js";
import { loadNotes } from "./storage/storage.js";
import { renderNotesList } from "./ui/noteList.js";
import { initEditor } from "./ui/editor.js";
import { renderCategories } from "./ui/sidebar.js";
import { initCategoryCreator } from "./ui/categoryCreator.js";

document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Hidratar o state
  const storedNotes = loadNotes();
  if (storedNotes.length > 0) {
    state.notes = storedNotes;
  }

  // 2️⃣ Renderizações iniciais
  renderCategories?.(); // se existir
  renderNotesList();

  // 3️⃣ Inicializar editor (listeners)
  initEditor();
  initCategoryCreator();
});