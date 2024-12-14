import React from 'react'; 
import { Outlet } from 'react-router-dom'; 
import Navbar from '../component/Navbar';

function Home() {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>

            <div style={{ backgroundColor: 'blue', padding: '10px' }}>
                <Navbar />
            </div>

            <div 
                style={{
                flex: 1, 
                padding: '20px',
                backgroundColor: 'white',  
                overflow: 'auto',
            }}>

            <Outlet />

            </div>
        </div>
    );
}

export default Home;
