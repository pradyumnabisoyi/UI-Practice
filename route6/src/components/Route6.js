import React from 'react';
import { Outlet } from 'react-router-dom';

const R = () => {
    return (
        <>
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}

export default R;