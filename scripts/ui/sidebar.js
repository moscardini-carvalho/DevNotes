import { state } from "../state/state.js";

const categoriesList = document.getElementById("categoriesList");

export function renderCategories() {

    //Limpa o conteúdo atual
    categoriesList.innerHTML = "";

    //Se não tiver categorias...
    if (state.categories.length === 0) {
        const emptyItem = document.createElement("li");
        emptyItem.textContent = "No categories";
        emptyItem.classList.add("empty-state");
        categoriesList.appendChild(emptyItem);
        return
    }

    //renderização de cada categoria
    state.categories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category.name;
        li.dataset.id = category.id;

        // Estado visual
        if (state.filters.categoryId === category.id) {
            li.classList.add("active");
        }

        // Evento de clique
        li.addEventListener("click", () => {
            handleCategoryClick(category.id);
        });

        categoriesList.appendChild(li);
    });
}

function handleCategoryClick(categoryId) {

    if (state.filters.categoryId === categoryId) {
        state.filters.categoryId = null; // Desmarcar se já estiver selecionada
    } else {
        state.filters.categoryId = categoryId;
    }

    // Re-renderizar categorias para atualizar o estado visual
    renderCategories();

}