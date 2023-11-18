import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />   
                </Routes>
            </BrowserRouter>
        </div>
        
    )
}