import { useState } from "react";

export function modalState() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleToggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return { modalIsOpen, setModalIsOpen, handleToggleModal };
}
