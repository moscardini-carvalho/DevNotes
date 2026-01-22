import { state } from "./state/state.js";
import { renderCategories } from "./ui/sidebar.js";
import { renderNotesList } from "./ui/noteList.js";
import { initEditor } from "./ui/editor.js";
import { renderNoteView } from "./ui/noteView.js";

renderCategories();
renderNotesList();

// SEMPRE inicializa o editor
initEditor();

if (state.ui.view === "view") {
  renderNoteView();
}