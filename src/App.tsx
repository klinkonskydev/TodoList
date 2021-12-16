import { GlobalStyle } from "./styles/GlobalStyle";
import { Router } from "./router";

import { TodoProvider } from "./contexts/TodoContext";

export function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Router />
    </TodoProvider>
  );
}
