import { state } from "../scripts/state/state.js";
import { renderCategories } from "../scripts/ui/sidebar.js";
import { renderNotesList } from "../scripts/ui/noteList.js";

state.categories = [
    { id: "html", name: "HTML" },
    { id: "css", name: "CSS" },
    { id: "js", name: "JavaScript" }
];

// Notas de teste

state.notes = [
    {
        id: "1",
        title: "HTML basics",
        categoryId: "html",
        tags: ["beginner", "structure"],
        content: " Clique '!' para puxar o esqueleto básico do HTML.",
        createdAt: Date.now()
    }
];

renderCategories();
renderNotesList();