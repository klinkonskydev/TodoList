import React, { createContext, useState } from "react";

type IModal = {
    modalIsOpen: boolean
    setModalIsOpen: (modalIsOpen: boolean) => void
}

interface IChild {
    children: React.ReactNode | ChildNode
} 

const ModalContext = createContext({} as IModal);

export const ModalProvider = ({children}: IChild) => {
    const [ modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
            {children}
        </ModalContext.Provider>
    )
};

export default ModalContext;