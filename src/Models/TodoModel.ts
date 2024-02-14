export interface Todos {
  id: string;
  taskName: string;
  isDone: boolean;
  isTaskDone: boolean;
}

export interface TodosModel {
  todos: Todos[];
}

export type EditTaskModel = Omit<Todos, "taskName" | "isDone">;
