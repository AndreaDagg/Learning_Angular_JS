export interface TodoItemNoID {
    title: string;
    description: string;
    done: boolean;
    category: 'work' | 'family' | 'hobby' | "Categoria";
}
