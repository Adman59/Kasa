import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/layout/header/header.js';
import Footer from '@/layout/footer/footer.js';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
    
}

export default Layout