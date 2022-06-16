export enum TodoListCategory {
  Today = "Today",
  Scheduled = "Scheduled",
  All = "All",
}

export interface Todo {
  id: string;
  title: string;
  notes: string;
  deadLine: string;
  completed: boolean;
}

export interface CreateTodo {
  title: string;
  notes?: string;
  deadLine?: string;
}

export interface UpdateTodo {
  id: number;
  title?: string;
  notes?: string;
  deadLine?: string;
  completed?: boolean;
}

export interface TodoList {
  id: string;
  category: TodoListCategory;
  items: Todo[];
}
