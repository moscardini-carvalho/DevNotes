const CATEGORIES_KEY = "devnotes:categories";

export function saveCategories(categories) {
  localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
}

export function loadCategories() {
  const data = localStorage.getItem(CATEGORIES_KEY);
  return data ? JSON.parse(data) : [];
}

export function clearCategories() {
  localStorage.removeItem(CATEGORIES_KEY);
}