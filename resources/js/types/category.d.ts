export interface Category {
    id: number;
    name: string;
    type: 'income' | 'expense';
    user_id: number;
    created_at: string;
    updated_at: string;
}
