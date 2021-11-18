import { Container, Main, NameContainer, NewItem, TodoContainer, Trash } from "../defaultStyle";
import { useContext, useEffect, useState } from "react";
import useTodo from "../../hooks/useTodos";
import ModalContext from '../../contexts/ModalContext';
import TodoContext from "../../contexts/TodoContext";

function Home(){
    const [ currencyDate, setCurrencyDate ] = useState< number | null >(null);
    const { setModalIsOpen, modalIsOpen } = useContext(ModalContext);
    const { handleCheck, RemoveTodo } = useTodo();
    const { todos } = useContext(TodoContext);
    
    useEffect(() => {
        const date = new Date();
        setCurrencyDate(date.getDate());
    }, [])

    return (
        <Container>
            <Main>
                {todos.map( item => item.day === currencyDate && item.completed === false &&
                    <TodoContainer key={item.id} className={item.completed ? 'checked' : ''}>
                        <NameContainer>
                            <span onClick={() => handleCheck(item)}>
                                <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="#00AF00" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#00AF00"> <title id="okIconTitle">Concluir</title> <polyline points="4 13 9 18 20 7"/> </svg>
                            </span>

                            <p>
                                {item.name}
                            </p>
                        </NameContainer>

                        <Trash className={item.completed ? 'checked' : ''}>
                            <p>
                                <svg x="59px" y="59px" viewBox="0 0 59 59" xmlSpace="preserve" onClick={() => RemoveTodo(item.id)}>
                                    <path d="M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289
                                        C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h46c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681
                                        C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553
                                        C20.665,4.952,20.988,3.504,21.792,2.681z"/>
                                    <path d="M10.456,54.021C10.493,55.743,11.565,59,15.364,59h28.272c3.799,0,4.871-3.257,4.907-4.958L50.376,10H8.624L10.456,54.021z
                                        M48.291,12l-1.747,41.979C46.538,54.288,46.4,57,43.636,57H15.364c-2.734,0-2.898-2.717-2.909-3.042L10.709,12H48.291z"/>
                                    <path d="M17.5,54h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,54,17.5,54z"/>
                                    <path d="M17.5,49h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,49,17.5,49z"/>
                                    <path d="M17.5,44h24c0.552,0,1-0.447,1-1s-0.448-1-1-1h-24c-0.552,0-1,0.447-1,1S16.948,44,17.5,44z"/>
                                </svg>
                            </p>
                        </Trash>
                    </TodoContainer>
                )}
            </Main>

            <div>
                <NewItem style={{background: modalIsOpen ? '#AB0000' : '#00CF00' }} onClick={ () => setModalIsOpen( !modalIsOpen ) }>
                {modalIsOpen ? 
                    <svg width="40px" height="40px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
                      <line x1="17.5" x2="54.5" y1="17.5" y2="54.5" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                      <line x1="54.5" x2="17.5" y1="17.5" y2="54.5" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                    </svg> : '+'}
                </NewItem>
            </div>
        </Container>
    )
}

export default Home;