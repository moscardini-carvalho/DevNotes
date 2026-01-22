import { renderCategories } from "../scripts/ui/sidebar.js";
import { renderNotesList } from "../scripts/ui/noteList.js";
import { initEditor } from "./ui/editor.js";
import { renderNoteView } from "./ui/noteView.js";
import { state } from "./state/state.js";


renderCategories();
renderNotesList();

if (state.ui.view === "view") {
    renderNoteView();
} else {
    initEditor();
}
