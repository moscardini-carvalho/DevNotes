import { createCategory } from "../services/categories.js";

export function initCategoryCreator() {
    const button = document.getElementById("newCategoryBtn");
    if (!button) return;

    button.addEventListener("click", () => {
        const name = prompt("Category name: ");
        if (!name) return;

        createCategory(name);
    });
}