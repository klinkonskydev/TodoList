import React, { createContext, useEffect, useState } from "react";

interface ITodoItems {
  id: string;
  name: string | undefined;
  completed: boolean;
  day: number;
}

type ITodos = {
  todos: ITodoItems[];
  setTodo: React.Dispatch<React.SetStateAction<ITodoItems[]>>;
};

interface IChild {
  children: React.ReactNode | ChildNode;
}

const TodoContext = createContext({} as ITodos);

export const TodoProvider = ({ children }: IChild) => {
  const [todos, setTodo] = useState<ITodoItems[]>([]);

  useEffect(() => {
    if (localStorage.getItem("myTodoList")) {
      const items = JSON.parse(localStorage.getItem("myTodoList"));
      return setTodo(items);
    } else return;
  }, []);

  useEffect(() => {
    return localStorage.setItem("myTodoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
