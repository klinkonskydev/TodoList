import { useContext } from 'react';
import { Container, ModalForm } from './styles';

import useTodo from '../../../hooks/useTodos';
import ModalContext from '../../../contexts/ModalContext';

export function Modal(){
    const { onSubmitHandler, inputFieldValue } = useTodo();
    const { modalIsOpen } = useContext(ModalContext);

    return (
        <Container className={ modalIsOpen ? 'active' : ''}>
            <ModalForm onSubmit={ onSubmitHandler } className={ modalIsOpen ? 'active' : ''}>
                <input type="text" ref={inputFieldValue} placeholder="Add new todo"/>
                <button type="submit">Add</button>
            </ModalForm>
        </Container>
    )
}