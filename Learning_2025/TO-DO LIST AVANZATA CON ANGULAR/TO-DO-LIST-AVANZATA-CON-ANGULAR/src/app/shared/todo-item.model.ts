export interface TodoItem {

    id: string ;
    title: string;
    description: string;
    done: boolean;
    category: 'work' | 'family' | 'hobby';
}
