import { GlobalStyle } from './Styles/GlobalStyle';
import { Router } from "./Router";

import { ModalProvider } from "./Contexts/ModalContext";
import { TodoProvider } from './Contexts/TodoContext';

export function App(){
  return (
    <ModalProvider>
      <TodoProvider>
        <GlobalStyle/>
        <Router />
      </TodoProvider>
    </ModalProvider>
  )
}