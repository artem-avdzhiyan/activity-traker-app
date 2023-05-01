import React from 'react';
import './App.css';
import HeaderNavigation from './Theme/HeaderNavigation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import router from './Router';

const App = () => {
    return (
        <div >
            <HeaderNavigation />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
