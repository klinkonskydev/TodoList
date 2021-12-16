import { nanoid } from "nanoid";
import React, { FormEvent, useCallback, useContext, useRef } from "react";
import TodoContext from "../contexts/TodoContext";

type ITodo = {
  id: string;
  name: string | undefined;
  completed: boolean;
  day: number;
};

function useTodo(
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const inputFieldValue = useRef<HTMLInputElement>(null);
  const { todos, setTodo } = useContext(TodoContext);

  const handleCheck = useCallback(
    (todoItem: ITodo) => {
      setTodo(
        todos.map((item) => {
          if (item.id === todoItem.id) {
            return { ...item, completed: !item.completed };
          } else return item;
        })
      );
    },
    [todos]
  );

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();

    if (inputFieldValue.current?.value.trim() !== "") {
      createNewTodo();
    } else {
      alert("Please, type anything");
    }
  }

  const createNewTodo = useCallback(() => {
    const currencyDate = new Date();
    let newTodo = {
      id: nanoid(),
      name: inputFieldValue.current?.value,
      completed: false,
      day: currencyDate.getDate(),
    };

    setTodo((prev) => [...prev, newTodo]);
    inputFieldValue.current.value = "";
    setModalIsOpen(false);
  }, [todos]);

  const RemoveTodo = useCallback(
    (id: string) => {
      const filter = todos.filter((todo) => todo.id !== id);
      setTodo(filter);
    },
    [todos]
  );

  return {
    onSubmitHandler,
    inputFieldValue,
    handleCheck,
    RemoveTodo,
    todos,
  };
}

export default useTodo;
