import { createContext, useState } from "react";

export enum TasksStatus {
  DONE = 'done',
  PENDING = 'pending',
}

type TasksContextProps = {
  children: React.ReactNode;
};

type Task = {
  id: number;
  title: string;
  status: TasksStatus;
};

type TasksContextData = {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: number) => void;
  changeTaskStatus: (id: number, status: TasksStatus) => void;
};

export const TasksContext = createContext({} as TasksContextData);

export function TasksContextProvider({ children }: TasksContextProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Fazer compras', status: TasksStatus.PENDING },
    { id: 2, title: 'Fazer compras', status: TasksStatus.PENDING },
    { id: 3, title: 'Fazer compras', status: TasksStatus.PENDING },
  ]);

  function addTask(title: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      title,
      status: TasksStatus.PENDING,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function removeTask(id: number) {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }

  function changeTaskStatus(id: number, status: TasksStatus) {
    setTasks((oldTasks) =>
      oldTasks.map((task) =>
        task.id === id ? { ...task, status } : { ...task }
      )
    );
  }

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, removeTask, changeTaskStatus }}
    >
      {children}
    </TasksContext.Provider>
  );
}