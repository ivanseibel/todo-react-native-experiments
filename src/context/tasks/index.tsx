import { createContext, useState } from "react";

export enum TasksStatus {
  DONE = 'done',
  PENDING = 'pending',
}

type TasksContextProps = {
  children: React.ReactNode;
};

type TasksSummary = {
  total: number;
  pending: number;
  done: number;
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
  tasksSummary: () => TasksSummary;
  orderedTasks: () => Task[];
};

export const TasksContext = createContext({} as TasksContextData);

export function TasksContextProvider({ children }: TasksContextProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Ullamco culpa ipsum ea ipsum veniam non officia ipsum est irure ad nulla irure.', status: TasksStatus.PENDING },
    { id: 2, title: 'Cupidatat voluptate qui veniam consequat laboris anim labore est nisi sunt reprehenderit pariatur ex.', status: TasksStatus.PENDING },
    { id: 3, title: 'Voluptate Lorem veniam id excepteur nostrud sint anim veniam culpa nostrud aute sint ex esse.', status: TasksStatus.PENDING },
  ]);

  // Order tasks according to the following criteria: 1. PENDING + Task ID DESC; 2. DONE + Task ID DESC
  function getOrderedTasks() {
    const pendingTasks = tasks.filter((task) => task.status === TasksStatus.PENDING);
    const doneTasks = tasks.filter((task) => task.status === TasksStatus.DONE);

    const orderedPendingTasks = pendingTasks.sort((a, b) => b.id - a.id);
    const orderedDoneTasks = doneTasks.sort((a, b) => b.id - a.id);

    return [...orderedPendingTasks, ...orderedDoneTasks];
  }

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

  function getTasksSummary(): TasksSummary {
    const total = tasks.length;
    const pending = tasks.filter((task) => task.status === TasksStatus.PENDING)
      .length;
    const done = tasks.filter((task) => task.status === TasksStatus.DONE)
      .length;

    return { total, pending, done };
  }

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, removeTask, changeTaskStatus, tasksSummary: getTasksSummary, orderedTasks: getOrderedTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
}