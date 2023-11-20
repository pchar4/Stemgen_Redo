import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";

export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/courses" element={<Courses />} />
                    <Route path="*" element={<Home />} />   
                </Routes>
            </BrowserRouter>
        </div>
        
    )
}