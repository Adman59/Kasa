import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/layout/layout.js'
import { Home, Logement , About , Erreur404 } from '@/pages/public/index.js'

const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<Erreur404 />} /> 
            </Route>
        </Routes>

    );
};
// export du sous routage pour le router principal
export default PublicRouter;