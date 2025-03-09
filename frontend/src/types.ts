export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'ToDo' | 'Progress' | 'Done';
    createdAt: string;
  }
  
  export type TaskStatus = Task['status'];