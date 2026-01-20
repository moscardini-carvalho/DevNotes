import { createNote } from "../services/notes.js";
import { renderNotesList } from "../ui/noteList.js";

const form = document.getElementById("noteForm");

export function initEditor() {
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {

    //Evita reload e perda de estado
    event.preventDefault();

                          // forma correta de ler inputs e evitar querySelector repetido
    const formData = new FormData(form);

    const title = formData.get("title");
    const categoryId = formData.get("category");
    const content = formData.get("content");

    // validação MÍNIMA
    //Evita notas vazias e lixo no estado
    if (!title) return;


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