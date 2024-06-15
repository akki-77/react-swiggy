import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Body from './src/components/Body';

const AppLayout = () => {
    return (
        <div className='app-layout'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);




