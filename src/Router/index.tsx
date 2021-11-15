import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from '../Components/Templates/Header';
import { Modal } from "../Components/Templates/Modal";
import { All } from "../Pages/All";
import Home from "../Pages/Home"
import { Conclued } from "../Pages/Conclued";
import { Error } from "../Pages/Error";

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