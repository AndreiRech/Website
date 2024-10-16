import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index.tsx";
import Options from "../pages/Options/index.tsx";
import NotFound from "../pages/NotFound/index.tsx";

const Rout = () => {
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/options" element={<Options />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Rout;
