export const state = {
    categories: [], // Armazenamento de de categorias criadas
    notes: [], // Armazenamento de notas criadas

    filters: {               // Manipulação do que se enxerga na tela
        categoryId: null,
        search: "",
    },

    ui: {                   // Estados temporários de interface
        view: "list",  // "list" | "view" | "edit" 
        selectedNoteId: null
    }
};

/*  list → lista de notas

    view → visualização da nota

    edit → edição (futura issue)
    
    */