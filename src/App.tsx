import { GlobalStyle } from './styles/GlobalStyle';
import { Router } from "./router";

import { ModalProvider } from "./contexts/ModalContext";
import { TodoProvider } from './contexts/TodoContext';

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