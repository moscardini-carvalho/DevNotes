import { state } from "../state/state.js";
import { saveCategories } from "../storage/categoryStorage.js";

export function createCategory(name) {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const exists = state.categories.some(
        c => c.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (exists) return;

    const newCategory = {
        id: crypto.randomUUID(),
        name: trimmedName
    };

    state.categories.push(newCategory);
    saveCategories(state.categories);

    return newCategory;
}