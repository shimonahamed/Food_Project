import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllFoodPage from "./pages/AllFoodPage.jsx";

import CreateFoodPage from "./pages/CreateFoodPage.jsx";
import UpdateFoodPage from "./pages/UpdateFoodPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllFoodPage/>}/>
                <Route path="/create" element={<CreateFoodPage/>}/>
                <Route path="/update/:id" element={<UpdateFoodPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;