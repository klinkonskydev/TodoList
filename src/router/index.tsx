import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../components/templates/Header";

import { All } from "../pages/All";
import Home from "../pages/Home";
import { Conclued } from "../pages/Conclued";
import { Error } from "../pages/Error";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conclued" element={<Conclued />} />
        <Route path="/all" element={<All />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
