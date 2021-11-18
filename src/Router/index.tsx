import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from '../components/Templates/Header';
import { Modal } from "../components/Templates/Modal";
import { All } from "../pages/All";
import Home from "../pages/Home"
import { Conclued } from "../pages/Conclued";
import { Error } from "../pages/Error";

export function Router(){
    return (
        <BrowserRouter>
                <Header />
                <Modal />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/conclued" element={<Conclued/>}/>
                    <Route path="/all" element={<All/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
        </BrowserRouter>
    )
}